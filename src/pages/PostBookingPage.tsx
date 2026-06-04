import { Header } from '../components/Header'
import { VideoPlaceholder } from '../components/VideoPlaceholder'
import { callPrepItems, faqItems, postBookingVideoUrl } from '../data/postBooking'
import { usePageTitle, useSessionLead } from '../hooks/useSessionLead'

export function PostBookingPage() {
  usePageTitle("What's Next — Vaink Athletics")
  const lead = useSessionLead()
  const firstName = lead?.name.split(' ')[0]

  return (
    <div className="min-h-screen bg-oil-black">
      <Header />
      <main className="mx-auto max-w-2xl px-4 py-10 sm:px-6">
        <div className="text-center">
          <h1 className="font-heading text-3xl text-pure-white sm:text-4xl">What's Next</h1>
          {firstName && (
            <p className="mt-3 text-lg text-pure-white/70">
              {firstName}, you're booked. Here's what to do before we talk.
            </p>
          )}
        </div>

        <div className="mt-8">
          <VideoPlaceholder
            label="Welcome — you're in"
            title="A quick note before our call"
            youtubeUrl={postBookingVideoUrl}
          />
        </div>

        <section className="mt-10">
          <h2 className="font-heading text-xl text-pure-white">What to expect on our call</h2>
          <ul className="mt-5 space-y-4">
            {callPrepItems.map((item) => (
              <li key={item.id} className="flex gap-4 rounded-sm border border-white/10 bg-void-gray p-4">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-white/20 text-xs text-pure-white/60">
                  ✓
                </span>
                <span className="text-base text-pure-white/80">{item.text}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-10">
          <h2 className="font-heading text-xl text-pure-white">Common questions before the call</h2>
          <p className="mt-2 text-base text-pure-white/60">Straight answers. No pitch.</p>
          <div className="mt-5 space-y-4">
            {faqItems.map((item) => (
              <article
                key={item.id}
                className="rounded-sm border border-white/10 bg-void-gray p-5"
              >
                <h3 className="font-heading text-lg text-pure-white">{item.question}</h3>
                <p className="mt-2 text-base leading-relaxed text-pure-white/75">{item.answer}</p>
              </article>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}
