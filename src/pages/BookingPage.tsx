import { CalEmbed } from '../components/CalEmbed'
import { Header } from '../components/Header'
import { usePageTitle } from '../hooks/useSessionLead'

export function BookingPage() {
  usePageTitle('Book Your Call — Vaink Athletics')

  return (
    <div className="min-h-screen bg-oil-black">
      <Header />
      <main className="mx-auto max-w-4xl px-4 py-10 sm:px-6">
        <h1 className="font-heading text-3xl text-pure-white sm:text-4xl">
          Pick a time that works.
        </h1>
        <p className="mt-3 max-w-xl text-lg text-pure-white/70">
          45 minutes. We'll talk about where you are, where you want to be, and whether I'm the
          right coach to get you there.
        </p>

        <div className="mt-8">
          <CalEmbed />
        </div>
      </main>
    </div>
  )
}
