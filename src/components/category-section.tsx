"use client";

import { ChevronDown, ChevronUp, Clock3 } from "lucide-react";
import { useState } from "react";
import type { IndicatorCategory } from "@/data/catalog";
import { DataSourceCard } from "./data-source-card";

type CategorySectionProps = {
  category: IndicatorCategory;
  defaultOpen?: boolean;
};

export function CategorySection({
  category,
  defaultOpen = true,
}: CategorySectionProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <section
      id={category.id}
      className="rounded-3xl border border-zinc-200/70 bg-white/80 p-6 shadow-sm backdrop-blur-sm transition hover:border-blue-300/60 dark:border-zinc-800/70 dark:bg-zinc-900/60"
    >
      <header
        className="flex cursor-pointer flex-wrap items-center justify-between gap-4"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-50">
            {category.name}
          </h2>
          <p className="max-w-3xl text-sm text-zinc-600 dark:text-zinc-300">
            {category.summary}
          </p>
          <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-blue-700 dark:bg-blue-950/50 dark:text-blue-200">
            <Clock3 className="h-3.5 w-3.5" />
            {category.timeHorizon}
          </div>
        </div>
        <button
          type="button"
          aria-expanded={isOpen}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-200 bg-white shadow-sm transition hover:border-blue-300 hover:text-blue-600 dark:border-zinc-700 dark:bg-zinc-900 dark:hover:border-blue-400"
        >
          {isOpen ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
        </button>
      </header>

      {isOpen && (
        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          {category.sources.map((source) => (
            <DataSourceCard key={source.title} source={source} />
          ))}
        </div>
      )}
    </section>
  );
}
