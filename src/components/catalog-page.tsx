"use client";

import { useMemo, useState } from "react";
import { Search, Sparkles, Compass } from "lucide-react";
import { categories as baseCategories } from "@/data/catalog";
import { CategorySection } from "./category-section";

type FilteredCategory = (typeof baseCategories)[number] & {
  sources: (typeof baseCategories)[number]["sources"];
};

export function CatalogPage() {
  const [query, setQuery] = useState("");

  const normalizedQuery = query.trim().toLowerCase();

  const filtered = useMemo<FilteredCategory[]>(() => {
    if (!normalizedQuery) {
      return baseCategories;
    }

    return baseCategories
      .map((category) => {
        const sources = category.sources.filter((source) => {
          const haystack = [
            source.title,
            source.provider,
            source.description,
            source.primaryUse,
            source.format,
            source.coverage,
          ]
            .join(" ")
            .toLowerCase();
          return haystack.includes(normalizedQuery);
        });

        return { ...category, sources };
      })
      .filter((cat) => cat.sources.length > 0);
  }, [normalizedQuery]);

  return (
    <div className="relative isolate min-h-screen bg-gradient-to-b from-zinc-50 via-white to-blue-50 pb-24 dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-950">
      <div className="absolute inset-x-0 top-0 -z-10 overflow-hidden blur-3xl">
        <div className="mx-auto h-48 w-80 rounded-full bg-gradient-to-r from-blue-200 via-sky-100 to-indigo-200 opacity-60 dark:from-blue-900/40 dark:via-indigo-900/30 dark:to-cyan-900/30" />
      </div>
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 pt-16 sm:px-6 lg:px-8">
        <header className="space-y-6 rounded-3xl border border-blue-100 bg-white/80 p-10 shadow-sm backdrop-blur-md dark:border-blue-900/30 dark:bg-zinc-900/70">
          <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-blue-700 dark:bg-blue-950/40 dark:text-blue-200">
            <Sparkles className="h-4 w-4" />
            High-Frequency Macro Desk · US Focus
          </div>
          <h1 className="text-4xl font-semibold leading-tight text-zinc-900 dark:text-zinc-50">
            US Macro & Market Indicator Playbook
          </h1>
          <p className="max-w-3xl text-lg text-zinc-600 dark:text-zinc-300">
            Curated catalog of free, public data feeds spanning policy, growth,
            liquidity, and risk proxies for a 2–4 week USD macro trading
            horizon. Leverage these sources for rapid monitoring, model
            calibration, and narrative cross-checks.
          </p>

          <div className="relative mt-6">
            <Search className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-zinc-400" />
            <input
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search by provider, series, format, or indicator focus..."
              className="w-full rounded-full border border-zinc-200 bg-white px-12 py-3 text-sm shadow-inner outline-none transition focus:border-blue-500 focus:ring focus:ring-blue-200/60 dark:border-zinc-700 dark:bg-zinc-950/80 dark:text-zinc-100 dark:focus:border-blue-400"
            />
          </div>

          <nav className="flex flex-wrap items-center gap-3 text-sm text-blue-700 dark:text-blue-200">
            <span className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1 font-medium uppercase tracking-wide dark:bg-blue-950/40">
              <Compass className="h-4 w-4" />
              Quick Jump
            </span>
            {baseCategories.map((category) => (
              <a
                key={category.id}
                href={`#${category.id}`}
                className="rounded-full border border-transparent bg-blue-100/70 px-4 py-1 font-medium text-blue-700 transition hover:border-blue-300 hover:bg-white dark:bg-blue-900/30 dark:text-blue-200 dark:hover:border-blue-400"
              >
                {category.name}
              </a>
            ))}
          </nav>
        </header>

        <main className="space-y-8">
          {filtered.length === 0 ? (
            <div className="rounded-3xl border border-dashed border-zinc-300 bg-white/70 p-12 text-center text-zinc-500 dark:border-zinc-700 dark:bg-zinc-900/60 dark:text-zinc-300">
              No matches found. Adjust your search or clear the filter to view
              the full catalog.
            </div>
          ) : (
            filtered.map((category) => (
              <CategorySection key={category.id} category={category} />
            ))
          )}
        </main>
      </div>
    </div>
  );
}
