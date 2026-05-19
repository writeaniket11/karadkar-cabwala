"use client";

import { Filter, Search } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { ALL_CATEGORY, CATEGORIES } from "@/lib/constants";
import { getProducts, subscribeToProducts } from "@/lib/product-store";
import { sampleProducts } from "@/lib/sample-products";
import { ProductCard } from "@/components/ProductCard";

export function ProductGallery() {
  const [products, setProducts] = useState(sampleProducts);
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState(ALL_CATEGORY);
  const [error, setError] = useState("");

  useEffect(() => {
    let mounted = true;

    async function loadProducts() {
      try {
        const data = await getProducts();
        if (mounted) {
          setProducts(data);
          setError("");
        }
      } catch (loadError) {
        if (mounted) {
          setError(loadError.message || "Could not load products.");
        }
      }
    }

    loadProducts();
    const unsubscribe = subscribeToProducts(loadProducts);

    return () => {
      mounted = false;
      unsubscribe();
    };
  }, []);

  const filteredProducts = useMemo(() => {
    const searchTerm = query.trim().toLowerCase();

    return products.filter((product) => {
      const matchesCategory =
        category === ALL_CATEGORY || product.category === category;
      const matchesQuery =
        !searchTerm ||
        [product.title, product.category, product.description]
          .join(" ")
          .toLowerCase()
          .includes(searchTerm);

      return matchesCategory && matchesQuery;
    });
  }, [category, products, query]);

  return (
    <section id="designs" className="bg-ivory px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase text-antique">
              Jewellery Catalogue
            </p>
            <h2 className="mt-2 font-display text-4xl font-semibold leading-tight text-ink sm:text-5xl">
              Browse premium wholesale designs
            </h2>
            <p className="mt-4 text-base leading-7 text-ink/65">
              Gold jewellery, imitation collections, festive essentials, and
              fresh arrivals curated for Karad retailers and occasion buyers.
            </p>
          </div>

          <div className="rounded-full border border-ink/10 bg-white px-4 py-2 text-sm font-semibold text-ink/70 shadow-sm">
            {filteredProducts.length} designs shown
          </div>
        </div>

        <div className="mt-8 grid gap-3 lg:grid-cols-[minmax(260px,360px)_1fr]">
          <label className="relative block">
            <span className="sr-only">Search jewellery</span>
            <Search className="pointer-events-none absolute left-4 top-1/2 size-5 -translate-y-1/2 text-ink/35" />
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              className="h-12 w-full rounded-full border border-ink/10 bg-white pl-12 pr-4 text-sm font-medium text-ink outline-none transition placeholder:text-ink/35 focus:border-antique focus:ring-4 focus:ring-champagne/15"
              placeholder="Search rings, chains, new designs..."
              type="search"
            />
          </label>

          <div className="flex items-center gap-2 overflow-x-auto rounded-full border border-ink/10 bg-white p-1">
            <div className="hidden items-center gap-2 px-3 text-sm font-semibold text-ink/45 sm:flex">
              <Filter className="size-4" />
              Filter
            </div>
            {[ALL_CATEGORY, ...CATEGORIES].map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => setCategory(item)}
                className={`shrink-0 rounded-full px-4 py-2 text-sm font-semibold transition ${
                  category === item
                    ? "bg-ink text-ivory shadow-sm"
                    : "text-ink/65 hover:bg-pearl hover:text-ink"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        {error && (
          <div className="mt-6 rounded-[8px] border border-wine/20 bg-wine/5 px-4 py-3 text-sm font-medium text-wine">
            {error}
          </div>
        )}

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="mt-10 rounded-[8px] border border-dashed border-ink/20 bg-white px-6 py-12 text-center">
            <p className="font-display text-2xl font-semibold text-ink">
              No matching designs
            </p>
            <p className="mt-2 text-sm text-ink/60">
              Try another search term or switch the category filter.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
