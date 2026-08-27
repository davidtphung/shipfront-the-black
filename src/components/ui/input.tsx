import * as React from "react";
import { cn } from "@/lib/cn";

export function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      className={cn(
        "min-h-11 w-full rounded-[12px] border border-line bg-void px-3 text-[16px] text-paper outline-none placeholder:text-muted focus:border-accent",
        className,
      )}
      {...props}
    />
  );
}
