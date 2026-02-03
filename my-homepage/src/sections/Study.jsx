import { useState } from "react";
const studyItems = [
  {
    id: "tu",
    logo: "/tu-darmstadt.svg",
    title: "Business Information Systems",
    place: "Technische Universität Darmstadt",
    intro:
      "Business Information Systems with a focus on digital systems, processes, and applied technology.",
    details: [
      "I developed a strong foundation in system thinking, structured analysis, and translating requirements into clear concepts.",
      "My studies focused on the interaction between technology and real world application.",
    ],
  },
  {
    id: "korea",
    logo: "/ewha.svg",
    title: "Exchange Semester",
    place: "Ewha Womans University, Seoul",
    intro:
      "Exchange semester with a focus on digital innovation, collaboration, and cross cultural project work.",
    details: [
      "I studied in an international academic environment and worked closely with students from different cultural backgrounds.",
      "Project based courses emphasized user centered thinking and practical problem solving.",
    ],
  },
];




export default function Study() {
  const [openStudy, setOpenStudy] = useState(null);
  return (
<section id="study" className="section study">
  <h1>Study</h1>

  {studyItems.map((item) => (
    <div
      key={item.id}
      className={`studyBlock ${openStudy === item.id ? "open" : ""}`}
    >
<div
  className="studyHeader"
  onClick={() =>
    setOpenStudy(openStudy === item.id ? null : item.id)
  }
>
  <div className="studyHeaderLeft">
    <img src={item.logo} alt={item.place} />

    <div className="studyMeta">
      <h2>{item.title}</h2>
      <span>{item.place}</span>
    </div>
  </div>

<img
  src="/chevron-down.svg"
  alt=""
  className={`studyIndicator ${
    openStudy === item.id ? "open" : ""
  }`}
/>

</div>

      <p className="studyIntro">{item.intro}</p>

      <div className="studyDetails">
        {item.details.map((text, index) => (
          <p key={index}>{text}</p>
        ))}
      </div>
    </div>
  ))}
</section>


  );
}
