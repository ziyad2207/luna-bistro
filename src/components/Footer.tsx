import { useState } from 'react';
import { Instagram, Facebook, Music2, ArrowRight, Check } from 'lucide-react';

const socials = [
  { icon: Instagram, label: 'Instagram', href: '#' },
  { icon: Facebook, label: 'Facebook', href: '#' },
  { icon: Music2, label: 'TikTok', href: '#' },
];

const footerLinks = [
  { label: 'Privacy Policy', href: '#' },
  { label: 'Terms of Service', href: '#' },
  { label: 'Cancellation Policy', href: '#' },
];

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  function handleSubscribe(e: React.FormEvent) {
    e.preventDefault();
    if (email) setSubscribed(true);
  }

  return (
    <footer className="relative bg-ink-900 border-t border-white/[0.06]">
      {/* Newsletter band */}
      <div className="border-b border-white/[0.06]">
        <div className="mx-auto max-w-8xl px-6 py-16 lg:px-12 lg:py-20">
          <div className="grid items-center gap-8 lg:grid-cols-2">
            <div data-reveal>
              <p className="eyebrow mb-4">
                <span>The Luna Letter</span>
              </p>
              <h3 className="font-display text-3xl text-white md:text-4xl">
                Join our private list
              </h3>
              <p className="body-serif mt-3 max-w-md">
                Seasonal menus, exclusive events, and chef's table invitations —
                delivered a few times a year. Never more.
              </p>
            </div>

            <div data-reveal data-reveal-delay="150">
              {subscribed ? (
                <div className="glass-gold flex items-center gap-3 rounded-full px-6 py-4">
                  <Check size={20} className="text-gold" />
                  <span className="font-serif text-lg text-white">
                    Welcome to Luna Bistro. Check your inbox.
                  </span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex flex-col gap-3 sm:flex-row">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    required
                    className="flex-1 rounded-full border border-white/[0.08] bg-white/[0.03] px-6 py-4 text-sm text-white placeholder-white/40 outline-none transition-all duration-300 focus:border-gold/40"
                  />
                  <button type="submit" className="btn-gold">
                    <span>Subscribe</span>
                    <ArrowRight size={16} className="relative z-10" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="mx-auto max-w-8xl px-6 py-16 lg:px-12">
        <div className="grid gap-12 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2">
              <span className="font-display text-3xl font-medium text-white">
                Luna
              </span>
              <span className="font-display text-3xl font-medium italic text-gold">
                Bistro
              </span>
            </div>
            <p className="body-serif mt-5 max-w-sm">
              A modern luxury fine dining experience in the heart of Mayfair.
              Where every meal becomes a memory.
            </p>

            {/* Socials */}
            <div className="mt-8 flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="glass group flex h-12 w-12 items-center justify-center rounded-full text-white/70 transition-all duration-500 hover:border-gold/40 hover:text-gold"
                >
                  <s.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Explore */}
          <div>
            <h4 className="text-xs font-medium uppercase tracking-ultra-wide text-gold/80">
              Explore
            </h4>
            <ul className="mt-5 space-y-3">
              {[
                { label: 'About', href: '#about' },
                { label: 'Menu', href: '#menu' },
                { label: 'Chef', href: '#chef' },
                { label: 'Gallery', href: '#gallery' },
                { label: 'Reserve', href: '#reservation' },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="font-serif text-lg text-white/60 transition-colors duration-300 hover:text-gold"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-medium uppercase tracking-ultra-wide text-gold/80">
              Contact
            </h4>
            <ul className="mt-5 space-y-3 font-serif text-lg text-white/60">
              <li>24 Crescent Avenue</li>
              <li>Mayfair, London W1K 3AB</li>
              <li className="pt-2">
                <a
                  href="tel:+442079460958"
                  className="transition-colors hover:text-gold"
                >
                  +44 20 7946 0958
                </a>
              </li>
              <li>
                <a
                  href="mailto:reservations@ziyadrestraunt.com"
                  className="transition-colors hover:text-gold"
                >
                  reservations@ziyadrestraunt.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/[0.06] pt-8 md:flex-row">
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} Luna Bistro. All rights reserved.
          </p>
          <ul className="flex flex-wrap items-center gap-6">
            {footerLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-xs text-white/40 transition-colors hover:text-gold"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
