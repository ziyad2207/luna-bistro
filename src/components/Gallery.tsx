import { useState, useCallback, useEffect } from 'react';
import { galleryImages } from '@/data/restaurant';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';

export default function Gallery() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const closeLightbox = useCallback(() => setLightboxIndex(null), []);
  const next = useCallback(
    () =>
      setLightboxIndex((i) =>
        i === null ? i : (i + 1) % galleryImages.length
      ),
    []
  );
  const prev = useCallback(
    () =>
      setLightboxIndex((i) =>
        i === null ? i : (i - 1 + galleryImages.length) % galleryImages.length
      ),
    []
  );

  useEffect(() => {
    if (lightboxIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') next();
      if (e.key === 'ArrowLeft') prev();
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [lightboxIndex, closeLightbox, next, prev]);

  return (
    <section id="gallery" className="relative bg-ink-900 py-32 lg:py-40">
      <div className="mx-auto max-w-8xl px-6 lg:px-12">
        <div className="mb-16 text-center">
          <p className="eyebrow mb-6" data-reveal>
            <span>The Gallery</span>
          </p>
          <h2 className="section-title" data-title-reveal>
            Moments Worth <span className="italic text-gold-gradient">Savouring</span>
          </h2>
        </div>

        {/* Masonry grid */}
        <div className="columns-1 gap-4 sm:columns-2 lg:columns-3 [&>*]:mb-4">
          {galleryImages.map((img, i) => (
            <button
              key={img.id}
              onClick={() => setLightboxIndex(i)}
              className="group relative block w-full overflow-hidden rounded-xl border border-white/[0.06]"
              data-reveal
              data-reveal-delay={(i % 3) * 100}
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className={`w-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-110 ${
                  img.span === 'tall'
                    ? 'aspect-[3/4]'
                    : img.span === 'wide'
                    ? 'aspect-[4/3]'
                    : 'aspect-square'
                }`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-900/80 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <div className="glass rounded-full p-4">
                  <ZoomIn size={20} className="text-white" />
                </div>
              </div>
              <p className="absolute bottom-4 left-4 right-4 translate-y-2 font-serif text-lg text-white opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                {img.alt}
              </p>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-ink-900/95 backdrop-blur-md animate-fade-in"
          onClick={closeLightbox}
        >
          {/* Close */}
          <button
            onClick={closeLightbox}
            className="absolute right-6 top-6 glass rounded-full p-3 text-white transition-colors hover:text-gold"
            aria-label="Close"
          >
            <X size={22} />
          </button>

          {/* Prev */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 glass rounded-full p-3 text-white transition-colors hover:text-gold sm:left-8"
            aria-label="Previous"
          >
            <ChevronLeft size={24} />
          </button>

          {/* Image */}
          <img
            src={galleryImages[lightboxIndex].src}
            alt={galleryImages[lightboxIndex].alt}
            className="max-h-[85vh] max-w-[90vw] rounded-xl object-contain"
            onClick={(e) => e.stopPropagation()}
          />

          {/* Next */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 glass rounded-full p-3 text-white transition-colors hover:text-gold sm:right-8"
            aria-label="Next"
          >
            <ChevronRight size={24} />
          </button>

          {/* Caption */}
          <p className="absolute bottom-8 left-1/2 -translate-x-1/2 font-serif text-lg text-white/70">
            {galleryImages[lightboxIndex].alt}
          </p>
        </div>
      )}
    </section>
  );
}
