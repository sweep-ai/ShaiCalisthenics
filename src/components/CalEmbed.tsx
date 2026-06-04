import { useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'

declare global {
  interface Window {
    Cal?: CalGlobal
  }
}

interface CalGlobal {
  loaded?: boolean
  ns: Record<string, CalNamespaceFn>
  q?: unknown[]
  (command: string, ...args: unknown[]): void
}

interface CalNamespaceFn {
  q?: unknown[]
  (command: string, ...args: unknown[]): void
}

const CAL_SCRIPT_SRC = 'https://app.cal.com/embed/embed.js'
const CAL_NAMESPACE = 'calisthenics-discovery-call'
const CAL_ELEMENT_ID = 'my-cal-inline-calisthenics-discovery-call'

function bootstrapCal(): void {
  if (window.Cal) return

  const win = window as Window & { Cal?: CalGlobal }
  const doc = document

  const push = (api: CalGlobal | CalNamespaceFn, args: unknown[]) => {
    const queue = (api as CalNamespaceFn).q ?? []
    ;(api as CalNamespaceFn).q = queue
    queue.push(args)
  }

  const Cal = function (this: unknown, ...args: unknown[]) {
    const cal = win.Cal as CalGlobal
    if (!cal.loaded) {
      cal.ns = {}
      cal.q = cal.q ?? []
      const script = doc.createElement('script')
      script.src = CAL_SCRIPT_SRC
      doc.head.appendChild(script)
      cal.loaded = true
    }

    if (args[0] === 'init') {
      const api = function (...innerArgs: unknown[]) {
        push(api as CalNamespaceFn, innerArgs)
      }
      const namespace = args[1] as string
      ;(api as CalNamespaceFn).q = (api as CalNamespaceFn).q ?? []
      if (typeof namespace === 'string') {
        cal.ns[namespace] = cal.ns[namespace] ?? (api as CalNamespaceFn)
        push(cal.ns[namespace], args)
        push(cal, ['initNamespace', namespace])
      } else {
        push(cal, args)
      }
      return
    }

    push(cal, args)
  } as CalGlobal

  Cal.ns = {}
  win.Cal = Cal
}

function initCalEmbed(): void {
  if (!window.Cal) return

  window.Cal('init', CAL_NAMESPACE, { origin: 'https://app.cal.com' })

  window.Cal.ns[CAL_NAMESPACE]('inline', {
    elementOrSelector: `#${CAL_ELEMENT_ID}`,
    config: {
      layout: 'month_view',
      useSlotsViewOnSmallScreen: 'true',
    },
    calLink: 'shystillsleepy/calisthenics-discovery-call',
  })

  window.Cal.ns[CAL_NAMESPACE]('ui', {
    hideEventTypeDetails: false,
    layout: 'month_view',
  })
}

export function CalEmbed() {
  const navigate = useNavigate()
  const initialized = useRef(false)

  useEffect(() => {
    bootstrapCal()
    if (initialized.current) return
    initCalEmbed()
    initialized.current = true

    window.Cal?.ns[CAL_NAMESPACE]('on', {
      action: 'bookingSuccessfulV2',
      callback: () => {
        navigate('/post-booking')
      },
    })
  }, [navigate])

  return (
    <div
      id={CAL_ELEMENT_ID}
      className="min-h-[700px] w-full overflow-auto rounded-sm border border-white/10 bg-void-gray"
    />
  )
}
