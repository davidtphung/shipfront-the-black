"use client";

import { useState } from "react";
import { howItWorks } from "@/data/site-copy";
import { cn } from "@/lib/cn";

export function ProcessJourney() {
  const [active, setActive] = useState(0);
  const step = howItWorks.steps[active];

  return (
    <section className="border-y border-line bg-void" aria-labelledby="process-heading">
      <div className="mx-auto grid max-w-[1440px] gap-10 px-5 py-20 sm:px-8 lg:grid-cols-[1fr_1fr] lg:items-center lg:py-28">
        <div>
          <h2
            id="process-heading"
            className="max-w-[18ch] text-[34px] leading-[1.08] font-semibold tracking-[-0.04em] text-paper sm:text-[48px]"
          >
            {howItWorks.headline}
          </h2>
          <ol className="mt-8 space-y-2">
            {howItWorks.steps.map((item, i) => (
              <li key={item.title}>
                <button
                  type="button"
                  onClick={() => setActive(i)}
                  className={cn(
                    "flex min-h-11 w-full items-center gap-4 rounded-[14px] px-3 py-3 text-left transition-colors",
                    active === i ? "bg-ground text-paper" : "text-ink-2 hover:bg-ground/70",
                  )}
                  aria-current={active === i ? "step" : undefined}
                >
                  <span className="font-mono text-[12px] text-muted">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-[16px] font-medium sm:text-[18px]">{item.title}</span>
                </button>
              </li>
            ))}
          </ol>
        </div>
        <div className="rounded-[20px] border border-line bg-ground p-6 sm:p-8">
          <p className="font-mono text-[11px] tracking-[0.16em] text-muted uppercase">
            Connect, Store, Fulfill, Deliver, Grow
          </p>
          <p className="mt-6 text-[28px] leading-tight font-semibold tracking-[-0.03em] text-paper sm:text-[36px]">
            {step.title}
          </p>
          <svg viewBox="0 0 420 180" className="mt-8 w-full" aria-hidden>
            {howItWorks.steps.map((_, i) => (
              <g key={i}>
                <circle
                  cx={30 + i * 58}
                  cy="90"
                  r={i === active ? 14 : 8}
                  fill={i === active ? "#FF6A00" : "#1a1a1a"}
                  stroke={i === active ? "#FF6A00" : "#2a2a2a"}
                />
                {i < howItWorks.steps.length - 1 ? (
                  <line
                    x1={44 + i * 58}
                    y1="90"
                    x2={72 + i * 58}
                    y2="90"
                    stroke="#1f1f1f"
                    strokeWidth="2"
                  />
                ) : null}
              </g>
            ))}
          </svg>
        </div>
      </div>
    </section>
  );
}
