import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import Link from "next/link";
import { cn } from "@/lib/cn";

const buttonVariants = cva(
  "inline-flex min-h-11 items-center justify-center gap-2 rounded-[12px] px-5 text-[15px] font-medium tracking-[-0.01em] whitespace-nowrap transition-colors duration-[var(--motion-ui)] ease-[var(--ease-out-expo)] active:scale-[0.98] disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-accent text-black hover:bg-accent/90",
        secondary:
          "border border-line bg-void text-paper hover:border-accent/50 hover:text-paper",
        ghost: "text-paper hover:bg-void-2",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

export function Button({
  className,
  variant,
  asChild = false,
  href,
  type = "button",
  children,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
    href?: string;
  }) {
  const cls = cn(buttonVariants({ variant, className }));

  if (href) {
    const isHash = href.startsWith("#");
    const isExternal = href.startsWith("http") || href.startsWith("mailto:");
    if (isHash || isExternal) {
      return (
        <a href={href} className={cls}>
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={cls}>
        {children}
      </Link>
    );
  }

  const Comp = asChild ? Slot : "button";
  return (
    <Comp type={type} className={cls} {...props}>
      {children}
    </Comp>
  );
}
