import "./App.css";
import NavBar from "./components/NavBar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Work from "./sections/Work";
import Study from "./sections/Study";
import Contact from "./sections/Contact";

export default function App() {
  return (
    <>
      <NavBar />
      <main>
        <Hero />
        <About />
        <Work />
        <Study />
        <Contact />
      </main>
      <div className="footer" style={{
        textAlign: "center", padding: "20px 0",
        backgroundColor: "rgba(242, 244, 243, 0.85)",  
        borderBottom: "1px solid rgba(0, 0, 0, 0.08)",
        borderTop: "1px solid rgba(0, 0, 0, 0.08)",
      }}>
        © {new Date().getFullYear()} Ji Yune Whang
      </div>
    </>
  );
}
