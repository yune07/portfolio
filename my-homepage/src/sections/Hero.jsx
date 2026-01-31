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
