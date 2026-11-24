import Link from 'next/link'
import Image from 'next/image'
import { site } from '@/lib/site'

export function SiteFooter() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 py-12 md:flex-row md:justify-between md:px-6">
        <div className="max-w-sm">
          <div className="flex items-center gap-3">
            <Image src="/kairos-icon.png" alt="" width={32} height={32} className="rounded-lg ring-1 ring-line" />
            <span className="font-serif text-xl font-semibold text-gold">Kairos</span>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-muted">
            The appointed time. A quiet place to pray on purpose, every hour you set apart for God.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-10 text-sm">
          <div>
            <h2 className="font-semibold">App</h2>
            <ul className="mt-4 space-y-3">
              <li><Link href="/#features" className="text-muted hover:text-gold">Features</Link></li>
              <li><a href={site.playUrl} className="text-muted hover:text-gold">Google Play</a></li>
              <li><a href={site.apkUrl} className="text-muted hover:text-gold">Download APK</a></li>
            </ul>
          </div>
          <div>
            <h2 className="font-semibold">Help</h2>
            <ul className="mt-4 space-y-3">
              <li><Link href="/support" className="text-muted hover:text-gold">Support</Link></li>
              <li><Link href="/privacy" className="text-muted hover:text-gold">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-line">
        <p className="mx-auto max-w-6xl px-4 py-6 text-center text-xs text-muted md:px-6">
          © {new Date().getFullYear()} {site.developer}. “Redeeming the time, because the days are evil.” Ephesians 5:16
        </p>
      </div>
    </footer>
  )
}
