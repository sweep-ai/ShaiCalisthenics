import { testimonialImages } from '../data/testimonials'

function TestimonialTrack({ trackId }: { trackId: string }) {
  return (
    <>
      {testimonialImages.map((src, index) => (
        <img
          key={`${trackId}-${index}`}
          src={src}
          alt="Client testimonial"
          className="mx-3 block h-auto max-h-48 w-auto max-w-[200px] shrink-0 object-contain sm:max-h-56 sm:max-w-[240px]"
          loading="lazy"
        />
      ))}
    </>
  )
}

export function TestimonialBanner() {
  return (
    <section className="relative left-1/2 w-screen -translate-x-1/2 overflow-hidden border-t border-white/10 py-8">
      <div className="testimonial-marquee group">
        <div className="testimonial-marquee-track">
          <TestimonialTrack trackId="a" />
          <TestimonialTrack trackId="b" />
        </div>
      </div>
    </section>
  )
}
