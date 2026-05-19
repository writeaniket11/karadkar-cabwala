"use client";

import { CATEGORY_IMAGES } from "@/lib/constants";
import { sampleProducts } from "@/lib/sample-products";
import {
  getSupabaseClient,
  isSupabaseConfigured,
  PRODUCTS_BUCKET,
  PRODUCTS_TABLE,
} from "@/lib/supabase/client";

const LOCAL_PRODUCTS_KEY = "ssj-products";
const PRODUCTS_EVENT = "ssj-products-updated";

function mapProductFromDb(product) {
  return {
    id: product.id,
    title: product.title,
    category: product.category,
    description: product.description,
    imageUrl: product.image_url,
    imagePath: product.image_path,
    createdAt: product.created_at,
  };
}

function mapProductToDb(product, imageUrl, imagePath) {
  return {
    title: product.title.trim(),
    category: product.category,
    description: product.description.trim(),
    image_url: imageUrl,
    image_path: imagePath || null,
  };
}

function getLocalProducts() {
  if (typeof window === "undefined") {
    return sampleProducts;
  }

  const stored = window.localStorage.getItem(LOCAL_PRODUCTS_KEY);
  if (!stored) {
    window.localStorage.setItem(LOCAL_PRODUCTS_KEY, JSON.stringify(sampleProducts));
    return sampleProducts;
  }

  try {
    const parsed = JSON.parse(stored);
    return Array.isArray(parsed) && parsed.length > 0 ? parsed : sampleProducts;
  } catch {
    window.localStorage.setItem(LOCAL_PRODUCTS_KEY, JSON.stringify(sampleProducts));
    return sampleProducts;
  }
}

function setLocalProducts(products) {
  window.localStorage.setItem(LOCAL_PRODUCTS_KEY, JSON.stringify(products));
  window.dispatchEvent(new CustomEvent(PRODUCTS_EVENT));
}

function fileToDataUrl(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

export async function getProducts() {
  if (!isSupabaseConfigured()) {
    return getLocalProducts();
  }

  const supabase = getSupabaseClient();
  const { data, error } = await supabase
    .from(PRODUCTS_TABLE)
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    throw error;
  }

  return data.map(mapProductFromDb);
}

export async function saveProduct(product, file) {
  if (!product.title?.trim() || !product.category || !product.description?.trim()) {
    throw new Error("Title, category, and description are required.");
  }

  if (!isSupabaseConfigured()) {
    const products = getLocalProducts();
    const imageUrl = file
      ? await fileToDataUrl(file)
      : product.imageUrl || CATEGORY_IMAGES[product.category];

    const savedProduct = {
      id: product.id || crypto.randomUUID(),
      title: product.title.trim(),
      category: product.category,
      description: product.description.trim(),
      imageUrl,
      imagePath: product.imagePath || null,
      createdAt: product.createdAt || new Date().toISOString(),
    };

    const nextProducts = product.id
      ? products.map((item) => (item.id === product.id ? savedProduct : item))
      : [savedProduct, ...products];

    setLocalProducts(nextProducts);
    return savedProduct;
  }

  const supabase = getSupabaseClient();
  let imageUrl = product.imageUrl;
  let imagePath = product.imagePath;

  if (file) {
    const extension = file.name.split(".").pop() || "jpg";
    imagePath = `${Date.now()}-${crypto.randomUUID()}.${extension}`;

    const { error: uploadError } = await supabase.storage
      .from(PRODUCTS_BUCKET)
      .upload(imagePath, file, {
        cacheControl: "31536000",
        upsert: false,
      });

    if (uploadError) {
      throw uploadError;
    }

    const { data } = supabase.storage.from(PRODUCTS_BUCKET).getPublicUrl(imagePath);
    imageUrl = data.publicUrl;
  }

  if (!imageUrl) {
    imageUrl = CATEGORY_IMAGES[product.category];
  }

  const payload = mapProductToDb(product, imageUrl, imagePath);

  if (product.id) {
    const { data, error } = await supabase
      .from(PRODUCTS_TABLE)
      .update(payload)
      .eq("id", product.id)
      .select("*")
      .single();

    if (error) {
      throw error;
    }

    return mapProductFromDb(data);
  }

  const { data, error } = await supabase
    .from(PRODUCTS_TABLE)
    .insert(payload)
    .select("*")
    .single();

  if (error) {
    throw error;
  }

  return mapProductFromDb(data);
}

export async function deleteProduct(product) {
  if (!isSupabaseConfigured()) {
    const products = getLocalProducts().filter((item) => item.id !== product.id);
    setLocalProducts(products);
    return;
  }

  const supabase = getSupabaseClient();
  const { error } = await supabase.from(PRODUCTS_TABLE).delete().eq("id", product.id);

  if (error) {
    throw error;
  }

  if (product.imagePath) {
    await supabase.storage.from(PRODUCTS_BUCKET).remove([product.imagePath]);
  }
}

export function subscribeToProducts(onChange) {
  if (typeof window === "undefined") {
    return () => {};
  }

  const handleLocalChange = () => onChange();
  window.addEventListener(PRODUCTS_EVENT, handleLocalChange);
  window.addEventListener("storage", handleLocalChange);

  let channel;
  if (isSupabaseConfigured()) {
    const supabase = getSupabaseClient();
    channel = supabase
      .channel("ssj-products")
      .on(
        "postgres_changes",
        { event: "*", schema: "public", table: PRODUCTS_TABLE },
        () => onChange(),
      )
      .subscribe();
  }

  return () => {
    window.removeEventListener(PRODUCTS_EVENT, handleLocalChange);
    window.removeEventListener("storage", handleLocalChange);

    if (channel) {
      getSupabaseClient().removeChannel(channel);
    }
  };
}
