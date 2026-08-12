import { Link } from "react-router-dom";
import { navLinks } from "./Header";

export default function SiteFooter() {
  return (
    <footer className="mt-24 bg-ink text-ink-foreground">
      <div className="container-page grid gap-10 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div className="lg:col-span-2">
          <h3 className="font-display text-2xl font-semibold">Navdeep Mahila Sangh</h3>
          <p className="mt-3 max-w-md text-sm text-ink-foreground/70">
            A women-led, grassroots organisation working across 62 villages in Rajasthan and Madhya
            Pradesh for education, livelihoods, health and the dignity of every woman.
          </p>
          <p className="mt-5 text-xs tracking-[0.16em] text-ink-foreground/50 uppercase">
            Reg. No. 04/2004 · 80G &amp; 12A certified · FCRA registered
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold tracking-[0.14em] uppercase">Explore</h4>
          <ul className="mt-4 space-y-2 text-sm text-ink-foreground/70">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link to={link.to} className="transition-colors hover:text-accent">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold tracking-[0.14em] uppercase">Reach us</h4>
          <ul className="mt-4 space-y-2 text-sm text-ink-foreground/70">
            <li>14, Shanti Marg, Civil Lines, Ajmer, Rajasthan 305001</li>
            <li>+91 98290 45678</li>
            <li>hello@navdeepmahilasangh.org</li>
            <li>Mon – Sat, 10:00 AM – 6:00 PM</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-ink-foreground/10">
        <div className="container-page flex flex-col gap-2 py-6 text-xs text-ink-foreground/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Navdeep Mahila Sangh. All rights reserved.</p>
          <p>Every donation is tax-exempt under Section 80G.</p>
        </div>
      </div>
    </footer>
  );
}
