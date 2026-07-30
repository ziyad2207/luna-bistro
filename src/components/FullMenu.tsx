import { useMemo, useState } from 'react';
import {
  menuItems,
  allCategories,
  categoryLabels,
  type MenuCategory,
} from '@/data/restaurant';
import { Search, SlidersHorizontal } from 'lucide-react';

type Filter = 'all' | MenuCategory;

export default function FullMenu() {
  const [activeFilter, setActiveFilter] = useState<Filter>('all');
  const [search, setSearch] = useState('');

  const filtered = useMemo(() => {
    return menuItems.filter((item) => {
      const matchesFilter =
        activeFilter === 'all' || item.category === activeFilter;
      const matchesSearch =
        search === '' ||
        item.name.toLowerCase().includes(search.toLowerCase()) ||
        item.description.toLowerCase().includes(search.toLowerCase());
      return matchesFilter && matchesSearch;
    });
  }, [activeFilter, search]);

  return (
    <section id="menu" className="relative bg-ink-900 py-32 lg:py-40">
      <div className="mx-auto max-w-8xl px-6 lg:px-12">
        {/* Header */}
        <div className="mb-12 text-center">
          <p className="eyebrow mb-6" data-reveal>
            <span>The Menu</span>
          </p>
          <h2 className="section-title" data-title-reveal>
            A Curated <span className="italic text-gold-gradient">Journey</span>
          </h2>
          <p className="body-serif mx-auto mt-6 max-w-2xl" data-reveal data-reveal-delay="150">
            Explore our full collection — from delicate starters to indulgent
            desserts and crafted cocktails.
          </p>
        </div>

        {/* Controls */}
        <div className="mb-12 flex flex-col items-center gap-6" data-reveal>
          {/* Search */}
          <div className="relative w-full max-w-md">
            <Search
              size={16}
              className="absolute left-5 top-1/2 -translate-y-1/2 text-white/40"
            />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search dishes..."
              className="w-full rounded-full border border-white/[0.08] bg-white/[0.03] py-3.5 pl-12 pr-5 text-sm text-white placeholder-white/40 outline-none transition-all duration-300 focus:border-gold/40 focus:bg-white/[0.05]"
            />
          </div>

          {/* Filters */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            <SlidersHorizontal size={14} className="text-white/40" />
            <FilterChip
              label="All"
              active={activeFilter === 'all'}
              onClick={() => setActiveFilter('all')}
            />
            {allCategories.map((cat) => (
              <FilterChip
                key={cat}
                label={categoryLabels[cat]}
                active={activeFilter === cat}
                onClick={() => setActiveFilter(cat)}
              />
            ))}
          </div>
        </div>

        {/* Menu grid */}
        {filtered.length > 0 ? (
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {filtered.map((item, i) => (
              <article
                key={item.id}
                className="card-lift group flex gap-4 overflow-hidden rounded-xl border border-white/[0.06] bg-ink-700 p-4"
                data-reveal
                data-reveal-delay={(i % 3) * 100}
              >
                {/* Image */}
                <div className="relative h-28 w-28 shrink-0 overflow-hidden rounded-lg">
                  <img
                    src={item.image}
                    alt={item.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {item.signature && (
                    <div className="absolute left-1 top-1 rounded-full bg-gold/90 px-1.5 py-0.5 text-[8px] font-bold uppercase tracking-wide text-ink-900">
                      Chef's Pick
                    </div>
                  )}
                </div>

                {/* Details */}
                <div className="flex flex-1 flex-col justify-between py-1">
                  <div>
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="font-display text-lg leading-tight text-white">
                        {item.name}
                      </h3>
                      <span className="shrink-0 font-display text-lg text-gold">
                        £{item.price}
                      </span>
                    </div>
                    <p className="mt-1.5 font-serif text-sm leading-snug text-white/55">
                      {item.description}
                    </p>
                  </div>
                  <div className="mt-2 flex items-center gap-2">
                    <span
                      className={`h-2 w-2 rounded-full ${
                        item.diet === 'veg' ? 'bg-green-400' : 'bg-red-400'
                      }`}
                    />
                    <span className="text-[10px] font-medium uppercase tracking-wide-lg text-white/40">
                      {item.diet === 'veg' ? 'Vegetarian' : 'Non-Vegetarian'}
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="py-20 text-center">
            <p className="font-serif text-2xl text-white/50">
              No dishes match your search.
            </p>
            <button
              onClick={() => {
                setSearch('');
                setActiveFilter('all');
              }}
              className="btn-luxury mt-6"
            >
              <span>Clear Filters</span>
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

function FilterChip({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`rounded-full px-5 py-2.5 text-xs font-medium uppercase tracking-wide-lg transition-all duration-300 ${
        active
          ? 'bg-gold text-ink-900 shadow-[0_0_20px_-5px_rgba(212,175,55,0.5)]'
          : 'glass text-white/70 hover:border-gold/30 hover:text-white'
      }`}
    >
      {label}
    </button>
  );
}
