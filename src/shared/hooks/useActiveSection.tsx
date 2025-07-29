import { useEffect, useState } from "react";
import { LIST_NAV } from "../constants";

const NAV_SECTION_IDS = LIST_NAV.map((nav) => nav.value);

const useActiveSection = () => {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          const id = entry.target.id;

          if (NAV_SECTION_IDS.includes(id)) {
            setActiveSection(id);
          } else {
            setActiveSection(null);
          }
        });
      },
      {
        root: null,
        threshold: 0.5,
      }
    );

    const sections = document.querySelectorAll<HTMLElement>("section[id]");
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return activeSection;
};

export default useActiveSection;
