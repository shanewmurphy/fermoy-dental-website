import Image from "next/image";
import SlideshowComponent from "./components/Slider";
import IntroSection from "./components/Intro";
import UpsSection from "./components/Usp";
import Treatments from "./components/Treatments";
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
      <div>
        <Treatments />
      </div>
    </div>
  );
}
