// sections/Hero.jsx
import profileImg from "../assets/profile.png";

export default function Hero() {
  return (
    <section id="home" className="hero" aria-label="Intro">
      <div
                className="scrollSentinel"
                data-id="home"
                style={{ position: "absolute", top: 0 }}
            />
      <div className="heroInner">
        <div className="heroText">
          <span className="meta">PROFESSIONAL PORTFOLIO</span>

          <h1>Ji Yune Whang</h1>
          <p className="accent">
            Master’s graduate in Information Systems with practical experience in digitalization projects, seeking entry-level opportunities in business analysis, consulting, and related roles at the intersection of business and IT. Strong interest in process optimization, digital solutions, and translating business needs into practical solutions.
          </p>
          <span className="meta">Business Information Systems · Digital Projects</span>
        </div>
        <div className="photoGroup">
            <div className="photoBg">
            </div>
            <img src={profileImg} alt="Portrait of Ji Yune" className="photoImg"
            />
        </div>
      </div>

    </section>
  );
}
