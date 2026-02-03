import { useState } from "react";
const workItems = [
  {
    id: "fresenius",
    logo: "/fresenius.svg",
    title: "Fresenius Kabi",
    text:
      "Master thesis and student work focused on digital supply chain transparency.",
  },
  {
    id: "mercedes",
    logo: "/mercedes.svg",
    title: "Mercedes-Benz",
    text:
      "Student role in digital projects with focus on data driven processes and coordination.",
  },
  {
    id: "lg",
    logo: "/lg.svg",
    title: "LG",
    text:
      "Working student position with focus on localization and documentation processes.",
  },
];


export default function Work() {
  const [openCard, setOpenCard] = useState(null);

  return (
    <section id="work" className="section work">
  <div
    className="scrollSentinel"
    data-id="work"
    style={{ position: "absolute", top: 0 }}
  />
      <h1>Work</h1>
      <div className="workGrid">
        {workItems.map((item) => (
          <div
            key={item.id}
            className={`workCard ${openCard === item.id ? "open" : ""}`}
            onClick={() =>
              setOpenCard(openCard === item.id ? null : item.id)
            }
          >
            <img src={item.logo} alt={item.title} />

            {openCard === item.id && (
              <div className="cardContent">
                <p>{item.text}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
