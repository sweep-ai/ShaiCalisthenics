import { Header } from '../components/Header'
import { TypeformEmbed } from '../components/TypeformEmbed'
import { VideoPlaceholder } from '../components/VideoPlaceholder'
import { usePageTitle } from '../hooks/useSessionLead'

export function HomePage() {
  usePageTitle('Vaink Athletics — Start Here')

  return (
    <div className="min-h-screen bg-oil-black">
      <Header />
      <main className="mx-auto max-w-2xl px-4 py-10 sm:px-6">
        <div className="text-center">
          <h1 className="font-heading text-4xl font-bold leading-tight tracking-tight text-pure-white sm:text-5xl md:text-6xl">
            You're not here to stay stuck.
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-pure-white/70 sm:text-xl">
            Most people train without a plan, hit a wall, and convince themselves they're not built
            for it. That's not you... or else you wouldn't be here. Vaink Athletics is for those who
            are ready to take their training to the next level. 
          </p>
        </div>

        <div className="mt-10">
          <VideoPlaceholder label="Your next step" title="Watch before you apply" />
        </div>

        <div className="mt-10 flex justify-center">
          <TypeformEmbed />
        </div>
      </main>
    </div>
  )
}
