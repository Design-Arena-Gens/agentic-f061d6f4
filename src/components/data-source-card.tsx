"use client";

import { ArrowUpRight, Download, Globe, Layers } from "lucide-react";
import Link from "next/link";
import type { DataSource } from "@/data/catalog";

type DataSourceCardProps = {
  source: DataSource;
};

const metaLabelClass =
  "text-xs font-semibold uppercase tracking-wide text-zinc-500";

export function DataSourceCard({ source }: DataSourceCardProps) {
  return (
    <article className="group relative flex flex-col gap-4 rounded-2xl border border-zinc-200/70 bg-white/90 p-6 shadow-sm transition hover:-translate-y-1 hover:border-blue-400/80 hover:shadow-lg dark:border-zinc-800/80 dark:bg-zinc-900/80">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <p className="text-sm font-medium uppercase tracking-wide text-blue-600 dark:text-blue-300">
            {source.provider}
          </p>
          <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">
            {source.title}
          </h3>
        </div>
        <Link
          href={source.url}
          target="_blank"
          className="inline-flex items-center gap-1 rounded-full bg-blue-50 px-3 py-1 text-sm font-semibold text-blue-700 transition hover:bg-blue-100 dark:bg-blue-950/40 dark:text-blue-200"
        >
          Visit
          <ArrowUpRight className="h-4 w-4" />
        </Link>
      </div>

      <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
        {source.description}
      </p>

      <dl className="grid gap-3 text-sm sm:grid-cols-2">
        <div>
          <dt className={metaLabelClass}>Frequency</dt>
          <dd className="font-medium text-zinc-800 dark:text-zinc-100">
            {source.frequency}
          </dd>
        </div>
        <div>
          <dt className={metaLabelClass}>Update Lag</dt>
          <dd className="font-medium text-zinc-800 dark:text-zinc-100">
            {source.updateLag}
          </dd>
        </div>
        <div className="flex items-center gap-2">
          <Globe className="h-4 w-4 text-zinc-400" />
          <div>
            <dt className={metaLabelClass}>Coverage</dt>
            <dd className="font-medium text-zinc-800 dark:text-zinc-100">
              {source.coverage}
            </dd>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Download className="h-4 w-4 text-zinc-400" />
          <div>
            <dt className={metaLabelClass}>Format</dt>
            <dd className="font-medium text-zinc-800 dark:text-zinc-100">
              {source.format}
            </dd>
          </div>
        </div>
      </dl>

      <div className="rounded-xl bg-zinc-100/70 p-3 text-sm leading-relaxed text-zinc-700 dark:bg-zinc-800/50 dark:text-zinc-200">
        <span className={metaLabelClass}>Primary Use</span>
        <p className="mt-2 text-sm font-medium text-zinc-800 dark:text-zinc-100">
          {source.primaryUse}
        </p>
      </div>

      <div className="flex flex-wrap gap-2 text-xs font-medium text-zinc-600 dark:text-zinc-300">
        <span className="rounded-full bg-zinc-100 px-3 py-1 dark:bg-zinc-800/70">
          Access: {source.access}
        </span>
        <span className="rounded-full bg-zinc-100 px-3 py-1 dark:bg-zinc-800/70">
          Format: {source.format}
        </span>
        <span className="flex items-center gap-1 rounded-full bg-zinc-100 px-3 py-1 dark:bg-zinc-800/70">
          <Layers className="h-3.5 w-3.5" />
          {source.coverage}
        </span>
      </div>

      {source.notes && (
        <p className="rounded-xl bg-blue-50 px-4 py-3 text-xs text-blue-800 dark:bg-blue-950/40 dark:text-blue-200">
          Note: {source.notes}
        </p>
      )}
    </article>
  );
}
