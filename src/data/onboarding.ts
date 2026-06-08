export interface OnboardingItem {
  id: string
  title: string
  description: string
  href?: string
  buttonLabel: string
  comingSoon?: boolean
  placeholder?: boolean
}

export const onboardingItems: OnboardingItem[] = [
  {
    id: 'form',
    title: 'Complete your onboarding form',
    description: 'Tell me about you — training history, goals, schedule. Takes about 10 minutes.',
    href: 'https://form.typeform.com/to/dTuGwppl',
    buttonLabel: 'Open form',
  },
  {
    id: 'onboarding-call',
    title: 'Onboarding Call',
    description: 'Book a call so we can walk through your program, answer questions, and get you set up.',
    href: 'https://cal.com/shystillsleepy/your-onboarding-call',
    buttonLabel: 'Book your onboarding call',
  },
  {
    id: 'agreement',
    title: 'Sign the client agreement',
    description: 'Review and sign before we start working together.',
    href: 'https://tally.so/r/PdbM9Q',
    buttonLabel: 'Sign agreement',
  },
  {
    id: 'library',
    title: 'Access the resource library',
    description: 'Warm-ups, progressions, and reference material for your training.',
    href: 'https://www.notion.so/875b2fcf0b31832fb54301fa08507a33?v=dc0b2fcf0b318344adfa88f8b3fff950',
    buttonLabel: 'Open library',
  },
]

export const ONBOARDING_STORAGE_KEY = 'vaink-athlete-onboarding-completed'

export function getOnboardingCompleted(): Record<string, boolean> {
  const raw = localStorage.getItem(ONBOARDING_STORAGE_KEY)
  if (!raw) return {}
  try {
    return JSON.parse(raw) as Record<string, boolean>
  } catch {
    return {}
  }
}

export function setOnboardingItemCompleted(id: string, completed: boolean): void {
  const current = getOnboardingCompleted()
  current[id] = completed
  localStorage.setItem(ONBOARDING_STORAGE_KEY, JSON.stringify(current))
}
