import { useEffect, useState } from "react";

const links = [
  { id: "about", label: "About" },
  { id: "work", label: "Work" },
  { id: "study", label: "Study" },
  { id: "contact", label: "Contact" },
];

export default function NavBar() {
  const [active, setActive] = useState("about");

  useEffect(() => {
    const sections = links
      .map((l) => document.getElementById(l.id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0))[0];

        if (visible?.target?.id) setActive(visible.target.id);
      },
      {
        root: null,
        threshold: [0.2, 0.35, 0.5, 0.65],
        rootMargin: "-20% 0px -65% 0px",
      }
    );

    sections.forEach((s) => observer.observe(s));
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
            >
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
