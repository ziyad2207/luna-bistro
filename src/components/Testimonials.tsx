import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectFade } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import { testimonials } from '@/data/restaurant';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

export default function Testimonials() {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <section
      id="testimonials"
      className="relative overflow-hidden bg-ink-800 py-32 lg:py-40"
    >
      {/* Decorative giant quote */}
      <Quote
        size={400}
        className="pointer-events-none absolute -left-20 top-10 text-white/[0.02]"
        fill="currentColor"
      />

      <div className="relative mx-auto max-w-5xl px-6 lg:px-12">
        <div className="mb-12 text-center">
          <p className="eyebrow mb-6" data-reveal>
            <span>Guest Voices</span>
          </p>
          <h2 className="section-title" data-title-reveal>
            Words From <span className="italic text-gold-gradient">Our Guests</span>
          </h2>
        </div>

        <div className="relative" data-reveal data-reveal-delay="150">
          <Swiper
            modules={[Autoplay, Pagination, EffectFade]}
            effect="fade"
            autoplay={{ delay: 6000, disableOnInteraction: false }}
            loop
            pagination={{ clickable: true, el: '.testimonial-pagination' }}
            onSwiper={(s) => (swiperRef.current = s)}
            className="!pb-16"
          >
            {testimonials.map((t) => (
              <SwiperSlide key={t.id}>
                <div className="flex flex-col items-center text-center">
                  {/* Stars */}
                  <div className="mb-8 flex gap-1">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star
                        key={i}
                        size={20}
                        className="text-gold"
                        fill="currentColor"
                      />
                    ))}
                  </div>

                  {/* Quote */}
                  <blockquote className="mx-auto max-w-3xl">
                    <p className="font-serif text-2xl italic leading-relaxed text-white/85 md:text-3xl md:leading-relaxed">
                      "{t.quote}"
                    </p>
                  </blockquote>

                  {/* Author */}
                  <div className="mt-10">
                    <p className="font-display text-xl text-white">{t.name}</p>
                    <p className="mt-1 text-xs font-medium uppercase tracking-wide-lg text-gold/70">
                      {t.role}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom pagination */}
          <div className="testimonial-pagination flex justify-center gap-2" />

          {/* Nav buttons */}
          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              onClick={() => swiperRef.current?.slidePrev()}
              className="glass rounded-full p-3 text-white transition-colors hover:border-gold/40 hover:text-gold"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={() => swiperRef.current?.slideNext()}
              className="glass rounded-full p-3 text-white transition-colors hover:border-gold/40 hover:text-gold"
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
