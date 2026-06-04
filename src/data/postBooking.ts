export const postBookingVideoUrl = 'https://youtu.be/PwUDuN9ABA4?si=lAmMDKwRJXUbW79z'

export interface CallPrepItem {
  id: string
  text: string
}

export const callPrepItems: CallPrepItem[] = [
  {
    id: 'goals',
    text: 'Come ready to talk about your goals and current training.',
  },
  {
    id: 'environment',
    text: 'Find a quiet spot with a stable connection.',
  },
  {
    id: 'injuries',
    text: 'Have any injuries or limitations top of mind.',
  },
  {
    id: 'time',
    text: 'Block 45 minutes — no distractions.',
  },
]

export interface FaqItem {
  id: string
  question: string
  answer: string
}

export const faqItems: FaqItem[] = [
  {
    id: 'beginner',
    question: "What if I'm a complete beginner?",
    answer:
      "That's fine. Most people start closer to zero than they admit. The call is about understanding your starting point, not proving you're already advanced.",
  },
  {
    id: 'injuries',
    question: 'I have injuries or old pain. Should I still show up?',
    answer:
      "Yes. Bring it up on the call. Training around limitations is part of what we figure out. Just come honest about what's going on so we're not guessing.",
  },
  {
    id: 'equipment',
    question: 'Do I need equipment or a gym?',
    answer:
      "Not necessarily. We'll talk about what you actually have access to: pull-up bar, rings, a park, nothing at all. We build from reality, not an ideal setup.",
  },
  {
    id: 'after',
    question: 'What happens after the call?',
    answer:
      "If we're aligned, I'll walk you through next steps. If not, you'll leave with clarity on why, and usually a clearer picture of what you actually need. Either outcome is useful.",
  },
  {
    id: 'duration',
    question: 'How long is the call, really?',
    answer:
      "45 minutes blocked. Sometimes shorter if we've covered everything. I'd rather you protect the full window than rush in between things.",
  },
]
