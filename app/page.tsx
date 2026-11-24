import Image from 'next/image'
import { BellRing, BookOpen, Droplets, Flame, PenTool, ShieldCheck, Download } from 'lucide-react'
import { site } from '@/lib/site'

const features = [
  {
    icon: BellRing,
    title: 'Plan your prayer hours',
    desc: 'Set the hours you meet with God (dawn, noon, night, any time you choose) and Kairos reminds you when each one comes. The next prayer and a live countdown sit at the top.',
  },
  {
    icon: Flame,
    title: 'The Altar',
    desc: 'A focused prayer timer with a fresh line of Scripture each session. Put the phone down and come before the throne.',
  },
  {
    icon: BookOpen,
    title: 'Meditate',
    desc: 'A Psalm and a word of wisdom every day, from preachers like Kenneth Hagin, David Oyedepo, Benson Idahosa, A. W. Tozer and E. M. Bounds. Every quote names the book or sermon it comes from.',
  },
  {
    icon: PenTool,
    title: 'Scribe',
    desc: 'Write what God speaks. A prayer journal with tags, search, a monthly timeline and a streak, plus PDF export when you want to share an entry.',
  },
  {
    icon: Droplets,
    title: 'Fasting',
    desc: 'Guided fasts with a KJV anchor verse for each plan and a timer that keeps track of the hours for you.',
  },
  {
    icon: ShieldCheck,
    title: 'Private by design',
    desc: 'No account, no sign-up and no ads. Your prayers, journal and fasts are stored on your phone and nowhere else.',
  },
]

const screens = [
  { src: '/screens/altar.jpg', alt: 'The Altar: a prayer timer with a verse of Scripture' },
  { src: '/screens/plan.jpg', alt: 'Plan: the next prayer with a countdown, and the list of prayer hours' },
  { src: '/screens/meditate.jpg', alt: 'Meditate: a daily Psalm and a quote from a Christian preacher' },
  { src: '/screens/scribe.jpg', alt: 'Scribe: a prayer journal grouped by month' },
  { src: '/screens/fast.jpg', alt: 'Fasting: guided fasting plans' },
]

const quotes = [
  { text: 'No man is greater than his prayer life.', author: 'Leonard Ravenhill', source: 'Why Revival Tarries' },
  {
    text: 'Men are God’s method. The Church is looking for better methods; God is looking for better men.',
    author: 'E. M. Bounds',
    source: 'Power Through Prayer',
  },
  {
    text: 'If you stand by the Word, God will stand by you and will make His Word good in your life.',
    author: 'Kenneth E. Hagin',
    source: 'Bible Prayer Study Course',
  },
]

function GooglePlayButton() {
  return (
    <a
      href={site.playUrl}
      className="inline-flex items-center gap-3 rounded-full bg-gold-fill px-7 py-3.5 font-semibold text-on-gold shadow-lg shadow-gold-fill/20 transition hover:brightness-105"
    >
      <svg aria-hidden="true" viewBox="0 0 24 24" className="size-5 fill-current">
        <path d="M3.6 1.8a1.5 1.5 0 0 0-.6 1.2v18a1.5 1.5 0 0 0 .6 1.2l10-10.2zm11.4 9 2.8-2.8L5.2 1.1zm0 2.4L5.2 22.9l12.6-6.9zm4-3.3-2.9 2.1 2.9 2.1 2.2-1.2a1 1 0 0 0 0-1.8z" />
      </svg>
      Get it on Google Play
    </a>
  )
}

export default function HomePage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 h-[560px] bg-[radial-gradient(ellipse_at_top,rgb(224_184_80/0.18),transparent_65%)]"
        />
        <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-4 pb-20 pt-16 md:grid-cols-[1.1fr_0.9fr] md:px-6 md:pt-24">
          <div className="text-center md:text-left">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
              καιρός · the appointed time
            </p>
            <h1 className="mt-6 font-serif text-5xl font-semibold leading-[1.05] text-balance md:text-7xl">
              Redeem the time.
              <br />
              <span className="italic text-gold">Keep the hour of prayer.</span>
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-pretty text-muted md:mx-0">
              Kairos helps you set apart hours for God and actually keep them. Plan your prayer
              times, come to the Altar, meditate on the Word, write what He speaks, and fast with
              purpose.
            </p>
            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row md:justify-start">
              <GooglePlayButton />
              <a
                href={site.apkUrl}
                className="inline-flex items-center gap-2 rounded-full border border-line px-6 py-3.5 text-sm font-medium text-ink transition hover:border-gold hover:text-gold"
              >
                <Download className="size-4" />
                Download the APK
              </a>
            </div>
            <p className="mt-4 text-xs text-muted">Free · Android 7.0 and later · No account needed</p>
          </div>

          <div className="relative mx-auto w-full max-w-[300px]">
            <div aria-hidden="true" className="absolute -inset-8 rounded-full bg-gold-fill/15 blur-3xl" />
            <Image
              src="/screens/plan.jpg"
              alt="The Kairos Plan screen showing the next prayer and a countdown"
              width={600}
              height={1304}
              priority
              className="relative rounded-[2.5rem] border border-line shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Verse */}
      <section className="border-y border-line bg-surface">
        <figure className="mx-auto max-w-3xl px-4 py-14 text-center md:px-6">
          <blockquote className="font-serif text-2xl italic leading-relaxed text-pretty md:text-3xl">
            “See then that ye walk circumspectly, not as fools, but as wise, redeeming the time,
            because the days are evil.”
          </blockquote>
          <figcaption className="mt-4 text-sm font-medium tracking-wide text-gold">
            Ephesians 5:15–16, KJV
          </figcaption>
        </figure>
      </section>

      {/* Features */}
      <section id="features" className="mx-auto max-w-6xl scroll-mt-24 px-4 py-24 md:px-6">
        <div className="max-w-2xl">
          <h2 className="font-serif text-4xl font-semibold md:text-5xl">Everything for a life of prayer</h2>
          <p className="mt-4 text-lg leading-relaxed text-muted">
            Five tools, one purpose: to help you turn up at the place of prayer, day after day.
          </p>
        </div>
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <article
              key={f.title}
              className="rounded-3xl border border-line bg-surface p-7 transition-colors hover:border-gold/50"
            >
              <div className="flex size-11 items-center justify-center rounded-2xl bg-gold-fill/15 text-gold">
                <f.icon className="size-5" aria-hidden="true" />
              </div>
              <h3 className="mt-5 font-serif text-2xl font-semibold">{f.title}</h3>
              <p className="mt-2 leading-relaxed text-muted">{f.desc}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Screens */}
      <section id="screens" className="scroll-mt-24 border-t border-line bg-surface py-24">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <h2 className="font-serif text-4xl font-semibold md:text-5xl">A quiet place for your soul</h2>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted">
            Deep night tones, warm gold, nothing shouting for your attention. Light mode included.
          </p>
        </div>
        <div className="mx-auto mt-12 flex max-w-6xl snap-x snap-mandatory gap-5 overflow-x-auto px-4 pb-4 md:px-6">
          {screens.map((s) => (
            <Image
              key={s.src}
              src={s.src}
              alt={s.alt}
              width={600}
              height={1304}
              className="w-[220px] shrink-0 snap-start rounded-[2rem] border border-line shadow-xl md:w-[240px]"
            />
          ))}
        </div>
      </section>

      {/* Quotes */}
      <section className="mx-auto max-w-6xl px-4 py-24 md:px-6">
        <h2 className="font-serif text-4xl font-semibold md:text-5xl">Words from the generals</h2>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted">
          Daily Wisdom in Kairos uses only real, published words from preachers and teachers of
          the faith, each with its source. Nothing made up.
        </p>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {quotes.map((q) => (
            <figure key={q.text} className="flex flex-col rounded-3xl border border-line p-7">
              <span aria-hidden="true" className="font-serif text-5xl leading-none text-gold">“</span>
              <blockquote className="mt-2 flex-1 font-serif text-xl leading-relaxed">{q.text}</blockquote>
              <figcaption className="mt-6 border-t border-line pt-4 text-sm">
                <span className="font-semibold text-gold">{q.author}</span>
                <span className="block italic text-muted">{q.source}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-4 pb-24 md:px-6">
        <div className="relative overflow-hidden rounded-[2.5rem] border border-line bg-surface px-6 py-16 text-center">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgb(224_184_80/0.16),transparent_60%)]"
          />
          <Image src="/kairos-icon.png" alt="" width={72} height={72} className="relative mx-auto rounded-2xl ring-1 ring-line" />
          <h2 className="relative mt-6 font-serif text-4xl font-semibold text-balance md:text-5xl">
            Your next hour of prayer is waiting
          </h2>
          <p className="relative mx-auto mt-4 max-w-xl text-lg text-muted">
            Kairos is free, with no ads and no account.
          </p>
          <div className="relative mt-8 flex justify-center">
            <GooglePlayButton />
          </div>
        </div>
      </section>
    </main>
  )
}
