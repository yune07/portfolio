import { useMemo, useState } from "react";

const WORK_ITEMS = [
  {
    id: "fresenius",
    company: "Fresenius Kabi",
    role: "Master Thesis & Working Student ",
    team: "Product Digitalization & Serialization",
    timeframe: "2024 to 2025",
    location: "Bad Homburg, Germany",
    description:
      "At Fresenius Kabi, I Worked on digital product and process initiatives including project coordination, stakeholder alignment, and workshops. In parallel, I wrote my master’s thesis on digital twins in pharmaceutical supply chains, which sharpened my analytical thinking and structured approach. I worked independently, asked precise questions, and focused on solutions that are realistic and usable in practice.",
    highlights: [
      "Ran a structured literature review and expert interviews.",
      "Analyzed requirements, benefits, and implementation challenges.",
      "Formulated recommendations for practice."
    ],
  },
  {
    id: "mercedes",
    company: "Mercedes Benz",
    role: "Intern & Working Student",
    team: "Digitalization & Innovation in Supply Chain",
    timeframe: "2022 to 2024",
    location: "Stuttgart, Germany",
    description:
      "At Mercedes-Benz, I worked on projects at the interface of business and IT. I supported a project on building a data ecosystem with suppliers and other OEMs, focusing on traceability and sustainability topics such as CO2 transparency. I contributed by preparing meetings, capturing key decisions, and turning complex discussions into clear summaries. My work focused on creating clarity in complex topics and contributing to well organized project work. This role strengthened my analytical thinking, reliability, and ability to work precisely in structured corporate environments.",
    highlights: [
      "Worked with stakeholders across teams to clarify needs and dependencies.",
      "Created structured documentation and supported project coordination.",
      "Helped keep track of tasks, timelines, and open points.",
    ],
  },
  {
    id: "lg",
    company: "LG",
    role: "Working Student",
    team: "Marketing",
    timeframe: "2021",
    location: "Eschborn, Germany",
    description:
      "As a Working Student at LG in a marketing team, I supported digital activities including online trade fairs, localization of materials, and B2B website maintenance. I prepared and updated content and supported the team with day to day tasks. This strengthened my attention to detail, reliability, and ability to work in structured processes.",
    highlights: [
      "Supported activities for online trade fairs and campaign related materials.",
      "Localized marketing materials and ensured consistent wording across languages.",
      "Maintained and updated content on the B2B website.",
    ],
  }
  
];

export default function Work() {
  const items = useMemo(() => WORK_ITEMS, []);
  const [activeId, setActiveId] = useState(items[0]?.id ?? "");

  const activeItem = items.find((i) => i.id === activeId) ?? items[0];

  return (
    <section id="work" className="section">
        <div
    className="scrollSentinel"
    data-id="work"
    style={{ position: "absolute", top: 0 }}
  />
      <h1>Work</h1>

      <div className="workLayout">
        <div className="workLeft" role="tablist" aria-label="Work companies">
          {items.map((item) => {
            const isActive = item.id === activeId;

            return (
              <button
                key={item.id}
                type="button"
                className={`workCompanyBtn ${isActive ? "active" : ""}`}
                onClick={() => setActiveId(item.id)}
                role="tab"
                aria-selected={isActive}
                aria-controls={`panel-${item.id}`}
                id={`tab-${item.id}`}
              >
                <div className="workCompanyName">{item.company}</div>
                <div className="workCompanyMeta">
                  {item.role}
                </div>
              </button>
            );
          })}
        </div>

        <div
          className="workRight"
          role="tabpanel"
          id={`panel-${activeItem?.id}`}
          aria-labelledby={`tab-${activeItem?.id}`}
        >
          <div className="workPanelHeader">
            <div className="workPanelTitle">{activeItem?.company}</div>
            <div className="workPanelSub">
              <span>{activeItem?.role}</span>
              <span className="workDot">•</span>
                            <span>{activeItem?.team}</span>
              <span className="workDot">•</span>
              <span>{activeItem?.timeframe}</span>
              <span className="workDot">•</span>
              <span>{activeItem?.location}</span>
            </div>
          </div>

          <p className="workPanelDesc">{activeItem?.description}</p>

          <div className="workHighlights">
            {activeItem?.highlights?.map((h, idx) => (
              <div key={idx} className="workHighlightRow">
                <span className="workBullet" aria-hidden="true">•</span>
                <span>{h}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
