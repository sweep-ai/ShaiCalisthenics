import { Route, Routes } from 'react-router-dom'
import { HomePage } from './pages/HomePage'
import { BookingPage } from './pages/BookingPage'
import { PostBookingPage } from './pages/PostBookingPage'
import { OnboardingPage } from './pages/OnboardingPage'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/booking" element={<BookingPage />} />
      <Route path="/post-booking" element={<PostBookingPage />} />
      <Route path="/onboarding" element={<OnboardingPage />} />
    </Routes>
  )
}
