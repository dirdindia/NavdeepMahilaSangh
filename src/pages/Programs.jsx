import { Link } from "react-router-dom";
import PageHero from "../components/PageHero";
const educationImg = "/education.jpg";
const shgImg = "/shg.jpg";
const healthImg = "/health.jpg";
const heroImg = "/hero.jpg";

const programs = [
  {
    name: "Shiksha",
    title: "Girls' Education",
    image: educationImg,
    text: "Bridge classes for out-of-school girls, scholarships from Class 6 to 12, and digital literacy labs. We work with parents and panchayats to stop early dropouts.",
    points: ["4 learning centres", "1,850 girls enrolled", "92% school retention"],
  },
  {
    name: "Swavalamban",
    title: "Livelihoods & Enterprise",
    image: shgImg,
    text: "Tailoring, block-printing, dairy and agri-entrepreneurship training linked with self-help group credit and market access through our Navdeep Craft collective.",
    points: ["410 self-help groups", "₹3.2 crore group savings", "1,200 women entrepreneurs"],
  },
  {
    name: "Swasthya",
    title: "Health & Nutrition",
    image: healthImg,
    text: "Monthly mobile health camps, maternal and child care follow-ups, anaemia screening and menstrual health awareness sessions in schools and hamlets.",
    points: ["96 camps a year", "11,000+ screenings", "38 trained health sakhis"],
  },
  {
    name: "Adhikar",
    title: "Rights & Legal Aid",
    image: heroImg,
    text: "A women's helpline, paralegal training and a legal aid desk supporting survivors of domestic violence, property disputes and denial of entitlements.",
    points: ["640 cases supported", "24x7 helpline", "70 trained paralegals"],
  },
];

export default function Programs() {
  return (
    <>
      <PageHero
        eyebrow="Programs"
        title="Four pillars, one goal — a woman who decides for herself"
        description="Each program runs on a simple loop: listen to the village, build with local women, measure honestly, and hand over ownership."
      />

      <section className="container-page mt-20 space-y-16">
        {programs.map((p, i) => (
          <article
            key={p.name}
            className={`grid gap-10 lg:grid-cols-2 lg:items-center ${
              i % 2 === 1 ? "lg:[&>figure]:order-2" : ""
            }`}
          >
            <figure className="m-0">
              <img
                src={p.image}
                alt={p.title}
                loading="lazy"
                width={1200}
                height={900}
                className="h-80 w-full rounded-3xl object-cover shadow-[var(--shadow-soft)]"
              />
            </figure>
            <div>
              <p className="text-xs font-semibold tracking-[0.24em] text-primary uppercase">
                {p.name}
              </p>
              <h2 className="mt-3 text-3xl font-semibold">{p.title}</h2>
              <p className="mt-4 text-muted-foreground">{p.text}</p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {p.points.map((pt) => (
                  <li
                    key={pt}
                    className="rounded-full bg-secondary px-4 py-2 text-sm font-medium text-secondary-foreground"
                  >
                    {pt}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </section>

      <section className="container-page mt-24 text-center">
        <h2 className="text-3xl font-semibold">Want to support a specific program?</h2>
        <Link
          to="/contact"
          className="gradient-warm mt-6 inline-flex rounded-full px-8 py-3.5 text-sm font-semibold text-primary-foreground"
        >
          Talk to our team
        </Link>
      </section>
    </>
  );
}
