/* eslint-disable @next/next/no-img-element */
"use client";

import { useEffect, useRef } from "react";

const IMAGES = [
  "/images/198b43e2-7151-49c1-af94-8ee0ef7fd182.png",
  "/images/b9d20a3d-1ab3-4014-a3d0-da40d9c08c30.png",
  "/images/f9255412-86ad-42c4-b18c-b2199850f657.png",
];

const img = (i: number) => IMAGES[i % IMAGES.length];

export default function ScrollAnimation() {
  const sectionRef = useRef<HTMLElement>(null);
  const scalerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cleanups: (() => void)[] = [];

    const setup = () => {
      const section = sectionRef.current;
      const scalerImg = scalerRef.current?.querySelector("img") as HTMLElement | null;
      if (!section || !scalerImg) return;

      const run = () => {
        const naturalWidth = scalerImg.offsetWidth;
        const naturalHeight = scalerImg.offsetHeight;
        if (!naturalWidth || !naturalHeight) return;

        const vw = window.innerWidth;
        const vh = window.innerHeight;

        import("motion").then(({ animate, scroll, cubicBezier }) => {
          if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          const c0 = scroll(
            animate(
              scalerImg,
              { width: [vw, naturalWidth], height: [vh, naturalHeight] } as any,
              {
                width: { easing: cubicBezier(0.65, 0, 0.35, 1) },
                height: { easing: cubicBezier(0.42, 0, 0.58, 1) },
              } as any
            ),
            { target: section, offset: ["start start", "80% end"] }
          );
          cleanups.push(c0);

          const scaleEasings = [
            cubicBezier(0.42, 0, 0.58, 1),
            cubicBezier(0.76, 0, 0.24, 1),
            cubicBezier(0.87, 0, 0.13, 1),
          ];

          section.querySelectorAll<HTMLElement>(".sg-layer").forEach((layer, index) => {
            const c1 = scroll(
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              animate(layer, { opacity: [0, 0, 1] } as any, {
                offset: [0, 0.55, 1],
                easing: cubicBezier(0.61, 1, 0.88, 1),
              } as any),
              { target: section, offset: ["start start", `${1 - index * 0.05} end`] }
            );
            const c2 = scroll(
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              animate(layer, { scale: [0, 0, 1] } as any, {
                offset: [0, 0.3, 1],
                easing: scaleEasings[index],
              } as any),
              { target: section, offset: ["start start", `${1 - index * 0.05} end`] }
            );
            cleanups.push(c1, c2);
          });
        });
      };

      const imgEl = scalerImg as HTMLImageElement;
      if (imgEl.complete && imgEl.naturalWidth) {
        run();
      } else {
        imgEl.addEventListener("load", run, { once: true });
        cleanups.push(() => imgEl.removeEventListener("load", run));
      }
    };

    const raf = requestAnimationFrame(setup);
    return () => {
      cancelAnimationFrame(raf);
      cleanups.forEach((fn) => fn?.());
    };
  }, []);

  return (
    <section ref={sectionRef} className="sg-section" aria-label="Galerie pohybu">
      <div className="sg-content">
        <div className="sg-grid">
          {/* Layer 1 — outer edges */}
          <div className="sg-layer sg-layer-1" aria-hidden="true">
            {[0, 1, 2, 3, 4, 5].map((i) => (
              <div key={i}><img src={img(i)} alt="" /></div>
            ))}
          </div>

          {/* Layer 2 — inner columns */}
          <div className="sg-layer sg-layer-2" aria-hidden="true">
            {[0, 1, 2, 3, 4, 5].map((i) => (
              <div key={i}><img src={img(i + 6)} alt="" /></div>
            ))}
          </div>

          {/* Layer 3 — center top/bottom */}
          <div className="sg-layer sg-layer-3" aria-hidden="true">
            <div><img src={img(12)} alt="" /></div>
            <div><img src={img(13)} alt="" /></div>
          </div>

          {/* Center hero image — shrinks from fullscreen on scroll */}
          <div className="sg-scaler" ref={scalerRef}>
            <img src="/images/b9d20a3d-1ab3-4014-a3d0-da40d9c08c30.png" alt="Ovy Stars Ostrava" />
          </div>
        </div>
      </div>
    </section>
  );
}
