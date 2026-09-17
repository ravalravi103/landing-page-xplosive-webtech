import { useEffect } from 'react';

export function useScrollEffects() {
  useEffect(() => {
    const parallaxEls = document.querySelectorAll<HTMLElement>('[data-parallax]');

    const applyParallax = () => {
      parallaxEls.forEach((el) => {
        const section = el.closest('section') as HTMLElement | null;
        if (!section) return;
        const rect = section.getBoundingClientRect();
        const speed = parseFloat(el.dataset.parallax ?? '0.2');
        el.style.transform = `translateY(${-rect.top * speed}px)`;
      });
    };

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach(({ isIntersecting, target }) => {
          if (isIntersecting) {
            target.classList.add('is-visible');
            revealObserver.unobserve(target);
          }
        });
      },
      { threshold: 0.25, rootMargin: '0px 0px -120px 0px' }
    );

    document
      .querySelectorAll('[data-reveal]')
      .forEach((el) => revealObserver.observe(el));

    window.addEventListener('scroll', applyParallax, { passive: true });
    applyParallax();

    return () => {
      window.removeEventListener('scroll', applyParallax);
      revealObserver.disconnect();
    };
  }, []);
}
