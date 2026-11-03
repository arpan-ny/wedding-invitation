import { useEffect, useMemo, useState } from "react";
import { getNavItems, getSiteContent } from "./data/locales";
import { scrollToHash } from "./lib/scrollToHash";
import { Hero } from "./components/Hero";
import { Invitation } from "./components/Invitation";
import { Countdown } from "./components/Countdown";
import { Lineup } from "./components/Lineup";
import { Venue } from "./components/Venue";
import { Gallery } from "./components/Gallery";
import { Footer } from "./components/Footer";
import { BottomNav } from "./components/BottomNav";
import { MusicToggle } from "./components/MusicToggle";
import { Contact } from "./components/Contact";

export default function App() {
  const [language, setLanguage] = useState("en");
  const site = getSiteContent(language);
  const navItems = useMemo(() => getNavItems(language), [language]);

  useEffect(() => {
    const id = window.setTimeout(() => scrollToHash(), 50);
    return () => window.clearTimeout(id);
  }, []);

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  return (
    <>
      <a className="skip-link" href="#invitation">
        {site.skipLink}
      </a>
      <button
        type="button"
        onClick={() => setLanguage((current) => (current === "en" ? "hi" : "en"))}
        className="fixed top-4 right-4 z-50 inline-flex min-h-11 items-center justify-center rounded-full border border-gold/40 bg-page/95 px-4 text-sm font-medium text-accent-deep shadow-md backdrop-blur"
        aria-label={site.languageSwitch.label}
      >
        {site.languageSwitch.buttonLabel}
      </button>
      <Hero site={site} />
      <main>
        <Invitation site={site} />
        <Countdown site={site} />
        <Lineup site={site} />
        <Venue site={site} />
        <Gallery site={site} />
        <Contact site={site} />
      </main>
      <Footer site={site} />
      <MusicToggle site={site} />
      <BottomNav
        navItems={navItems}
        navLabel={language === "hi" ? "पृष्ठ अनुभाग" : "Page sections"}
      />
    </>
  );
}
