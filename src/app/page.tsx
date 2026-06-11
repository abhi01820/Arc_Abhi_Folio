import About from "./about/page";
import HeroEnhanced from "./components/HeroEnhanced";
import LeetCodeStats from "./components/LeetCodeStats";
import Newsletter from "./components/Newsletter";
import Projects from "./components/Projects";
import Contact from "./contact/page";


export default function Home() {
  return (
    <>
      <HeroEnhanced /> 
      <Projects />
      <About/>
      <LeetCodeStats />
      <Newsletter />
      <Contact/>
    </>
  );
}
