import { useState } from "react";
import { NavLink, Link } from "react-router-dom";

export const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/programs", label: "Programs" },
  { to: "/impact", label: "Impact" },
  { to: "/gallery", label: "Gallery" },
  { to: "/get-involved", label: "Get Involved" },
  { to: "/contact", label: "Contact" },
];

export default function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur-md">
      <div className="container-page flex h-18 items-center justify-between py-3">
        <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <span className="gradient-warm flex h-11 w-11 items-center justify-center rounded-2xl font-display text-lg font-bold text-primary-foreground shadow-[var(--shadow-soft)]">
            N
          </span>
          <span className="leading-tight">
            <span className="block font-display text-lg font-semibold text-foreground">
              Navdeep Mahila Sangh
            </span>
            <span className="block text-[11px] tracking-[0.18em] text-muted-foreground uppercase">
              Empowering women since 2004
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              className={({ isActive }) =>
                `rounded-full px-3.5 py-2 text-sm font-medium transition-colors hover:text-primary ${
                  isActive ? "text-primary bg-secondary" : "text-muted-foreground"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            to="/get-involved"
            className="gradient-warm hidden rounded-full px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-soft)] transition-transform hover:-translate-y-0.5 sm:inline-flex"
          >
            Donate Now
          </Link>
          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="rounded-xl border border-border p-2.5 text-foreground lg:hidden"
          >
            <span className="block h-0.5 w-5 bg-current" />
            <span className="mt-1 block h-0.5 w-5 bg-current" />
            <span className="mt-1 block h-0.5 w-5 bg-current" />
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-border bg-card lg:hidden">
          <div className="container-page flex flex-col py-3">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === "/"}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `rounded-lg px-2 py-3 text-sm font-medium ${
                    isActive ? "text-primary" : "text-foreground"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
