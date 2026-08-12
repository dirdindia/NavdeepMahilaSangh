import { useState } from "react";
import { Link } from "react-router-dom";
import PageHero from "../components/PageHero";

const amounts = [1500, 3000, 6000, 12000];

const impactOf = {
  1500: "Keeps one girl in school for a full year.",
  3000: "Funds a month of a village learning centre.",
  6000: "Sponsors a tailoring course for two women.",
  12000: "Runs one mobile health camp for 150 people.",
};

const ways = [
  {
    title: "Volunteer with us",
    text: "Teach a bridge class, help with digital literacy, or support our health camps for a weekend or a season.",
  },
  {
    title: "Internships & fellowships",
    text: "Three to six month field placements for students of social work, public health and development studies.",
  },
  {
    title: "Corporate partnerships",
    text: "CSR partnerships for skill centres, scholarships and market linkages for our women-run enterprises.",
  },
  {
    title: "Buy Navdeep Craft",
    text: "Block-printed textiles and handicrafts made by our collectives — every purchase pays a fair wage.",
  },
];

export default function GetInvolved() {
  const [amount, setAmount] = useState(3000);

  return (
    <>
      <PageHero
        eyebrow="Get involved"
        title="Stand with 24,500 women who refused to wait"
        description="Give, volunteer or partner with us. Whatever you choose, it reaches a village directly — 78 paise of every rupee goes into program delivery."
      />

      <section className="container-page mt-20 grid gap-10 lg:grid-cols-[1.1fr_1fr]">
        <div className="surface-card p-8 sm:p-10">
          <h2 className="text-2xl font-semibold">Make a donation</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Choose an amount to see exactly what it funds.
          </p>
          <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {amounts.map((a) => (
              <button
                key={a}
                type="button"
                onClick={() => setAmount(a)}
                className={`rounded-2xl border px-4 py-4 text-sm font-semibold transition-colors ${
                  amount === a
                    ? "gradient-warm border-transparent text-primary-foreground"
                    : "border-border bg-background text-foreground hover:border-primary"
                }`}
              >
                ₹{a.toLocaleString("en-IN")}
              </button>
            ))}
          </div>
          <p className="mt-5 rounded-2xl bg-secondary p-4 text-sm text-secondary-foreground">
            {impactOf[amount]}
          </p>
          <button
            type="button"
            className="gradient-warm mt-6 w-full rounded-full px-6 py-3.5 text-sm font-semibold text-primary-foreground"
          >
            Donate ₹{amount.toLocaleString("en-IN")}
          </button>
          <p className="mt-4 text-xs text-muted-foreground">
            Tax exemption under Section 80G. Receipt emailed within 48 hours. For bank transfers or
            cheque donations, please <Link to="/contact" className="text-primary underline">contact us</Link>.
          </p>
        </div>

        <div className="space-y-5">
          {ways.map((w) => (
            <div key={w.title} className="surface-card p-6">
              <h3 className="text-lg font-semibold">{w.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{w.text}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
