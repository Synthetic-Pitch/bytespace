const navLinks = ["Home", "Courses", "Creators"]

const Header = () => {
  return (
    <header className="relative z-20 flex items-center justify-between px-8 py-6 lg:px-14">
      <a href="/" className="flex items-center gap-2.5">
        <span className="grid h-9 w-9 place-items-center rounded-lg bg-lime-pop text-lg font-extrabold text-byte">
          b
        </span>
        <span className="text-xl font-extrabold tracking-tight">ByteSpace</span>
      </a>

      <nav className="hidden items-center gap-10 text-sm font-medium text-white/80 md:flex">
        {navLinks.map((link) => (
          <a key={link} href={`#${link.toLowerCase()}`} className="transition hover:text-white">
            {link}
          </a>
        ))}
      </nav>

      <div className="flex items-center gap-5 text-sm font-semibold">
        <a href="#signin" className="hidden text-white/85 hover:text-white sm:inline">
          Sign In
        </a>
        <a
          href="#join"
          className="rounded-full border border-white/70 px-5 py-2 text-white transition hover:bg-white/10"
        >
          Join Us
        </a>
        <button type="button" aria-label="Cart" className="text-white/90 hover:text-white">
          <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
            <path d="M6 7h15l-1.5 9h-12z" />
            <path d="M6 7 5 4H2" />
            <circle cx="9" cy="20" r="1.2" fill="currentColor" stroke="none" />
            <circle cx="18" cy="20" r="1.2" fill="currentColor" stroke="none" />
          </svg>
        </button>
      </div>
    </header>
  )
}

export default Header
