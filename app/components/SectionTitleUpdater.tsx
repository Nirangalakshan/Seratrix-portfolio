"use client";

import { useEffect } from "react";

const SECTIONS = [
  { id: "hero", title: "Home" },
  { id: "solutions", title: "Solutions" },
  { id: "technology", title: "Technology" },
  { id: "vision", title: "Vision" },
  { id: "contact", title: "Contact" },
];

export function SectionTitleUpdater() {
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -70% 0px", // Adjust to trigger when section is in the upper part of the screen
      threshold: 0,
    };

    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id;
          const section = SECTIONS.find((s) => s.id === sectionId);
          if (section) {
            document.title = `Seratrix | ${section.title}`;
          }
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);

    SECTIONS.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return null;
}
