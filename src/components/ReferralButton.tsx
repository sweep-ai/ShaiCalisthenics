import { useState } from 'react'
import { Button } from './Button'

const shareMessage =
  "I've been working with VAINK ATHLETE — thought you might want in too. Book a discovery call here:"

export function ReferralButton() {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    const bookingUrl = `${window.location.origin}/booking`
    const text = `${shareMessage}\n\n${bookingUrl}`

    try {
      await navigator.clipboard.writeText(text)
      setCopied(true)
      setTimeout(() => setCopied(false), 2500)
    } catch {
      await navigator.clipboard.writeText(bookingUrl)
      setCopied(true)
      setTimeout(() => setCopied(false), 2500)
    }
  }

  return (
    <div className="rounded-sm border border-white/10 bg-void-gray p-6 text-center">
      <h3 className="font-heading text-xl text-pure-white">Bring someone with you</h3>
      <p className="mx-auto mt-3 max-w-md text-base text-pure-white/70">
        Know someone you'd want to do this program with? Copy the booking link and send it their way.
      </p>
      <Button onClick={handleCopy} variant="secondary" className="mt-5">
        {copied ? 'Copied!' : 'Copy booking link'}
      </Button>
    </div>
  )
}
