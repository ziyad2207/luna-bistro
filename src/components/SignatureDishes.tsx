import { menuItems, type MenuItem } from '@/data/restaurant';
import { Star } from 'lucide-react';

const signatureDishes = menuItems.filter((item) => item.signature).slice(0, 4);

function DishCard({ dish, index }: { dish: MenuItem; index: number }) {
  return (
    <article
      className="card-lift group relative overflow-hidden rounded-2xl border border-white/[0.06] bg-ink-700"
      data-reveal
      data-reveal-delay={index * 120}
    >
      {/* Image */}
      <div className="relative aspect-[3/4] overflow-hidden">
        <img
          src={dish.image}
          alt={dish.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-700 via-ink-700/20 to-transparent" />

        {/* Signature badge */}
        <div className="absolute left-4 top-4 glass-gold rounded-full px-3 py-1.5">
          <span className="flex items-center gap-1.5 text-[10px] font-medium uppercase tracking-wide-lg text-gold">
            <Star size={10} fill="currentColor" />
            Signature
          </span>
        </div>

        {/* Diet badge */}
        <div className="absolute right-4 top-4 glass rounded-full px-3 py-1.5">
          <span className="flex items-center gap-1.5 text-[10px] font-medium uppercase tracking-wide-lg text-white/80">
            <span
              className={`h-2 w-2 rounded-full ${
                dish.diet === 'veg' ? 'bg-green-400' : 'bg-red-400'
              }`}
            />
            {dish.diet === 'veg' ? 'Veg' : 'Non-Veg'}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="font-display text-2xl font-medium text-white">
              {dish.name}
            </h3>
            <p className="mt-2 font-serif text-base leading-snug text-white/60">
              {dish.description}
            </p>
          </div>
          <p className="shrink-0 font-display text-2xl text-gold">
            £{dish.price}
          </p>
        </div>
      </div>
    </article>
  );
}

export default function SignatureDishes() {
  return (
    <section className="relative bg-ink-800 py-32 lg:py-40">
      {/* Decorative gradient */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(212,175,55,0.04),transparent_60%)]" />

      <div className="relative mx-auto max-w-8xl px-6 lg:px-12">
        <div className="mb-16 text-center">
          <p className="eyebrow mb-6" data-reveal>
            <span>Signature Collection</span>
          </p>
          <h2 className="section-title mx-auto max-w-3xl" data-title-reveal>
            Dishes That Define <br />
            <span className="italic text-gold-gradient">Our Identity</span>
          </h2>
          <p className="body-serif mx-auto mt-6 max-w-2xl" data-reveal data-reveal-delay="150">
            Each signature plate is the culmination of a decade's obsession —
            refined season after season until nothing remains but intention.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {signatureDishes.map((dish, i) => (
            <DishCard key={dish.id} dish={dish} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
