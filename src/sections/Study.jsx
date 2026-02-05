import { useState } from "react";

const STUDY_ITEMS = [
  {
    id: "tud",
    logo: "tu-darmstadt.svg",
    title: "Business Information Systems",
    subtitle: "Technische Universität Darmstadt",
    summary:
      "Business Information Systems with a focus on digital systems, data and AI, and bridging business and technology.",
    degrees: [
      {
        level: "B.Sc.",
        headline:
          "Built a strong foundation across business and computer science and learned to translate complex topics into clear models and requirements.",
        highlights: [
          "Process modelling and requirements thinking",
          "Quantitative and legal basics for business decisions",
          "Structured problem solving across disciplines",
        ],
        projects: [
          {
            title: "Bachelor thesis: AI and privacy",
            text:
              "Analyzed core privacy risks in AI supported systems and translated them into clear requirements and practical implications for responsible system design.",
          },
          {
            title: "Bachelor IT Project: Question Answering System",
            text:
              "The bachelor IT project at TU Darmstadt focused on developing a question answering system for Serviceware SE using Helpcenter content. The system answered user questions by searching documents and extracting relevant passages, designed for both German and English and tested on Serviceware data and Wikipedia datasets. A simple UI displayed the answer, the source document, and a confidence score, and allowed users to rate answer quality. An evaluation dashboard supported quality monitoring with metrics such as a confusion matrix, and the project documented configuration choices and results, including an assessment of the cdQA framework. Skills and learnings included working with NLP based QA pipelines, designing evaluation and feedback loops, and translating requirements into a usable interface and measurable system quality.",
          },
        ],
      },
      {
        level: "M.Sc.",
        headline:
          "Deepened expertise in digital business and data and AI and learned to connect system level thinking with actionable recommendations.",
        highlights: [
          "Enterprise and digital business perspective",
          "Realistic understanding of data and AI methods",
          "User and ethics perspective for impact",
        ],
        projects: [
          {
            title: "Master thesis: Digital twin in a pharmaceutical supply chain",
            text:
              "The master’s thesis developed actionable recommendations for implementing a digital twin in a pharmaceutical supply chain, with a focus on improving transparency in logistics processes. A systematic literature review was combined with expert interviews to identify key functions, benefits, prerequisites, and challenges. Findings were translated into structured guidance for practice, including priorities for data quality, system integration, and adoption. The work strengthened the ability to turn complex input from research and stakeholders into clear decisions and practical next steps.",
          },
          {
            title: "Porsche Capstone Challenge 2023 on EV charging reliability",
            text:
              "Analyzed operator and vehicle datasets linked by vehicle ID to identify error patterns and causes of failed charging initiation. Explored error combinations, correlations, and vehicle parameter signals, then derived a data product concept that estimates charging success likelihood per station. Key learnings were how to work with messy real world data, interpret error patterns, and turn analysis into a recommendation that supports better charging success.",
          },
        ],
      },
    ],
  },
  {
    id: "ewha",
    layout: "exchange",
    logo: "ewha.png",
    title: "Exchange Semester",
    subtitle: "Ewha Womans University",
    summary:
      "Business focused exchange semester with a people and management angle.",
    sections: [
      {
        title: "Academic focus",
        text:
          "During the exchange semester, the focus was on business topics with a strong people and management angle. Courses included Marketing Management, Financial Management, and Managing Organizational Behavior, which added a practical perspective on how companies make decisions and how teams function.",
      },
      {
        title: "Campus activity",
        text:
          "Alongside coursework, tutoring was done through the E PALS program at the English Lounge. The experience strengthened communication skills and showed how to explain topics in a clear and supportive way.",
      },
      {
        title: "Engagement",
        text:
          "In addition, I took part in the 0 Tumbler Project with SK Telecom, supporting a campus reusable cup system to reduce disposable waste. My role focused on team coordination and documentation. It was a small role, but it reflects a hands on attitude and reliability in shared initiatives.",
      },
    ],
  },
];

export default function Study() {
  const [openId, setOpenId] = useState("");

  return (
    <section id="study" className="section">
      <div
        className="scrollSentinel"
        data-id="study"
        style={{ position: "absolute", top: 0 }}
      />
      <h1>Study</h1>

      <div className="studyList">
        {STUDY_ITEMS.map((item) => {
          const isOpen = item.id === openId;

          return (
            <div key={item.id} className={`studyItem ${isOpen ? "open" : ""}`}>
              <button
                type="button"
                className="studyHeader"
                onClick={() => setOpenId(isOpen ? "" : item.id)}
                aria-expanded={isOpen}
              >
                <div className="studyHeaderLeft">
                  <div className="studyLogoWrap">
                    <img src={item.logo} alt="" className="studyLogo" />
                  </div>

                  <div className="studyText">
                    <div className="studyTitle">{item.title}</div>
                    <div className="studySubtitle">{item.subtitle}</div>
                  </div>
                </div>

                <span className="studyChevron">{isOpen ? "▴" : "▾"}</span>
              </button>

              <div className="studyBody">
                <p className={`studySummary ${isOpen ? "open" : "closed"}`}>
                  {item.summary}
                </p>

                {isOpen ? (
                  item.layout === "exchange" ? (
                    <div className="exchangeGrid">
                      {(item.sections ?? []).map((s) => (
                        <div key={s.title} className="exchangeBlock">
                          <div className="exchangeTitle">{s.title}</div>
                          <p className="exchangeText">{s.text}</p>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="degreeGrid">
                      {(item.degrees ?? []).map((d) => (
                        <div key={d.level} className="degreeCard">
                          <div className="degreeTop">
                            <div className="degreeLevel">{d.level}</div>
                            <p className="degreeHeadline">{d.headline}</p>
                          </div>

                          <ul className="chipList">
                            {(d.highlights ?? []).map((h) => (
                              <li key={h} className="chipItem">
                                {h}
                              </li>
                            ))}
                          </ul>

                          {(d.projects ?? []).map((p, i) => (
                            <div key={`${d.level}-${i}`} className="projectBox">
                              <div className="projectTitle">{p.title}</div>
                              <p className="projectText">{p.text}</p>
                            </div>
                          ))}
                        </div>
                      ))}
                    </div>
                  )
                ) : null}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
