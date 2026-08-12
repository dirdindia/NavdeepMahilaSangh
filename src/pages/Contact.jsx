import { useState } from "react";
import PageHero from "../components/PageHero";

const details = [
  { label: "Head office", value: "14, Shanti Marg, Civil Lines, Ajmer, Rajasthan 305001" },
  { label: "Field office", value: "Ward 7, Bhanpura, Mandsaur, Madhya Pradesh 458775" },
  { label: "Phone", value: "+91 98290 45678" },
  { label: "Women's helpline", value: "1800 233 4567 (toll free, 24x7)" },
  { label: "Email", value: "hello@navdeepmahilasangh.org" },
  { label: "Office hours", value: "Monday – Saturday, 10:00 AM – 6:00 PM" },
];

export default function Contact() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's talk"
        description="Whether you want to donate, volunteer, partner, or simply learn more about our work, our team will get back to you within two working days."
      />

      <section className="container-page mt-20 grid gap-10 lg:grid-cols-2">
        <div>
          <h2 className="text-2xl font-semibold">Reach us</h2>
          <dl className="mt-8 space-y-6">
            {details.map((d) => (
              <div key={d.label} className="border-b border-border pb-5">
                <dt className="text-xs font-semibold tracking-[0.18em] text-muted-foreground uppercase">
                  {d.label}
                </dt>
                <dd className="mt-2 text-base text-foreground">{d.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <form onSubmit={handleSubmit} className="surface-card p-8 sm:p-10">
          <h2 className="text-2xl font-semibold">Send an enquiry</h2>
          {sent && (
            <p className="mt-4 rounded-2xl bg-secondary p-4 text-sm text-secondary-foreground">
              Thank you! Your message has been noted. Our team will respond shortly.
            </p>
          )}
          <div className="mt-6 space-y-4">
            {[
              { id: "name", label: "Full name", type: "text" },
              { id: "email", label: "Email address", type: "email" },
              { id: "phone", label: "Phone number", type: "tel" },
            ].map((f) => (
              <div key={f.id}>
                <label htmlFor={f.id} className="text-sm font-medium">
                  {f.label}
                </label>
                <input
                  id={f.id}
                  name={f.id}
                  type={f.type}
                  required={f.id !== "phone"}
                  className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-ring/30"
                />
              </div>
            ))}
            <div>
              <label htmlFor="topic" className="text-sm font-medium">
                I am writing about
              </label>
              <select
                id="topic"
                name="topic"
                className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none focus:border-primary"
              >
                <option>Donation</option>
                <option>Volunteering</option>
                <option>Internship</option>
                <option>Corporate partnership</option>
                <option>Media</option>
                <option>Other</option>
              </select>
            </div>
            <div>
              <label htmlFor="message" className="text-sm font-medium">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-ring/30"
              />
            </div>
          </div>
          <button
            type="submit"
            className="gradient-warm mt-6 w-full rounded-full px-6 py-3.5 text-sm font-semibold text-primary-foreground"
          >
            Send message
          </button>
        </form>
      </section>
    </>
  );
}
