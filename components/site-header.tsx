import Link from 'next/link'
import Image from 'next/image'
import { site } from '@/lib/site'

const links = [
  { href: '/#features', label: 'Features' },
  { href: '/#screens', label: 'Screens' },
  { href: '/support', label: 'Support' },
  { href: '/privacy', label: 'Privacy' },
]

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-bg/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 md:px-6">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/kairos-icon.png"
            alt=""
            width={36}
            height={36}
            className="rounded-xl ring-1 ring-line"
          />
          <span className="font-serif text-2xl font-semibold tracking-wide text-gold">Kairos</span>
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-muted transition-colors hover:text-gold"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <a
          href={site.playUrl}
          className="rounded-full bg-gold-fill px-4 py-2 text-sm font-semibold text-on-gold transition hover:brightness-105"
        >
          Get the app
        </a>
      </div>

      {/* Small screens: the same links in a scrollable row, no JavaScript needed */}
      <nav aria-label="Main" className="border-t border-line md:hidden">
        <ul className="mx-auto flex max-w-6xl gap-6 overflow-x-auto px-4 py-2 text-sm">
          {links.map((l) => (
            <li key={l.href} className="shrink-0">
              <Link href={l.href} className="text-muted hover:text-gold">
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
