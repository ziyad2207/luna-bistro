import { Award, UtensilsCrossed, Star } from 'lucide-react';

const chefImage =
  'https://images.pexels.com/photos/32224391/pexels-photo-32224391.jpeg?auto=compress&cs=tinysrgb&w=1200';

const awards = [
  { year: '2023', title: 'Chef of the Year', org: 'National Hospitality Awards' },
  { year: '2022', title: 'Three Michelin Stars', org: 'Michelin Guide' },
  { year: '2020', title: 'Best Tasting Menu', org: 'Gault & Millau' },
  { year: '2018', title: 'Rising Star Chef', org: 'World Restaurant Awards' },
];

export default function Chef() {
  return (
    <section id="chef" className="relative overflow-hidden bg-ink-800 py-32 lg:py-40">
      {/* Decorative element */}
      <div className="pointer-events-none absolute -right-40 top-1/2 h-[600px] w-[600px] -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(212,175,55,0.05),transparent_70%)]" />

      <div className="relative mx-auto max-w-8xl px-6 lg:px-12">
        <div className="grid items-center gap-16 lg:grid-cols-[5fr_6fr] lg:gap-24">
          {/* Portrait */}
          <div className="relative" data-reveal>
            <div className="relative overflow-hidden rounded-2xl">
              <img
                src={chefImage}
                alt="Chef Aurelio Marchetti, Executive Chef"
                className="aspect-[4/5] w-full object-cover"
                data-zoom
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-800/60 via-transparent to-transparent" />

              {/* Name plate */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="glass rounded-xl px-6 py-4">
                  <p className="font-display text-2xl text-white">
                    Aurelio Marchetti
                  </p>
                  <p className="mt-1 text-xs font-medium uppercase tracking-wide-lg text-gold">
                    Executive Chef & Founder
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <p className="eyebrow mb-6" data-reveal>
              <span>The Chef</span>
            </p>
            <h2 className="section-title mb-8" data-title-reveal>
              The Hand Behind <br />
              <span className="italic text-gold-gradient">Every Plate</span>
            </h2>

            <div className="space-y-5">
              <p className="body-serif" data-reveal data-reveal-delay="100">
                Trained in the kitchens of Modena and Kyoto, Chef Aurelio
                Marchetti brings twenty-two years of uncompromising craft to
                Luna Bistro. His philosophy is simple: let the ingredient speak
                first, and never let technique overshadow the seasons.
              </p>
              <p className="body-serif" data-reveal data-reveal-delay="200">
                Under his guidance, Luna Bistro earned its third Michelin star
                in just seven years — a feat achieved by fewer than 130
                restaurants worldwide.
              </p>
            </div>

            {/* Quick stats */}
            <div className="mt-10 grid grid-cols-3 gap-4" data-reveal data-reveal-delay="300">
              <div className="flex flex-col items-center gap-2 rounded-xl border border-white/[0.06] bg-white/[0.02] py-5">
                <UtensilsCrossed size={22} className="text-gold" />
                <p className="font-display text-3xl text-white">22</p>
                <p className="text-[10px] font-medium uppercase tracking-wide-lg text-white/50">
                  Years Experience
                </p>
              </div>
              <div className="flex flex-col items-center gap-2 rounded-xl border border-white/[0.06] bg-white/[0.02] py-5">
                <Star size={22} className="text-gold" fill="currentColor" />
                <p className="font-display text-3xl text-white">3</p>
                <p className="text-[10px] font-medium uppercase tracking-wide-lg text-white/50">
                  Michelin Stars
                </p>
              </div>
              <div className="flex flex-col items-center gap-2 rounded-xl border border-white/[0.06] bg-white/[0.02] py-5">
                <Award size={22} className="text-gold" />
                <p className="font-display text-3xl text-white">14</p>
                <p className="text-[10px] font-medium uppercase tracking-wide-lg text-white/50">
                  Major Awards
                </p>
              </div>
            </div>

            {/* Awards list */}
            <div className="mt-10 space-y-3" data-reveal data-reveal-delay="400">
              <h3 className="text-xs font-medium uppercase tracking-ultra-wide text-gold/80">
                Notable Accolades
              </h3>
              {awards.map((award) => (
                <div
                  key={award.title}
                  className="flex items-center justify-between border-b border-white/[0.06] py-3 transition-colors hover:border-gold/20"
                >
                  <div className="flex items-center gap-4">
                    <span className="font-display text-lg text-gold/70">
                      {award.year}
                    </span>
                    <div>
                      <p className="font-serif text-lg text-white">
                        {award.title}
                      </p>
                      <p className="text-xs text-white/40">{award.org}</p>
                    </div>
                  </div>
                  <Award size={16} className="text-gold/40" />
                </div>
              ))}
            </div>

            {/* Quote */}
            <blockquote className="mt-10 border-l-2 border-gold/40 pl-6" data-reveal data-reveal-delay="500">
              <p className="font-serif text-2xl italic leading-relaxed text-white/85">
                "I cook for the moment a guest closes their eyes after the first
                bite. Everything else is just logistics."
              </p>
              <footer className="mt-3 text-sm font-medium uppercase tracking-wide-lg text-gold/70">
                — Aurelio Marchetti
              </footer>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
