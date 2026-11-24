import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="mx-auto max-w-xl px-4 py-32 text-center">
      <p className="font-serif text-7xl text-gold">404</p>
      <h1 className="mt-4 font-serif text-3xl font-semibold">This page could not be found</h1>
      <Link href="/" className="mt-8 inline-block rounded-full bg-gold-fill px-6 py-3 font-semibold text-on-gold">
        Back to Kairos
      </Link>
    </main>
  )
}
