import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { useMagnetic } from '@/hooks/useMagnetic';

const heroImage =
  'https://images.pexels.com/photos/34723813/pexels-photo-34723813.jpeg?auto=compress&cs=tinysrgb&w=1920';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const reserveRef = useMagnetic<HTMLAnchorElement>(0.4);
  const menuRef = useMagnetic<HTMLAnchorElement>(0.4);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power4.out' } });

      tl.from('.hero-eyebrow', { y: 20, opacity: 0, duration: 1 })
        .from(
          '.hero-line',
          { yPercent: 120, opacity: 0, duration: 1.4, stagger: 0.15 },
          '-=0.6'
        )
        .from('.hero-sub', { y: 20, opacity: 0, duration: 1 }, '-=0.8')
        .from(
          '.hero-cta',
          { y: 20, opacity: 0, duration: 0.9, stagger: 0.12 },
          '-=0.6'
        )
        .from('.hero-scroll', { opacity: 0, duration: 1 }, '-=0.4');

      // Subtle continuous parallax of the background image
      gsap.to('.hero-bg', {
        yPercent: 15,
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const scrollTo = (id: string) =>
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section
      ref={containerRef}
      className="relative h-screen min-h-[680px] w-full overflow-hidden"
    >
      {/* Background */}
      <div className="hero-bg absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Luna Bistro atmospheric dining room"
          className="h-full w-full object-cover"
          data-zoom
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink-900/70 via-ink-900/40 to-ink-900" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-900 via-transparent to-ink-900/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        <p className="hero-eyebrow eyebrow mb-8 opacity-0">
          <span>Est. 2014 · Mayfair, London</span>
        </p>

        <h1 className="font-display text-5xl font-medium leading-[1.05] text-white sm:text-6xl md:text-7xl lg:text-8xl">
          <span className="block overflow-hidden">
            <span className="hero-line block opacity-0">Where Every Meal</span>
          </span>
          <span className="block overflow-hidden">
            <span className="hero-line block opacity-0">
              Becomes a <span className="italic text-gold-gradient">Memory</span>
            </span>
          </span>
        </h1>

        <p className="hero-sub mt-8 max-w-xl font-serif text-xl leading-relaxed text-white/70 opacity-0 md:text-2xl">
          A modern luxury dining experience where seasonal artistry, cinematic
          atmosphere, and quiet precision meet.
        </p>

        <div className="mt-12 flex flex-col items-center gap-4 sm:flex-row">
          <a
            ref={reserveRef}
            href="#reservation"
            onClick={(e) => {
              e.preventDefault();
              scrollTo('#reservation');
            }}
            className="btn-gold opacity-0 hero-cta"
          >
            <span>Reserve a Table</span>
            <ArrowRight size={16} className="relative z-10" />
          </a>
          <a
            ref={menuRef}
            href="#menu"
            onClick={(e) => {
              e.preventDefault();
              scrollTo('#menu');
            }}
            className="btn-luxury opacity-0 hero-cta"
          >
            <span>View Menu</span>
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={() => scrollTo('#about')}
        className="hero-scroll absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-white/50 transition-colors hover:text-gold"
        aria-label="Scroll down"
      >
        <span className="text-[10px] font-medium uppercase tracking-ultra-wide">
          Scroll
        </span>
        <ChevronDown size={18} className="animate-scroll-indicator" />
      </button>
    </section>
  );
}
