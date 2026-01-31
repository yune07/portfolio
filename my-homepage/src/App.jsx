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
    </>
  );
}
