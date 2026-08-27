"use client";

import { motion, useReducedMotion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CubeMark } from "@/components/mark/CubeMark";
import { hero } from "@/data/site-copy";
import { primaryCta } from "@/data/navigation";
import { easeEnter } from "@/lib/motion";

export function Hero() {
  const reduce = useReducedMotion();
  const enter = (delay: number) =>
    reduce
      ? { initial: false as const, animate: { opacity: 1, y: 0 } }
      : {
          initial: { opacity: 0, y: 12 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.8, delay, ease: easeEnter },
        };

  return (
    <section className="relative night-grid min-h-[100dvh] overflow-hidden bg-ground">
      <div className="mx-auto grid max-w-[1440px] items-center gap-10 px-5 pt-28 pb-16 sm:px-8 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:gap-14 lg:pt-32 lg:pb-20">
        <div>
          <motion.p
            {...enter(0.05)}
            className="font-mono text-[12px] font-medium tracking-[0.16em] text-muted uppercase"
          >
            {hero.eyebrow}
          </motion.p>
          <h1 className="mt-5 text-[40px] leading-[1.05] font-semibold tracking-[-0.05em] text-paper sm:text-[56px] lg:text-[72px]">
            <motion.span className="block overflow-hidden sm:whitespace-nowrap" {...enter(0.12)}>
              {hero.headlineLine1}
            </motion.span>
            <motion.span className="mt-1 block overflow-hidden lg:whitespace-nowrap" {...enter(0.22)}>
              {hero.headlineLine2}
            </motion.span>
          </h1>
          <motion.p
            {...enter(0.34)}
            className="mt-6 max-w-[38ch] text-[17px] leading-relaxed text-ink-2 sm:text-[18px]"
          >
            {hero.body}
          </motion.p>
          <motion.div {...enter(0.46)} className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href={primaryCta.href} className="min-w-[180px]">
              {primaryCta.label}
              <ArrowRight size={16} />
            </Button>
            <Button href="/contact/" variant="secondary">
              Contact
            </Button>
          </motion.div>
        </div>
        <motion.div {...enter(0.28)} className="flex flex-col items-center justify-center lg:pt-4">
          <CubeMark
            title="Shipfront cube"
            className="h-[220px] w-[220px] sm:h-[280px] sm:w-[280px] lg:h-[320px] lg:w-[320px]"
            strokeWidth={1.6}
          />
        </motion.div>
      </div>
    </section>
  );
}
