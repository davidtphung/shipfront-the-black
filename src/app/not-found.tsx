import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <article className="mx-auto max-w-[720px] px-5 pt-32 pb-20 sm:px-8">
      <p className="font-mono text-[12px] tracking-[0.16em] text-accent uppercase">404</p>
      <h1 className="mt-4 text-[40px] font-semibold tracking-[-0.04em] text-paper">
        Page not found
      </h1>
      <p className="mt-4 text-[17px] text-ink-2">This sibling has Home, Get a Quote, and Contact.</p>
      <div className="mt-8">
        <Button href="/">Home</Button>
      </div>
    </article>
  );
}
