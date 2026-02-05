import { useState } from "react";

const studyItems = [
  {
    id: "tu",
    logo: "tu-darmstadt.svg",
    title: "Business Information Systems",
    place: "Technische Universität Darmstadt",
    intro:
      "Business Information Systems with a focus on digital systems, data and AI, and bridging business and technology.",
    details: [
      {
        title: "B.Sc. in Business Information Systems: Built a strong foundation across business and computer science and learned to translate complex topics into clear models and requirements.",
        description:
          "The B.Sc. in Business Information Systems built a strong foundation across business and computer science, supported by quantitative and legal basics. Beyond the content, it trained structured thinking and a practical way of working between both worlds. Technical courses strengthened problem solving and system understanding, while business courses added context for how decisions, processes, and constraints work in organizations. Information systems topics connected this by turning complex situations into clear process models, concepts, and requirements. The bachelor’s thesis on AI and privacy sharpened awareness that digital solutions need to be responsible and understandable, not only functional.",
      },
      {
        title: "M.Sc. in Business Information Systems: Deepened expertise in digital business and AI and learned to connect system level thinking with practical, actionable recommendations.",
        description:
          "The M.Sc. in Business Information Systems added depth in digital business and data and AI related technologies. Topics such as enterprise architecture and digital business models strengthened the ability to think across systems, stakeholders, and long term impacts. Courses in AI and NLP provided a realistic understanding of what data driven methods can and cannot do, while HCI and ethics added a user and impact perspective. The master’s thesis on implementing a digital twin in a pharmaceutical supply chain strengthened the ability to combine research and practice and translate insights into concrete recommendations. This combination supports a profile that can structure complex topics, communicate clearly, and connect technology with practical use in organizations.",
      },
    ],
  },
  {
    id: "korea",
    logo: "ewha.svg",
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
              src="chevron-down.svg"
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
