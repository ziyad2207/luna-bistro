import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * Reveal-on-scroll animations using GSAP ScrollTrigger.
 * Any element with `data-reveal` animates in when it enters the viewport.
 * Optional `data-reveal-delay` (ms) staggers the start.
 */
export function useScrollReveal() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Fade-up reveal
      gsap.utils.toArray<HTMLElement>('[data-reveal]').forEach((el) => {
        const delay = Number(el.dataset.revealDelay ?? 0) / 1000;
        gsap.fromTo(
          el,
          { y: 60, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1.2,
            delay,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 85%',
              toggleActions: 'play none none none',
            },
          }
        );
      });

      // Parallax — elements with `data-parallax` move at a different scroll speed
      gsap.utils.toArray<HTMLElement>('[data-parallax]').forEach((el) => {
        const speed = Number(el.dataset.parallax ?? 0.2);
        gsap.to(el, {
          yPercent: -speed * 100,
          ease: 'none',
          scrollTrigger: {
            trigger: el,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        });
      });

      // Image zoom on scroll
      gsap.utils.toArray<HTMLElement>('[data-zoom]').forEach((el) => {
        gsap.fromTo(
          el,
          { scale: 1.15 },
          {
            scale: 1,
            ease: 'none',
            scrollTrigger: {
              trigger: el,
              start: 'top bottom',
              end: 'bottom top',
              scrub: true,
            },
          }
        );
      });

      // Section title line draw
      gsap.utils.toArray<HTMLElement>('[data-title-reveal]').forEach((el) => {
        gsap.fromTo(
          el,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1.4,
            ease: 'power4.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 88%',
              toggleActions: 'play none none none',
            },
          }
        );
      });
    });

    return () => ctx.revert();
  }, []);
}
