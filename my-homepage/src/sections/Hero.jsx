// sections/Hero.jsx
import profileImg from "../assets/profile.png";

export default function Hero() {
  return (
    <section className="hero" aria-label="Intro">
      <div className="heroInner">
        <div className="heroText">
          <h1>Hi, I’m Ji Yune.</h1>
          <p className="accent">
            I build digital products between technology and people.
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
      <div className="scrollHint">
        <img     
          src="/down-arrow.svg"
          alt="Scroll down"
          className="scrollArrow"/>
      </div>
    </section>
  );
}
