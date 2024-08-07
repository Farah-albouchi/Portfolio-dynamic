import DrawerAppBar from "../components/Navbar";
import HomePart from "../components/home";
import Logos from "../components/Logos";
import AboutMe from "../components/AboutMe";
import Services from "../components/Services";
import Achievement from "../components/Achievement";
import Portfolio from "../components/Portfolio";
import Testimonials from "../components/Testimonials";
import ContactMe from "../components/ContactMe";
import FooterPart from "../components/footer";

export default function Home() {
  return (
    <div>
      <DrawerAppBar />
      <HomePart />
      <Logos />
      <AboutMe />
      <Services />
      <Achievement />
      <Portfolio />
      <Testimonials />
      <ContactMe />
      <FooterPart />
    </div>
  );
}
