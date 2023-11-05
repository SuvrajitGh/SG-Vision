import Footer from "./components/footer/page";
import Gallery from "./components/gallery/page";
import Header from "./components/header/page";
import Hero from "./components/hero/page";
import MoreProjects from "./components/moreprojects/page";
import Projects from "./components/projects/page";
import Skills from "./components/skills/page";
import Testimonial from "./components/testimonials/page";
import WorkExperience from "./components/workexperience/page";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Projects />
      <MoreProjects />
      <Skills />
      <WorkExperience />
      <Gallery />
      <Testimonial />
      <Footer />
    </>
  );
}
