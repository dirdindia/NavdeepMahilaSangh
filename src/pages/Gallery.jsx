import { useState } from "react";
import { motion } from "framer-motion";
import PageHero from "../components/PageHero";
const heroImg = "/hero.jpg";
const educationImg = "/education.jpg";
const shgImg = "/shg.jpg";
const healthImg = "/health.jpg";

const items = [
  { src: heroImg, alt: "Tailoring skill centre in session", cat: "Livelihoods" },
  { src: educationImg, alt: "Girls at a village learning centre", cat: "Education" },
  { src: shgImg, alt: "Self-help group savings meeting", cat: "Livelihoods" },
  { src: healthImg, alt: "Rural health camp check-up", cat: "Health" },
  { src: educationImg, alt: "Bridge class for out-of-school girls", cat: "Education" },
  { src: healthImg, alt: "Health sakhi counselling a mother", cat: "Health" },
];

const categories = ["All", "Education", "Livelihoods", "Health"];

export default function Gallery() {
  const [active, setActive] = useState("All");
  const shown = active === "All" ? items : items.filter((i) => i.cat === active);

  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="A year in our villages"
        description="Classrooms under tin roofs, savings ledgers under neem trees, health camps in tents — this is what our work looks like."
      />

      <section className="container-page mt-16">
        <div className="flex flex-wrap gap-2">
          {categories.map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => setActive(c)}
              className={`rounded-full px-5 py-2.5 text-sm font-medium transition-colors ${
                active === c
                  ? "gradient-warm text-primary-foreground"
                  : "bg-secondary text-secondary-foreground hover:bg-accent hover:text-accent-foreground"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {shown.map((item, idx) => (
            <motion.figure
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4, delay: idx * 0.05, ease: "easeIn" }}
              key={`${item.alt}-${idx}`}
              className="group relative m-0 overflow-hidden rounded-3xl shadow-[var(--shadow-soft)]"
            >
              <img
                src={item.src}
                alt={item.alt}
                loading="lazy"
                width={1200}
                height={900}
                className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <figcaption className="hero-overlay absolute inset-x-0 bottom-0 p-5 text-sm font-medium text-ink-foreground opacity-0 transition-opacity group-hover:opacity-100">
                {item.alt}
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </section>
    </>
  );
}
