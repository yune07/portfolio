import { useEffect, useState } from "react";

const links = [
  { id: "about", label: "About" },
  { id: "work", label: "Work" },
  { id: "study", label: "Study" },
  { id: "contact", label: "Contact" },
];

export default function NavBar() {
  const [active, setActive] = useState("about");

  const NAV_H = 90;

  const handleNavClick = (e, id) => {
    e.preventDefault();

    setActive(id);

    const el = document.getElementById(id);
    if (!el) return;

    const y = el.getBoundingClientRect().top + window.scrollY - NAV_H;
    window.scrollTo({ top: y, behavior: "smooth" });

    window.history.replaceState(null, "", `#${id}`);
  };

  useEffect(() => {
    const sentinels = Array.from(document.querySelectorAll(".scrollSentinel"));
    if (!sentinels.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const intersecting = entries.filter((e) => e.isIntersecting);
        if (!intersecting.length) return;

        const best = intersecting
          .slice()
          .sort(
            (a, b) =>
              Math.abs(a.boundingClientRect.top - NAV_H) -
              Math.abs(b.boundingClientRect.top - NAV_H)
          )[0];

        const id = best?.target?.dataset?.id;
        if (id) setActive(id);
      },
      {
        threshold: 0,
        rootMargin: `-${NAV_H}px 0px -70% 0px`,
      }
    );

    sentinels.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <nav className="nav">
      <div className="navInner">
        <div className="brand">Ji Yune</div>

        <div className="navLinks">
          {links.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              className={active === l.id ? "active" : ""}
              onClick={(e) => handleNavClick(e, l.id)}
            >
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
