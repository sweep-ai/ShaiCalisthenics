import { testimonialImages } from '../data/testimonials'

export function TestimonialGallery() {
  return (
    <section className="mt-10 border-t border-white/10 pt-10">
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-5">
        {testimonialImages.map((src, index) => (
          <img
            key={src}
            src={src}
            alt={`Client testimonial ${index + 1}`}
            className="mx-auto h-auto w-full max-h-48 object-contain sm:max-h-56"
            loading="lazy"
          />
        ))}
      </div>
    </section>
  )
}
