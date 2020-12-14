import Carousel from "../components/Carousel";
import Reviews from "../components/Reviews";
import About from "../components/About";
import Members from "../components/Members";
import Contact from "../components/Contact";
import LayoutMain from "../components/LayoutMain";

export default function Home() {
  return (
    <LayoutMain>
      <Carousel>
        <div className="text-title">Assalomu alaykum!</div>
        <div className="text-body">
          Mehmon24.uz loyihasining rasmiy web-saytiga xush kelibsiz!
        </div>
      </Carousel>
      <About />
      <Reviews />
      <Members />
      <Contact />
    </LayoutMain>
  );
}
