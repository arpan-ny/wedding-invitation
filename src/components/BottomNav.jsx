import { useEffect, useState } from "react";
import { navItems } from "../data/site.config";

export function BottomNav() {
  const [active, setActive] = useState(navItems[0]?.id);

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter(Boolean);

    if (!sections.length) return undefined;

    let frame = 0;
    const updateActive = () => {
      frame = 0;
      const activationLine = window.innerHeight * 0.35;
      const current = sections.reduce((activeSection, section) => {
        return section.getBoundingClientRect().top <= activationLine
          ? section
          : activeSection;
      }, sections[0]);

      setActive((currentActive) =>
        current.id === currentActive ? currentActive : current.id,
      );
    };
    const scheduleUpdate = () => {
      if (!frame) frame = window.requestAnimationFrame(updateActive);
    };

    updateActive();
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);

    return () => {
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <nav
      className="fixed bottom-4 left-1/2 z-40 w-[min(100%-1rem,36rem)] -translate-x-1/2"
      aria-label="Page sections"
    >
      <div className="nav-scroll rounded-full border border-gold/30 bg-page/95 px-2 py-1 shadow-lg backdrop-blur">
        <ul className="flex min-w-max items-center justify-between gap-1">
          {navItems.map((item) => {
            const isActive = active === item.id;
            return (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={`inline-flex min-h-11 min-w-11 items-center justify-center rounded-full px-3 text-xs font-medium whitespace-nowrap sm:text-sm ${
                    isActive ? "bg-accent-deep text-page" : "text-ink"
                  }`}
                >
                  {item.label}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
