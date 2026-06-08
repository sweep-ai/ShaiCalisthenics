export function Header() {
  return (
    <header className="px-4 pt-8 sm:px-6 sm:pt-10">
      <div className="mx-auto flex max-w-2xl flex-col items-center gap-3 text-center">
        <img
          src="/logo.png"
          alt="VAINK ATHLETE"
          className="h-14 w-14 object-contain sm:h-16 sm:w-16"
        />
        <span className="font-heading text-xl tracking-wide text-pure-white sm:text-2xl">
          VAINK ATHLETE
        </span>
      </div>
    </header>
  )
}
