export default function PageHero({ eyebrow, title, description }) {
  return (
    <section className="relative overflow-hidden bg-ink py-20 text-ink-foreground sm:py-24">
      <div className="hero-overlay absolute inset-0 opacity-80" />
      <div className="container-page relative">
        <p className="text-xs font-semibold tracking-[0.24em] text-accent uppercase">{eyebrow}</p>
        <h1 className="mt-4 max-w-3xl text-4xl font-semibold sm:text-5xl">{title}</h1>
        <p className="mt-5 max-w-2xl text-base text-ink-foreground/75 sm:text-lg">{description}</p>
      </div>
    </section>
  );
}
