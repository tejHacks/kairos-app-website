export type Section = { title: string; body: React.ReactNode[] }

export function ProsePage({
  eyebrow,
  title,
  intro,
  sections,
}: {
  eyebrow: string
  title: string
  intro?: React.ReactNode
  sections: Section[]
}) {
  return (
    <main className="mx-auto max-w-3xl px-4 py-16 md:px-6 md:py-24">
      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">{eyebrow}</p>
      <h1 className="mt-4 font-serif text-4xl font-semibold text-balance md:text-5xl">{title}</h1>
      {intro && <div className="mt-4 text-muted">{intro}</div>}
      <div className="mt-12 space-y-10">
        {sections.map((s) => (
          <section key={s.title} id={s.title.toLowerCase().replace(/[^a-z]+/g, '-')} className="scroll-mt-24">
            <h2 className="font-serif text-2xl font-semibold">{s.title}</h2>
            <div className="mt-3 space-y-3 leading-relaxed text-muted [&_a]:text-gold [&_a]:underline [&_strong]:text-ink [&_ul]:list-disc [&_ul]:space-y-1.5 [&_ul]:pl-5">
              {s.body.map((p, i) => (
                <div key={i}>{p}</div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </main>
  )
}
