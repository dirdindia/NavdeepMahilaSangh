import PageHero from "../components/PageHero";

const metrics = [
  { value: "24,500+", label: "Women & girls reached" },
  { value: "1,850", label: "Girls in school today" },
  { value: "₹3.2 Cr", label: "Savings by SHGs" },
  { value: "11,000+", label: "Health screenings" },
  { value: "640", label: "Legal cases supported" },
  { value: "1,200", label: "Women entrepreneurs" },
];

const outcomes = [
  { label: "Girls' school retention", value: 92 },
  { label: "SHG loan repayment", value: 98 },
  { label: "Institutional deliveries", value: 87 },
  { label: "Women in panchayat meetings", value: 64 },
];

const stories = [
  {
    title: "From bonded labour to a block-printing unit",
    text: "In Bhanpura, 22 women who once worked as daily-wage labourers now run a block-printing unit earning ₹9,000 a month each.",
  },
  {
    title: "Zero dropouts in Sursura village",
    text: "After three years of bridge classes and parent counselling, Sursura recorded no girl dropping out of school in 2025.",
  },
  {
    title: "Anaemia down by 34%",
    text: "Iron supplementation and nutrition gardens across 18 villages cut anaemia among adolescent girls by more than a third.",
  },
];

export default function Impact() {
  return (
    <>
      <PageHero
        eyebrow="Impact"
        title="We count what actually changes lives"
        description="Independent annual assessments, community scorecards and audited accounts keep us honest about what works and what does not."
      />

      <section className="container-page mt-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {metrics.map((m) => (
          <div key={m.label} className="surface-card p-8">
            <p className="font-display text-4xl font-semibold text-gradient-warm">{m.value}</p>
            <p className="mt-2 text-sm text-muted-foreground">{m.label}</p>
          </div>
        ))}
      </section>

      <section className="container-page mt-24 grid gap-12 lg:grid-cols-2">
        <div>
          <h2 className="text-3xl font-semibold">Key outcome indicators (2025-26)</h2>
          <div className="mt-8 space-y-6">
            {outcomes.map((o) => (
              <div key={o.label}>
                <div className="flex justify-between text-sm font-medium">
                  <span>{o.label}</span>
                  <span className="text-primary">{o.value}%</span>
                </div>
                <div className="mt-2 h-2.5 w-full overflow-hidden rounded-full bg-secondary">
                  <div className="gradient-warm h-full rounded-full" style={{ width: `${o.value}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="surface-card p-8">
          <h2 className="text-2xl font-semibold">How every ₹100 is spent</h2>
          <ul className="mt-6 space-y-3 text-sm">
            {[
              ["Direct program delivery", "₹78"],
              ["Field staff & training", "₹12"],
              ["Monitoring & evaluation", "₹6"],
              ["Administration", "₹4"],
            ].map(([k, v]) => (
              <li key={k} className="flex justify-between border-b border-border pb-3">
                <span className="text-muted-foreground">{k}</span>
                <span className="font-semibold">{v}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mt-24 bg-secondary py-20">
        <div className="container-page">
          <h2 className="text-3xl font-semibold">Stories of change</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {stories.map((s) => (
              <article key={s.title} className="surface-card p-7">
                <h3 className="text-lg font-semibold">{s.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{s.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
