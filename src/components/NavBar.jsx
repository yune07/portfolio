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
    const visible = entries
      .filter((e) => e.isIntersecting)
      .sort(
        (a, b) =>
          Math.abs(a.boundingClientRect.top) -
          Math.abs(b.boundingClientRect.top)
      )[0];

    if (visible) {
      setActive(visible.target.dataset.id);
    }
  },
  {
rootMargin: "-40% 0px -40% 0px", threshold: [0, 0.25, 0.5]



  }
);



    const sentinels = document.querySelectorAll(".scrollSentinel");
    sentinels.forEach((el) => observer.observe(el));

    // Cleanup (sehr wichtig)
    return () => {
      sentinels.forEach((el) => observer.unobserve(el));
    };
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
