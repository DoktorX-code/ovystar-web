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
  // Empty measurement anchor — no image inside, just a grid cell for layout math
  const scalerRef = useRef<HTMLDivElement>(null);
  // The center image lives OUTSIDE the grid as a sibling of .sg-grid
  const centerImgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const scalerEl = scalerRef.current;
    const centerImg = centerImgRef.current;
    if (!section || !scalerEl || !centerImg) return;

    const cleanups: (() => void)[] = [];
    let raf1 = 0;
    let raf2 = 0;

    raf1 = requestAnimationFrame(() => {
      raf2 = requestAnimationFrame(() => {
        // .sg-content is the sticky viewport and the offset parent of .sg-center-img
        const contentEl = scalerEl.closest(".sg-content") as HTMLElement | null;
        if (!contentEl) return;

        // Cell dimensions come from the container (stable, unaffected by inline styles)
        const cellW = scalerEl.offsetWidth;
        const cellH = scalerEl.offsetHeight;
        if (!cellW || !cellH) return;

        const vw = window.innerWidth;
        const vh = window.innerHeight;

        // Compute scaler's position relative to .sg-content.
        // This difference is scroll-invariant: when sticky is active (contentEl.top=0)
        // it equals the viewport coordinate, which is what we need for the animation end.
        const scalerRect  = scalerEl.getBoundingClientRect();
        const contentRect = contentEl.getBoundingClientRect();
        const cellTop  = scalerRect.top  - contentRect.top;
        const cellLeft = scalerRect.left - contentRect.left;

        // Pre-flight: cover the full sticky viewport BEFORE importing motion
        // to eliminate any visible flash when the section scrolls into view.
        centerImg.style.top          = "0px";
        centerImg.style.left         = "0px";
        centerImg.style.width        = `${vw}px`;
        centerImg.style.height       = `${vh}px`;
        centerImg.style.borderRadius = "0px";

        import("motion").then(({ animate, scroll, cubicBezier }) => {
          // Honour prefers-reduced-motion: jump straight to final state and exit
          if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            centerImg.style.top          = `${cellTop}px`;
            centerImg.style.left         = `${cellLeft}px`;
            centerImg.style.width        = `${cellW}px`;
            centerImg.style.height       = `${cellH}px`;
            centerImg.style.borderRadius = "12px";
            return;
          }

          // ── Center image: shrinks from fullscreen → grid cell ─────────────────
          const c0 = scroll(
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            animate(
              centerImg,
              {
                top:          [0,       cellTop],
                left:         [0,       cellLeft],
                width:        [vw,      cellW],
                height:       [vh,      cellH],
                borderRadius: ["0px",   "12px"],
              } as any,
              {
                top:          { easing: cubicBezier(0.65, 0, 0.35, 1) },
                left:         { easing: cubicBezier(0.65, 0, 0.35, 1) },
                width:        { easing: cubicBezier(0.65, 0, 0.35, 1) },
                height:       { easing: cubicBezier(0.42, 0, 0.58, 1) },
                borderRadius: { easing: cubicBezier(0.65, 0, 0.35, 1) },
              } as any
            ),
            { target: section, offset: ["start start", "80% end"] }
          );
          cleanups.push(c0);

          // ── Grid layers: opacity + scale, staggered per layer ─────────────────
          const scaleEasings = [
            cubicBezier(0.42, 0, 0.58, 1),
            cubicBezier(0.76, 0, 0.24, 1),
            cubicBezier(0.87, 0, 0.13, 1),
          ];

          section
            .querySelectorAll<HTMLElement>(".sg-layer")
            .forEach((layer, index) => {
              const endOffset = `${1 - index * 0.05} end` as const;

              const c1 = scroll(
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                animate(
                  layer,
                  { opacity: [0, 0, 1] } as any,
                  {
                    offset: [0, 0.55, 1],
                    easing: cubicBezier(0.61, 1, 0.88, 1),
                  } as any
                ),
                { target: section, offset: ["start start", endOffset] }
              );

              const c2 = scroll(
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                animate(
                  layer,
                  { scale: [0, 0, 1] } as any,
                  {
                    offset: [0, 0.3, 1],
                    easing: scaleEasings[index],
                  } as any
                ),
                { target: section, offset: ["start start", endOffset] }
              );

              cleanups.push(c1, c2);
            });
        });
      });
    });

    return () => {
      cancelAnimationFrame(raf1);
      cancelAnimationFrame(raf2);
      cleanups.forEach((fn) => fn?.());
    };
  }, []);

  return (
    <section ref={sectionRef} className="sg-section" aria-label="Galerie pohybu">
      <div className="sg-content">

        {/* Center image — outside .sg-grid, position:absolute fills the sticky viewport */}
        <img
          ref={centerImgRef}
          src="/images/center.png"
          alt="Ovy Stars Ostrava"
          className="sg-center-img"
        />

        <div className="sg-grid">

          {/* Layer 1 — outer edges (col 1 and col 5) */}
          <div className="sg-layer sg-layer-1" aria-hidden="true">
            {Array.from({ length: 6 }, (_, i) => (
              <div key={i}>
                <img src={img(i)} alt="" />
              </div>
            ))}
          </div>

          {/* Layer 2 — inner columns (col 2 and col 4) */}
          <div className="sg-layer sg-layer-2" aria-hidden="true">
            {Array.from({ length: 6 }, (_, i) => (
              <div key={i}>
                <img src={img(i + 6)} alt="" />
              </div>
            ))}
          </div>

          {/* Layer 3 — center column, top row and bottom row */}
          <div className="sg-layer sg-layer-3" aria-hidden="true">
            <div><img src={img(12)} alt="" /></div>
            <div><img src={img(13)} alt="" /></div>
          </div>

          {/* Measurement anchor — no image inside, used only for getBoundingClientRect */}
          <div className="sg-scaler" ref={scalerRef} />

        </div>
      </div>
    </section>
  );
}
