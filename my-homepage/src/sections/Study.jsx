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
      {
        title: "Conceptual Design of a Digital System",
        description:
          "I worked on the analysis and conceptual design of a digital system to support business processes. The focus was on understanding requirements, structuring information flows, and translating them into a coherent system concept.",
      },
      {
        title: "System Analysis and Process Modeling",
        description:
          "I analyzed existing processes and improvement potentials, balancing technical feasibility with user and business needs. This strengthened my system thinking and communication skills.",
      },
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
      {
        title: "International Project Collaboration",
        description:
          "I worked in international teams and collaborated with students from different cultural backgrounds, which strengthened my communication and coordination skills.",
      },
      {
        title: "User Centered Digital Concepts",
        description:
          "Project based courses emphasized user centered thinking and practical problem solving in a global context.",
      },
    ],
  },
];





export default function Study() {
  const [openStudy, setOpenStudy] = useState(null);
  return (
    <section id="study" className="section study">
  <div
    className="scrollSentinel"
    data-id="study"
    style={{ position: "absolute", top: 0 }}
  />
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
              className={`studyIndicator ${openStudy === item.id ? "open" : ""
                }`}
            />

          </div>

          <p className="studyIntro">{item.intro}</p>

          <div className="studyDetails">
            {item.details.map((project, index) => (
              <div key={index} className="studyProject">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
            ))}
          </div>

        </div>
      ))}
    </section>


  );
}
