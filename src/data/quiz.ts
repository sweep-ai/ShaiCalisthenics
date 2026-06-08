export interface QuizOption {
  id: string
  label: string
}

export interface QuizQuestion {
  id: string
  question: string
  options: QuizOption[]
}

export const quizQuestions: QuizQuestion[] = [
  {
    id: 'goal',
    question: 'What are you here to build?',
    options: [
      { id: 'strength', label: 'Raw strength' },
      { id: 'skills', label: 'Skills — muscle-ups, handstands, the hard stuff' },
      { id: 'physique', label: 'Physique that matches the work' },
      { id: 'rehab', label: 'Come back stronger after injury' },
    ],
  },
  {
    id: 'experience',
    question: 'Where are you right now?',
    options: [
      { id: 'beginner', label: 'Starting from zero or close to it' },
      { id: 'intermediate', label: 'Training consistently, hit a wall' },
      { id: 'advanced', label: 'Strong base, need direction' },
      { id: 'returning', label: 'Coming back after time off' },
    ],
  },
  {
    id: 'blocker',
    question: "What's actually holding you back?",
    options: [
      { id: 'structure', label: 'No real structure — just guessing' },
      { id: 'motivation', label: 'Motivation fades, then guilt' },
      { id: 'injury', label: 'Pain or fear of re-injury' },
      { id: 'plateau', label: 'Plateau — same work, same results' },
    ],
  },
  {
    id: 'commitment',
    question: 'What can you honestly commit each week?',
    options: [
      { id: '2-3', label: '2–3 sessions' },
      { id: '4-5', label: '4–5 sessions' },
      { id: '6+', label: '6+ — this is a priority' },
      { id: 'unsure', label: 'Not sure yet — need a plan first' },
    ],
  },
]

export interface LeadData {
  name: string
  email: string
  answers: Record<string, string>
}

export const LEAD_STORAGE_KEY = 'vaink-athlete-lead'

export function saveLead(data: LeadData): void {
  sessionStorage.setItem(LEAD_STORAGE_KEY, JSON.stringify(data))
}

export function getLead(): LeadData | null {
  const raw = sessionStorage.getItem(LEAD_STORAGE_KEY)
  if (!raw) return null
  try {
    return JSON.parse(raw) as LeadData
  } catch {
    return null
  }
}
