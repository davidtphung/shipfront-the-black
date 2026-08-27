import * as React from "react";
import { cn } from "@/lib/cn";

export function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      className={cn(
        "min-h-28 w-full rounded-[12px] border border-line bg-void px-3 py-3 text-[16px] text-paper outline-none placeholder:text-muted focus:border-accent",
        className,
      )}
      {...props}
    />
  );
}
