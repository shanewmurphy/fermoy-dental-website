import Image from "next/image";
import HeroPageImg from "/public/HeroPageImg.jpg";
export default function HeroPage() {
  return (
    <div>
      <div className="w-screen">
        <Image
          className="object-cover w-screen"
          src={HeroPageImg}
          alt="Fermoy Dental Practice"
        />
      </div>
    </div>
  );
}
