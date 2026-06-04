import { Button } from './Button'

interface ChecklistItemProps {
  title: string
  description: string
  completed: boolean
  onToggle: (completed: boolean) => void
  href?: string
  buttonLabel: string
  comingSoon?: boolean
  placeholder?: boolean
}

export function ChecklistItem({
  title,
  description,
  completed,
  onToggle,
  href,
  buttonLabel,
  comingSoon = false,
  placeholder = false,
}: ChecklistItemProps) {
  const isDisabled = comingSoon || placeholder

  const handleAction = () => {
    if (isDisabled) return
    if (href) {
      window.open(href, '_blank', 'noopener,noreferrer')
    }
    onToggle(true)
  }

  return (
    <div
      className={`rounded-sm border p-5 transition-colors ${
        completed
          ? 'border-white/20 bg-white/5'
          : 'border-white/10 bg-void-gray'
      }`}
    >
      <div className="flex gap-4">
        <button
          type="button"
          onClick={() => onToggle(!completed)}
          className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-sm border border-white/30 transition-colors hover:border-white/50"
          aria-label={completed ? 'Mark incomplete' : 'Mark complete'}
        >
          {completed && (
            <svg className="h-3 w-3 text-pure-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
            </svg>
          )}
        </button>

        <div className="flex-1 space-y-3">
          <div>
            <h3 className="font-heading text-lg text-pure-white">{title}</h3>
            <p className="mt-1 text-base text-pure-white/70">{description}</p>
            {comingSoon && (
              <p className="mt-2 text-sm italic text-pure-white/50">Will be available soon.</p>
            )}
          </div>

          <Button
            variant={isDisabled ? 'ghost' : 'secondary'}
            onClick={handleAction}
            disabled={isDisabled}
            className="text-sm"
          >
            {buttonLabel}
          </Button>
        </div>
      </div>
    </div>
  )
}
