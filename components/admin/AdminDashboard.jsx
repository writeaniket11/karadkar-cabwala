"use client";

import {
  ArrowLeft,
  ImagePlus,
  Loader2,
  LogOut,
  Pencil,
  Plus,
  Save,
  Trash2,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { CATEGORIES, CATEGORY_IMAGES } from "@/lib/constants";
import { getCurrentAdmin, signOutAdmin } from "@/lib/admin-auth";
import {
  deleteProduct,
  getProducts,
  saveProduct,
  subscribeToProducts,
} from "@/lib/product-store";
import { isSupabaseConfigured } from "@/lib/supabase/client";
import { LogoMark } from "@/components/LogoMark";

const emptyForm = {
  id: "",
  title: "",
  category: CATEGORIES[0],
  description: "",
  imageUrl: "",
  imagePath: "",
  createdAt: "",
};

export function AdminDashboard() {
  const router = useRouter();
  const [admin, setAdmin] = useState(null);
  const [checkingAuth, setCheckingAuth] = useState(true);
  const [products, setProducts] = useState([]);
  const [form, setForm] = useState(emptyForm);
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState("");
  const [status, setStatus] = useState("");
  const [error, setError] = useState("");
  const [saving, setSaving] = useState(false);
  const [loadingProducts, setLoadingProducts] = useState(true);

  useEffect(() => {
    let active = true;

    async function checkAccess() {
      const currentAdmin = await getCurrentAdmin();
      if (!active) {
        return;
      }

      if (!currentAdmin) {
        router.replace("/admin/login");
        return;
      }

      setAdmin(currentAdmin);
      setCheckingAuth(false);
    }

    checkAccess();

    return () => {
      active = false;
    };
  }, [router]);

  useEffect(() => {
    if (!admin) {
      return undefined;
    }

    let mounted = true;

    async function loadProducts() {
      try {
        const data = await getProducts();
        if (mounted) {
          setProducts(data);
          setLoadingProducts(false);
          setError("");
        }
      } catch (loadError) {
        if (mounted) {
          setError(loadError.message || "Could not load products.");
          setLoadingProducts(false);
        }
      }
    }

    loadProducts();
    const unsubscribe = subscribeToProducts(loadProducts);

    return () => {
      mounted = false;
      unsubscribe();
    };
  }, [admin]);

  const selectedImage = useMemo(
    () => preview || form.imageUrl || CATEGORY_IMAGES[form.category],
    [form.category, form.imageUrl, preview],
  );

  function updateField(field, value) {
    setForm((current) => ({ ...current, [field]: value }));
  }

  function resetForm() {
    setForm(emptyForm);
    setFile(null);
    setPreview("");
    setStatus("");
    setError("");
  }

  function handleFileChange(event) {
    const nextFile = event.target.files?.[0];
    setFile(nextFile || null);

    if (preview?.startsWith("blob:")) {
      URL.revokeObjectURL(preview);
    }

    if (nextFile) {
      setPreview(URL.createObjectURL(nextFile));
    } else {
      setPreview("");
    }
  }

  function editProduct(product) {
    setForm({
      id: product.id,
      title: product.title,
      category: product.category,
      description: product.description,
      imageUrl: product.imageUrl,
      imagePath: product.imagePath || "",
      createdAt: product.createdAt || "",
    });
    setFile(null);
    setPreview("");
    setStatus("Editing selected design");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setSaving(true);
    setError("");
    setStatus("");

    try {
      await saveProduct(form, file);
      resetForm();
      const data = await getProducts();
      setProducts(data);
      setStatus("Catalogue updated");
    } catch (saveError) {
      setError(saveError.message || "Could not save product.");
    } finally {
      setSaving(false);
    }
  }

  async function handleDelete(product) {
    const confirmed = window.confirm(`Delete "${product.title}"?`);
    if (!confirmed) {
      return;
    }

    setError("");
    setStatus("");

    try {
      await deleteProduct(product);
      const data = await getProducts();
      setProducts(data);
      setStatus("Design deleted");
    } catch (deleteError) {
      setError(deleteError.message || "Could not delete product.");
    }
  }

  async function handleSignOut() {
    await signOutAdmin();
    router.replace("/admin/login");
  }

  if (checkingAuth) {
    return (
      <main className="grid min-h-screen place-items-center bg-ivory text-ink">
        <div className="flex items-center gap-3 text-sm font-semibold">
          <Loader2 className="size-5 animate-spin text-antique" />
          Checking admin access...
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-ivory text-ink">
      <header className="border-b border-ink/10 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-4 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
          <LogoMark />
          <div className="flex flex-wrap gap-2">
            <a
              href="/"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-ink/10 px-4 py-2 text-sm font-semibold text-ink transition hover:border-antique hover:text-antique"
            >
              <ArrowLeft className="size-4" />
              Public Site
            </a>
            <button
              type="button"
              onClick={handleSignOut}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-ink px-4 py-2 text-sm font-semibold text-ivory transition hover:bg-wine"
            >
              <LogOut className="size-4" />
              Sign Out
            </button>
          </div>
        </div>
      </header>

      <section className="mx-auto grid max-w-7xl gap-8 px-4 py-8 sm:px-6 lg:grid-cols-[0.92fr_1.08fr] lg:px-8">
        <div>
          <div className="rounded-[8px] border border-ink/10 bg-white p-5 shadow-luxe sm:p-6">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-semibold uppercase text-antique">
                  Admin Dashboard
                </p>
                <h1 className="mt-2 font-display text-4xl font-semibold text-ink">
                  {form.id ? "Edit design" : "Upload new design"}
                </h1>
              </div>
              <div className="rounded-full bg-pearl px-3 py-1 text-xs font-semibold text-ink/65">
                {isSupabaseConfigured() ? "Supabase" : "Demo"}
              </div>
            </div>

            <form onSubmit={handleSubmit} className="mt-6 grid gap-4">
              <label className="grid gap-2 text-sm font-semibold text-ink">
                Product image
                <div className="overflow-hidden rounded-[8px] border border-ink/10 bg-pearl">
                  <img
                    src={selectedImage}
                    alt="Selected product preview"
                    className="aspect-[4/3] w-full object-cover"
                  />
                  <div className="border-t border-ink/10 bg-white p-3">
                    <label className="inline-flex cursor-pointer items-center gap-2 rounded-full bg-ink px-4 py-2 text-sm font-semibold text-ivory transition hover:bg-antique">
                      <ImagePlus className="size-4" />
                      Choose Image
                      <input
                        className="sr-only"
                        type="file"
                        accept="image/*"
                        onChange={handleFileChange}
                      />
                    </label>
                  </div>
                </div>
              </label>

              <label className="grid gap-2 text-sm font-semibold text-ink">
                Title
                <input
                  value={form.title}
                  onChange={(event) => updateField("title", event.target.value)}
                  className="h-12 rounded-[8px] border border-ink/10 bg-ivory px-4 text-sm font-medium outline-none transition focus:border-antique focus:ring-4 focus:ring-champagne/15"
                  placeholder="Temple Gold Necklace Set"
                  required
                />
              </label>

              <label className="grid gap-2 text-sm font-semibold text-ink">
                Category
                <select
                  value={form.category}
                  onChange={(event) => updateField("category", event.target.value)}
                  className="h-12 rounded-[8px] border border-ink/10 bg-ivory px-4 text-sm font-medium outline-none transition focus:border-antique focus:ring-4 focus:ring-champagne/15"
                  required
                >
                  {CATEGORIES.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </label>

              <label className="grid gap-2 text-sm font-semibold text-ink">
                Description
                <textarea
                  value={form.description}
                  onChange={(event) =>
                    updateField("description", event.target.value)
                  }
                  className="min-h-28 rounded-[8px] border border-ink/10 bg-ivory px-4 py-3 text-sm font-medium leading-6 outline-none transition focus:border-antique focus:ring-4 focus:ring-champagne/15"
                  placeholder="Short catalogue description for customers."
                  required
                />
              </label>

              {error && (
                <div className="rounded-[8px] border border-wine/20 bg-wine/5 px-4 py-3 text-sm font-medium text-wine">
                  {error}
                </div>
              )}
              {status && (
                <div className="rounded-[8px] border border-emerald/20 bg-emerald/5 px-4 py-3 text-sm font-medium text-emerald">
                  {status}
                </div>
              )}

              <div className="grid gap-3 sm:grid-cols-[1fr_auto]">
                <button
                  type="submit"
                  disabled={saving}
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-emerald px-5 text-sm font-bold text-white transition hover:bg-ink disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {saving ? (
                    <Loader2 className="size-4 animate-spin" />
                  ) : form.id ? (
                    <Save className="size-4" />
                  ) : (
                    <Plus className="size-4" />
                  )}
                  {form.id ? "Update Design" : "Publish Design"}
                </button>
                <button
                  type="button"
                  onClick={resetForm}
                  className="inline-flex h-12 items-center justify-center rounded-full border border-ink/10 px-5 text-sm font-bold text-ink transition hover:border-antique hover:text-antique"
                >
                  Clear
                </button>
              </div>
            </form>
          </div>
        </div>

        <div>
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="text-sm font-semibold uppercase text-antique">
                Published Designs
              </p>
              <h2 className="mt-2 font-display text-4xl font-semibold text-ink">
                Live catalogue posts
              </h2>
            </div>
            <div className="rounded-full border border-ink/10 bg-white px-4 py-2 text-sm font-semibold text-ink/65">
              {products.length} products
            </div>
          </div>

          <div className="mt-6 grid gap-4">
            {loadingProducts && (
              <div className="rounded-[8px] border border-ink/10 bg-white p-6 text-sm font-semibold text-ink/60">
                Loading products...
              </div>
            )}

            {!loadingProducts &&
              products.map((product) => (
                <article
                  key={product.id}
                  className="grid gap-4 rounded-[8px] border border-ink/10 bg-white p-3 shadow-sm sm:grid-cols-[150px_1fr]"
                >
                  <img
                    src={product.imageUrl}
                    alt={product.title}
                    className="aspect-square w-full rounded-[8px] object-cover sm:w-[150px]"
                    loading="lazy"
                  />
                  <div className="flex min-w-0 flex-col justify-between gap-4 p-1">
                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="rounded-full bg-pearl px-3 py-1 text-xs font-bold text-antique">
                          {product.category}
                        </span>
                      </div>
                      <h3 className="mt-2 font-display text-2xl font-semibold text-ink">
                        {product.title}
                      </h3>
                      <p className="mt-1 text-sm leading-6 text-ink/60">
                        {product.description}
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <button
                        type="button"
                        onClick={() => editProduct(product)}
                        className="inline-flex items-center gap-2 rounded-full border border-ink/10 px-4 py-2 text-sm font-semibold text-ink transition hover:border-antique hover:text-antique"
                      >
                        <Pencil className="size-4" />
                        Edit
                      </button>
                      <button
                        type="button"
                        onClick={() => handleDelete(product)}
                        className="inline-flex items-center gap-2 rounded-full bg-wine px-4 py-2 text-sm font-semibold text-white transition hover:bg-ink"
                      >
                        <Trash2 className="size-4" />
                        Delete
                      </button>
                    </div>
                  </div>
                </article>
              ))}
          </div>
        </div>
      </section>
    </main>
  );
}
