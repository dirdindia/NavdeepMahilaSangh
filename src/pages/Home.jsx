import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const heroImg = "/hero.jpg";
const educationImg = "/education.jpg";
const shgImg = "/shg.jpg";
const healthImg = "/health.jpg";

const stats = [
  { value: "24,500+", label: "Women reached" },
  { value: "62", label: "Villages served" },
  { value: "410", label: "Self-help groups" },
  { value: "21", label: "Years of service" },
];

const programs = [
  {
    title: "Shiksha — Girls' Education",
    text: "Bridge classes, scholarships and digital learning centres that keep girls in school through Class 12.",
    image: educationImg,
  },
  {
    title: "Swavalamban — Livelihoods",
    text: "Tailoring, handicraft and agri-entrepreneurship training linked with self-help group credit.",
    image: shgImg,
  },
  {
    title: "Swasthya — Health & Nutrition",
    text: "Mobile health camps, maternal care and menstrual health awareness in remote hamlets.",
    image: healthImg,
  },
];

const voices = [
  {
    quote:
      "The tailoring centre gave me my first income. Today four women work with me and my daughter studies in college.",
    name: "Sunita Devi",
    place: "Kishangarh, Ajmer",
  },
  {
    quote:
      "Our self-help group saved ₹2.4 lakh in three years. We no longer go to moneylenders during a bad harvest.",
    name: "Rekha Bai",
    place: "Bhanpura, Mandsaur",
  },
  {
    quote:
      "The legal aid desk helped me file my case and get my land rights back. I now guide other women too.",
    name: "Fatima Bano",
    place: "Pushkar, Ajmer",
  },
];

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden">
        <motion.img
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeIn" }}
          src={heroImg}
          alt="Women learning tailoring at a Navdeep Mahila Sangh skill centre"
          width={1600}
          height={1104}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="hero-overlay absolute inset-0" />
        <div className="container-page relative flex min-h-[86vh] flex-col justify-center py-24">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="w-fit rounded-full border border-ink-foreground/25 bg-ink/30 px-4 py-1.5 text-xs font-semibold tracking-[0.22em] text-ink-foreground uppercase backdrop-blur"
          >
            Navdeep Mahila Sangh
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-6 max-w-4xl text-4xl leading-[1.05] font-semibold text-ink-foreground sm:text-6xl lg:text-7xl"
          >
            When a woman rises, an entire village rises with her.
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 max-w-2xl text-base text-ink-foreground/80 sm:text-lg"
          >
            We are a women-led grassroots organisation building education, livelihood, health and
            legal support systems for rural women across Rajasthan and Madhya Pradesh.
          </motion.p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link
              to="/get-involved"
              className="gradient-warm rounded-full px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-lift)] transition-transform hover:-translate-y-0.5"
            >
              Donate &amp; change a life
            </Link>
            <Link
              to="/programs"
              className="rounded-full border border-ink-foreground/30 px-7 py-3.5 text-sm font-semibold text-ink-foreground transition-colors hover:bg-ink-foreground/10"
            >
              Explore our programs
            </Link>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-card py-4 overflow-hidden flex whitespace-nowrap">
        <motion.div
          className="flex items-center shrink-0"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 15 }}
        >
          {/* Duplicate content to make it infinite */}
          {[1, 2].map((group) => (
            <div key={group} className="flex items-center shrink-0">
              {["Empowering Women", "Building Futures", "Transforming Villages", "Education for All", "Health & Nutrition"].map((word) => (
                <span key={word} className="mx-6 text-sm font-semibold tracking-wider text-muted-foreground uppercase">
                  • {word} 
                </span>
              ))}
            </div>
          ))}
        </motion.div>
      </section>

      <section className="container-page -mt-14 relative">
        <div className="grid gap-px overflow-hidden rounded-3xl border border-border bg-border shadow-[var(--shadow-lift)] sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s, idx) => (
            <motion.div 
              key={s.label} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="bg-card px-6 py-8 text-center"
            >
              <p className="font-display text-3xl font-semibold text-primary sm:text-4xl">
                {s.value}
              </p>
              <p className="mt-2 text-sm text-muted-foreground">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="container-page mt-24 grid gap-12 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="text-xs font-semibold tracking-[0.24em] text-primary uppercase">Who we are</p>
          <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
            Two decades of quiet, stubborn, village-level work
          </h2>
          <p className="mt-5 text-muted-foreground">
            Navdeep Mahila Sangh began in 2004 when eleven women in Ajmer district pooled ₹10 a month
            to help each other through drought years. That savings circle grew into 410 self-help
            groups, four learning centres and a legal aid desk run entirely by local women.
          </p>
          <p className="mt-4 text-muted-foreground">
            We believe change lasts only when it is owned by the community. Every program is designed,
            led and monitored by the women it serves.
          </p>
          <Link
            to="/about"
            className="mt-7 inline-flex rounded-full bg-secondary px-6 py-3 text-sm font-semibold text-secondary-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
          >
            Read our story
          </Link>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <motion.img
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeIn" }}
            src={shgImg}
            alt="Self-help group meeting under a tree"
            loading="lazy"
            width={1200}
            height={900}
            className="h-64 w-full rounded-3xl object-cover shadow-[var(--shadow-soft)] sm:mt-10"
          />
          <motion.img
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeIn", delay: 0.1 }}
            src={educationImg}
            alt="Girls studying at a village learning centre"
            loading="lazy"
            width={1200}
            height={900}
            className="h-64 w-full rounded-3xl object-cover shadow-[var(--shadow-soft)]"
          />
        </div>
      </section>

      <section className="container-page mt-24">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-xs font-semibold tracking-[0.24em] text-primary uppercase">
              What we do
            </p>
            <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">Four pillars of our work</h2>
          </div>
          <Link to="/programs" className="text-sm font-semibold text-primary hover:underline">
            View all programs →
          </Link>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {programs.map((p, idx) => (
            <motion.article 
              key={p.title} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="surface-card overflow-hidden"
            >
              <motion.img
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: "easeIn" }}
                src={p.image}
                alt={p.title}
                loading="lazy"
                width={1200}
                height={900}
                className="h-52 w-full object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold">{p.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{p.text}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="mt-24 bg-secondary py-20">
        <div className="container-page">
          <h2 className="text-3xl font-semibold sm:text-4xl">Voices from our villages</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {voices.map((v) => (
              <blockquote key={v.name} className="surface-card p-7">
                <p className="font-display text-lg leading-relaxed">“{v.quote}”</p>
                <footer className="mt-5 text-sm">
                  <span className="font-semibold text-foreground">{v.name}</span>
                  <span className="block text-muted-foreground">{v.place}</span>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <section className="container-page mt-24">
        <div className="hero-overlay relative overflow-hidden rounded-3xl px-8 py-16 text-center text-ink-foreground sm:px-16">
          <h2 className="text-3xl font-semibold sm:text-4xl">₹1,500 keeps a girl in school for a year</h2>
          <p className="mx-auto mt-4 max-w-2xl text-ink-foreground/80">
            Your contribution funds books, uniforms, bridge classes and a safe place to learn. All
            donations are tax-exempt under Section 80G.
          </p>
          <Link
            to="/get-involved"
            className="mt-8 inline-flex rounded-full bg-background px-8 py-3.5 text-sm font-semibold text-foreground transition-transform hover:-translate-y-0.5"
          >
            Support our work
          </Link>
        </div>
      </section>
    </>
  );
}
