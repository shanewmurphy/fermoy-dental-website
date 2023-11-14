import Image from "next/image";
import SlideshowComponent from "./components/Slider";
import IntroSection from "./components/Intro";
import UpsSection from "./components/Usp";
import Treatments from "./components/Treatments";
import Slider from "./components/Treatment-Carousel";
import Contact from "./components/Contact";
import FAQ from "./components/FAQ";
export default function Home() {
  return (
    <div>
      <div>
        <SlideshowComponent />
      </div>
      <div>
        <IntroSection />
      </div>
      <div>
        <UpsSection />
      </div>
      <div className="lg:block md:block sm:hidden">
        <Treatments />
      </div>
      <div className="lg:hidden md:hidden sm:block">
        <Slider />
      </div>
      <div>
        <Contact />
      </div>
      <div>
        <FAQ />
      </div>
    </div>
  );
}
