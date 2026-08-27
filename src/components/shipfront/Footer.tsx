import Link from "next/link";
import { Logo } from "@/components/mark/Logo";
import { footerLinks } from "@/data/navigation";
import { site } from "@/data/site-copy";
import { withBase } from "@/lib/paths";

export function Footer() {
  return (
    <footer className="border-t border-line bg-ground text-paper">
      <div className="mx-auto grid max-w-[1440px] gap-10 px-5 py-16 sm:px-8 lg:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <Logo />
          <p className="mt-4 max-w-sm text-[14px] leading-relaxed text-muted">
            {site.footerLine}
          </p>
        </div>
        <nav aria-label="Footer">
          <p className="font-mono text-[12px] font-medium tracking-[0.14em] text-muted uppercase">
            Pages
          </p>
          <ul className="mt-4 space-y-2">
            {footerLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={withBase(link.href)}
                  className="text-[15px] text-paper/90 hover:text-accent"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div>
          <p className="font-mono text-[12px] font-medium tracking-[0.14em] text-muted uppercase">
            Visit
          </p>
          <address className="mt-4 not-italic text-[15px] leading-relaxed text-paper/90">
            {site.address.name}
            <br />
            {site.address.street}
            <br />
            {site.address.cityLine}
            <br />
            <a className="mt-3 inline-block text-accent" href={`mailto:${site.email}`}>
              {site.email}
            </a>
          </address>
        </div>
      </div>
      <div className="border-t border-line">
        <p className="mx-auto flex max-w-[1440px] flex-wrap items-center justify-between gap-2 px-5 py-5 text-[12px] text-muted sm:px-8">
          <span>© {new Date().getFullYear()} Shipfront</span>
          <span>{site.builtBy}</span>
        </p>
      </div>
    </footer>
  );
}
