export function Contact({ site }) {
  const { contact } = site;

  return (
    <section id="contact" className="bg-band/5 px-5 py-20">
      <div className="mx-auto max-w-4xl text-center">
        <p className="font-display text-sm tracking-[0.28em] text-gold uppercase">
          {contact.eyebrow}
        </p>
        <h2 className="mt-3 font-display text-4xl font-semibold md:text-5xl">
          {contact.heading}
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-muted">
          {contact.description}
        </p>
        <ul className="mt-10 grid gap-4 text-left sm:grid-cols-2 lg:grid-cols-3">
          {contact.contacts.map(({ name, phone }) => (
            <li
              key={phone}
              className="rounded-2xl border border-gold/25 bg-page p-5 shadow-sm"
            >
              <h3 className="font-display text-2xl font-semibold text-accent-deep">
                {name}
              </h3>
              <p className="mt-2 text-sm text-muted">
                +91 {phone.slice(0, 5)} {phone.slice(5)}
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                <a
                  href={`tel:+91${phone}`}
                  className="inline-flex min-h-11 items-center justify-center rounded-full bg-accent-deep px-4 text-sm font-medium text-page"
                  aria-label={`${contact.callLabel} ${name}`}
                >
                  {contact.callLabel}
                </a>
                <a
                  href={`https://wa.me/91${phone}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-11 items-center justify-center rounded-full border border-accent-deep px-4 text-sm font-medium text-accent-deep"
                  aria-label={`${contact.whatsappLabel} ${name}`}
                >
                  {contact.whatsappLabel}
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
