import { MapPin, Phone, Mail, Clock, Car, Navigation } from 'lucide-react';

const hours = [
  { day: 'Monday', time: 'Closed' },
  { day: 'Tuesday – Thursday', time: '6:00 PM – 11:00 PM' },
  { day: 'Friday', time: '6:00 PM – 11:30 PM' },
  { day: 'Saturday', time: '12:00 PM – 11:30 PM' },
  { day: 'Sunday', time: '12:00 PM – 10:00 PM' },
];

const contact = [
  { icon: MapPin, label: 'Address', value: '24 Crescent Avenue, Mayfair, London W1K 3AB' },
  { icon: Phone, label: 'Phone', value: '+44 20 7946 0958' },
  { icon: Mail, label: 'Email', value: 'reservations@ziyadrestraunt.com' },
];

export default function Location() {
  return (
    <section id="location" className="relative bg-ink-800 py-32 lg:py-40">
      <div className="mx-auto max-w-8xl px-6 lg:px-12">
        <div className="mb-16 text-center">
          <p className="eyebrow mb-6" data-reveal>
            <span>Visit Us</span>
          </p>
          <h2 className="section-title" data-title-reveal>
            Find <span className="italic text-gold-gradient">Luna Bistro</span>
          </h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Map */}
          <div
            className="relative overflow-hidden rounded-2xl border border-white/[0.06]"
            data-reveal
          >
            <iframe
              title="Luna Bistro location map"
              src="https://www.openstreetmap.org/export/embed.html?bbox=-0.155%2C51.505%2C-0.135%2C51.515&layer=mapnik&marker=51.510%2C-0.145"
              className="h-full min-h-[400px] w-full grayscale"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink-800/40 via-transparent to-transparent" />
            <a
              href="https://www.openstreetmap.org/?mlat=51.510&mlon=-0.145#map=16/51.510/-0.145"
              target="_blank"
              rel="noopener noreferrer"
              className="glass absolute bottom-4 left-4 inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-medium uppercase tracking-wide-lg text-white transition-colors hover:text-gold"
            >
              <Navigation size={12} />
              Open in Maps
            </a>
          </div>

          {/* Info */}
          <div className="flex flex-col gap-6" data-reveal data-reveal-delay="150">
            {/* Contact cards */}
            <div className="grid gap-4 sm:grid-cols-3">
              {contact.map((item) => (
                <div
                  key={item.label}
                  className="glass rounded-xl p-5 transition-colors duration-500 hover:border-gold/20"
                >
                  <item.icon size={20} className="mb-3 text-gold" />
                  <p className="text-[10px] font-medium uppercase tracking-wide-lg text-white/40">
                    {item.label}
                  </p>
                  <p className="mt-1 font-serif text-base leading-snug text-white/85">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>

            {/* Opening hours */}
            <div className="glass rounded-2xl p-6">
              <div className="mb-4 flex items-center gap-2">
                <Clock size={18} className="text-gold" />
                <h3 className="text-xs font-medium uppercase tracking-ultra-wide text-gold/80">
                  Opening Hours
                </h3>
              </div>
              <ul className="space-y-2">
                {hours.map((h) => (
                  <li
                    key={h.day}
                    className="flex items-center justify-between border-b border-white/[0.04] py-2.5 last:border-0"
                  >
                    <span className="font-serif text-lg text-white/80">{h.day}</span>
                    <span
                      className={`text-sm ${
                        h.time === 'Closed'
                          ? 'text-white/30'
                          : 'font-medium text-gold/90'
                      }`}
                    >
                      {h.time}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Parking */}
            <div className="glass-gold flex items-start gap-4 rounded-2xl p-6">
              <Car size={22} className="mt-1 shrink-0 text-gold" />
              <div>
                <h3 className="text-xs font-medium uppercase tracking-ultra-wide text-gold">
                  Parking & Access
                </h3>
                <p className="mt-2 font-serif text-base leading-relaxed text-white/70">
                  Valet parking available from 6 PM. Nearest NCP car park on
                  Park Lane (3-min walk). Mayfair tube station is a 5-minute
                  walk. Step-free access via the Crescent Avenue entrance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
