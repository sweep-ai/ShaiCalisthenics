import { PopupButton } from '@typeform/embed-react'
import { useNavigate } from 'react-router-dom'
import { typeformId } from '../data/typeform'

const buttonClasses =
  'inline-flex items-center justify-center rounded-sm bg-pure-white px-8 py-4 font-body text-lg font-semibold text-oil-black transition-colors hover:bg-pure-white/90'

export function TypeformEmbed() {
  const navigate = useNavigate()

  return (
    <PopupButton
      id={typeformId}
      className={buttonClasses}
      redirectTarget="_top"
      onSubmit={() => {
        navigate('/booking')
      }}
    >
      Apply now
    </PopupButton>
  )
}
