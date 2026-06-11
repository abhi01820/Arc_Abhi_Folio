import About from "./about/page";
import Blogs from "./components/Blogs";
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
      <Blogs />
      <Newsletter />
      <Contact/>
    </>
  );
}
