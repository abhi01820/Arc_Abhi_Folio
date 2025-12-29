import About from "./about/page";
import Blogs from "./components/Blogs";
import HeroEnhanced from "./components/HeroEnhanced";
import Newsletter from "./components/Newsletter";
import Projects from "./components/Projects";
import Contact from "./contact/page";


export default function Home() {
  return (
    <>
      <HeroEnhanced /> 
      <Projects />
      <About/>
      <Blogs />
      <Newsletter />
      <Contact/>
    </>
  );
}
