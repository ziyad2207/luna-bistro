import { Quote } from 'lucide-react';

const aboutImage =
  'https://images.pexels.com/photos/20184685/pexels-photo-20184685.jpeg?auto=compress&cs=tinysrgb&w=1200';
const aboutImage2 =
  'https://images.pexels.com/photos/27381535/pexels-photo-27381535.jpeg?auto=compress&cs=tinysrgb&w=900';

const stats = [
  { value: '10', label: 'Years of Craft' },
  { value: '3', label: 'Michelin Stars' },
  { value: '48', label: 'Seasonal Dishes' },
  { value: '2', label: 'Private Dining Rooms' },
];

export default function About() {
  return (
    <section id="about" className="relative bg-ink-900 py-32 lg:py-40">
      <div className="mx-auto max-w-8xl px-6 lg:px-12">
        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-24">
          {/* Images */}
          <div className="relative" data-reveal>
            <div className="relative overflow-hidden rounded-2xl">
              <img
                src={aboutImage}
                alt="Luna Bistro elegant interior"
                className="aspect-[4/5] w-full object-cover"
                data-zoom
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-900/50 to-transparent" />
            </div>

            {/* Floating secondary image */}
            <div className="absolute -bottom-10 -right-4 w-2/5 overflow-hidden rounded-xl border border-white/10 shadow-2xl lg:-right-10">
              <img
                src={aboutImage2}
                alt="Signature gourmet dish"
                className="aspect-square w-full object-cover"
              />
            </div>

            {/* Floating glass stat card */}
            <div className="glass absolute -left-4 top-8 rounded-2xl px-6 py-5 lg:-left-10">
              <p className="font-display text-3xl text-gold">Est.</p>
              <p className="font-display text-3xl text-white">2014</p>
            </div>
          </div>

          {/* Text */}
          <div>
            <p className="eyebrow mb-6" data-reveal>
              <span>Our Story</span>
            </p>
            <h2 className="section-title mb-8" data-title-reveal>
              A Sanctuary of <br />
              <span className="italic text-gold-gradient">Culinary Art</span>
            </h2>

            <div className="space-y-6">
              <p className="body-serif" data-reveal data-reveal-delay="100">
                Born from a singular vision to redefine fine dining, Luna Bistro
                opened its doors in the heart of Mayfair a decade ago. What
                began as an intimate twelve-seat counter has blossomed into
                London's most quietly theatrical dining room.
              </p>
              <p className="body-serif" data-reveal data-reveal-delay="200">
                Every detail — from the hand-blown Murano glassware to the
                seven-course tasting menu — is composed with the restraint of a
                luxury maison and the soul of a neighbourhood kitchen. We
                believe luxury is not loud. It is felt.
              </p>
            </div>

            {/* Quote */}
            <div className="mt-10 flex gap-4" data-reveal data-reveal-delay="300">
              <Quote
                size={28}
                className="shrink-0 text-gold/60"
                fill="currentColor"
              />
              <p className="font-serif text-xl italic leading-relaxed text-white/80">
                We do not serve food. We curate evenings that linger long after
                the last plate is cleared.
              </p>
            </div>

            {/* Stats */}
            <div className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/[0.06] sm:grid-cols-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="bg-white/[0.02] px-4 py-6 text-center transition-colors duration-500 hover:bg-gold/[0.04]"
                  data-reveal
                >
                  <p className="font-display text-4xl text-gold">{stat.value}</p>
                  <p className="mt-2 text-[10px] font-medium uppercase tracking-wide-lg text-white/50">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
