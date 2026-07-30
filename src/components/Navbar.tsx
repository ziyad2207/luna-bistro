import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Menu', href: '#menu' },
  { label: 'Chef', href: '#chef' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Reviews', href: '#testimonials' },
  { label: 'Reserve', href: '#reservation' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (href: string) => {
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        scrolled
          ? 'bg-ink-900/80 backdrop-blur-xl border-b border-white/[0.06] py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <nav className="mx-auto flex max-w-8xl items-center justify-between px-6 lg:px-12">
        {/* Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="group flex items-center gap-2"
        >
          <span className="font-display text-2xl font-medium tracking-wide text-white">
            Luna
          </span>
          <span className="font-display text-2xl font-medium italic text-gold">
            Bistro
          </span>
        </button>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-10 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <button
                onClick={() => handleNav(link.href)}
                className="group relative text-xs font-medium uppercase tracking-wide-lg text-white/70 transition-colors duration-300 hover:text-white"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-gold transition-all duration-500 group-hover:w-full" />
              </button>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <button
          onClick={() => handleNav('#reservation')}
          className="hidden btn-gold !px-6 !py-3 lg:inline-flex"
        >
          <span>Book a Table</span>
        </button>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="text-white/80 transition-colors hover:text-gold lg:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden transition-all duration-500 lg:hidden ${
          open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <ul className="flex flex-col gap-2 px-6 py-6">
          {navLinks.map((link) => (
            <li key={link.href}>
              <button
                onClick={() => handleNav(link.href)}
                className="w-full border-b border-white/[0.06] py-4 text-left font-display text-2xl text-white/80 transition-colors hover:text-gold"
              >
                {link.label}
              </button>
            </li>
          ))}
          <li className="pt-4">
            <button
              onClick={() => handleNav('#reservation')}
              className="btn-gold w-full"
            >
              <span>Book a Table</span>
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
}
