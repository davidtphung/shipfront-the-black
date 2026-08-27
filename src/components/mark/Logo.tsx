import { CubeMark } from "@/components/mark/CubeMark";
import { cn } from "@/lib/cn";

export function Logo({ className }: { className?: string }) {
  return (
    <span className={cn("inline-flex items-center gap-2 text-paper", className)}>
      <span
        translate="no"
        className="text-[15px] font-bold tracking-[-0.04em] sm:text-[17px]"
      >
        SHIPFRONT
      </span>
      <CubeMark className="h-[22px] w-[22px] shrink-0" />
    </span>
  );
}
