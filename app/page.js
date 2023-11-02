import Image from "next/image";
import SlideshowComponent from "./components/Slider";
import IntroSection from "./components/Intro";
export default function Home() {
  return (
    <div>
      <div>
        <SlideshowComponent />
      </div>
      <div>
        <IntroSection />
      </div>
    </div>
  );
}
