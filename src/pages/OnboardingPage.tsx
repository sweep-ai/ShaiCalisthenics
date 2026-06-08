import { useEffect, useState } from 'react'
import { ChecklistItem } from '../components/ChecklistItem'
import { Header } from '../components/Header'
import { ReferralButton } from '../components/ReferralButton'
import {
  getOnboardingCompleted,
  onboardingItems,
  setOnboardingItemCompleted,
} from '../data/onboarding'
import { usePageTitle } from '../hooks/useSessionLead'

export function OnboardingPage() {
  usePageTitle('Client Onboarding — VAINK ATHLETE')
  const [completed, setCompleted] = useState<Record<string, boolean>>({})

  useEffect(() => {
    setCompleted(getOnboardingCompleted())
  }, [])

  const handleToggle = (id: string, value: boolean) => {
    setOnboardingItemCompleted(id, value)
    setCompleted((prev) => ({ ...prev, [id]: value }))
  }

  const completedCount = onboardingItems.filter((item) => completed[item.id]).length

  return (
    <div className="min-h-screen bg-oil-black">
      <Header />
      <main className="mx-auto max-w-2xl px-4 py-10 sm:px-6">
        <h1 className="font-heading text-3xl text-pure-white sm:text-4xl">Client onboarding</h1>
        <p className="mt-3 text-lg text-pure-white/70">
          Work through each step below. Take your time — but don't sit on it.
        </p>
        <p className="mt-2 text-sm text-pure-white/50">
          {completedCount} of {onboardingItems.length} complete
        </p>

        <div className="mt-8 space-y-4">
          {onboardingItems.map((item) => (
            <ChecklistItem
              key={item.id}
              title={item.title}
              description={item.description}
              completed={Boolean(completed[item.id])}
              onToggle={(value) => handleToggle(item.id, value)}
              href={item.href}
              buttonLabel={item.buttonLabel}
              comingSoon={item.comingSoon}
              placeholder={item.placeholder}
            />
          ))}
        </div>

        <div className="mt-10">
          <ReferralButton />
        </div>
      </main>
    </div>
  )
}
