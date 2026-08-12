import { motion } from "framer-motion";
import PageHero from "../components/PageHero";
const shgImg = "/shg.jpg";

const timeline = [
  { year: "2004", text: "Eleven women in Ajmer start a ₹10-a-month savings circle." },
  { year: "2009", text: "First tailoring and embroidery skill centre opens in Kishangarh." },
  { year: "2014", text: "Girls' bridge-school program launched across 18 villages." },
  { year: "2018", text: "Legal aid desk and women's helpline begin operations." },
  { year: "2022", text: "Digital literacy labs set up in four block headquarters." },
  { year: "2026", text: "410 self-help groups, 62 villages, 24,500+ women reached." },
];

const values = [
  { title: "Dignity first", text: "No charity. Every program is built on the agency of women." },
  { title: "Local leadership", text: "94% of our staff and volunteers are from the villages we serve." },
  { title: "Transparency", text: "Audited accounts and impact reports published every year." },
  { title: "Sustainability", text: "We exit a village only when the community can run the work." },
];

const team = [
  { name: "Kamla Sharma", role: "Founder & President" },
  { name: "Dr. Anita Verma", role: "Program Director, Health" },
  { name: "Ritu Meena", role: "Head, Livelihoods" },
  { name: "Shabnam Khan", role: "Legal Aid Coordinator" },
];

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title="Built by rural women, for rural women"
        description="Navdeep Mahila Sangh is a registered non-profit working in Rajasthan and Madhya Pradesh since 2004, with programs designed and led by the communities they serve."
      />

      <section className="container-page mt-20 grid gap-12 lg:grid-cols-2 lg:items-center">
        <motion.img
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeIn" }}
          src={shgImg}
          alt="Women's self-help group meeting"
          loading="lazy"
          width={1200}
          height={900}
          className="h-80 w-full rounded-3xl object-cover shadow-[var(--shadow-soft)]"
        />
        <div>
          <h2 className="text-3xl font-semibold sm:text-4xl">Our mission</h2>
          <p className="mt-5 text-muted-foreground">
            To ensure that every woman and girl in rural India has access to education, a dignified
            income, quality healthcare and the confidence to claim her rights.
          </p>
          <h2 className="mt-10 text-3xl font-semibold sm:text-4xl">Our vision</h2>
          <p className="mt-5 text-muted-foreground">
            A society where a woman's birthplace or income never decides how far she can go.
          </p>
        </div>
      </section>

      <section className="container-page mt-24">
        <h2 className="text-3xl font-semibold sm:text-4xl">What we stand for</h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v) => (
            <div key={v.title} className="surface-card p-6">
              <h3 className="text-lg font-semibold">{v.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground">{v.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-24 bg-secondary py-20">
        <div className="container-page">
          <h2 className="text-3xl font-semibold sm:text-4xl">Our journey</h2>
          <ol className="mt-10 space-y-6 border-l-2 border-primary/25 pl-6">
            {timeline.map((t) => (
              <li key={t.year} className="relative">
                <span className="gradient-warm absolute -left-[31px] mt-1.5 h-3.5 w-3.5 rounded-full" />
                <p className="font-display text-xl font-semibold text-primary">{t.year}</p>
                <p className="mt-1 text-muted-foreground">{t.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="container-page mt-24">
        <h2 className="text-3xl font-semibold sm:text-4xl">The team</h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((m) => (
            <div key={m.name} className="surface-card p-6 text-center">
              <span className="gradient-warm mx-auto flex h-16 w-16 items-center justify-center rounded-full font-display text-xl font-semibold text-primary-foreground">
                {m.name.charAt(0)}
              </span>
              <h3 className="mt-4 text-lg font-semibold">{m.name}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{m.role}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
