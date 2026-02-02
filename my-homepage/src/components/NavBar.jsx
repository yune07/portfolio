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

    console.log(
      "sections found:",
      sections.map((s) => s.id)
    );

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const best = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (best?.target?.id) {
          console.log("active:", best.target.id, best.intersectionRatio);
          setActive(best.target.id);
        }
      },
      {
        root: null,
        threshold: [0, 0.1, 0.25, 0.4, 0.6],
        rootMargin: "0px 0px -50% 0px",
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
