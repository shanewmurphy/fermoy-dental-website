import HeroPage from "../components/Hero-page";
import Image from "next/image";
import DentistMale from "/public/DentistMale.png";
import DentistFemale from "/public/FemaleDentist.png";
import NurseA from "/public/NurseA.png";
import NurseB from "/public/NurseB.png";
import NurseC from "/public/NurseC.png";
import IconA from "/public/IconA.svg";
import IconB from "/public/IconB.svg";
import IconC from "/public/IconC.svg";

import Contact from "../components/Contact";
import FAQ from "../components/FAQ";
export default function AboutPage() {
  return (
    <div className="w-screen bg-lightBrown">
      <HeroPage />
      <div className="w-10/12 mx-auto py-24 text-cyan-950">
        <div className="lg:w-8/12 md:w-10/12 mx-auto">
          <h2 className="font-bold text-center mb-2">
            Providing Quality Dental Care for Over 20 Years
          </h2>
          <p className="text-sm font-medium text-center">
            Our dental practice in Fermoy, Co Cork, Ireland has a rich history.
            Founded in 1998, we have grown to become one of the leading dental
            practices in the area. With a focus on providing exceptional care
            and utilising the latest technology, we are dedicated to helping our
            patients achieve and maintain healthy smiles.
          </p>
        </div>
      </div>
      <div className="w-10/12 mx-auto py-24">
        <div className="lg:w-8/12 mx-auto text-cyan-950">
          <h3 className="text-center font-bold mb-8">
            We offer comprehensive dental services for patients in Fermoy, Co
            Cork, Ireland.
          </h3>
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-rows lg:gap-16 md:gap-8 sm:gap-6">
          <div className="text-center text-cyan-950">
            <div className="w-40 h-16 mx-auto">
              <Image className="mx-auto" src={IconA} alt="Icon Graphic" />
            </div>
            <h6 className="font-semibold mb-1">
              Our team provides personalised dental care to meet your needs
            </h6>
            <p className="text-sm">
              From routine cleanings to advanced procedures, we have you
              covered.
            </p>
          </div>
          <div className="text-center text-cyan-950">
            <div className="w-40 h-16 mx-auto">
              <Image className="mx-auto" src={IconC} alt="Icon Graphic" />
            </div>
            <h6 className="font-semibold mb-1">
              Achieve a healthy smile with our cosmetic dentistry services
            </h6>
            <p className="text-sm">
              Our skilled dentists use the latest techniques to enhance your
              smile.
            </p>
          </div>
          <div className="text-center text-cyan-950">
            <div className="w-40 h-16 mx-auto">
              <Image className="mx-auto" src={IconB} alt="Icon Graphic" />
            </div>
            <h6 className="font-semibold mb-1">
              Restore your oral health with our restorative dentistry options
            </h6>
            <p className="text-sm font-normal">
              We offer solutions for missing teeth, damaged teeth, and more.
            </p>
          </div>
        </div>
      </div>
      <div className="w-7/12 mx-auto py-8">
        <h3 className="text-center font-semibold mb-8 text-cyan-950">
          Meet Our Team
        </h3>
        <div className="grid lg:grid-cols-2 md:grid-cols-2 gap-12">
          <div className="text-center text-cyan-950">
            <div className="w-40 mx-auto">
              <Image src={DentistMale} alt="Dentist Profile Picture" />
            </div>
            <h5 className="font-semibold mt-2">
              Dentist <small className="text-xs">B.D.S</small>
            </h5>
            <p className="text-sm font-medium">
              Dr. John Smith is a highly experienced dentist with expertise in
              cosmetic dentistry.
            </p>
          </div>
          <div className="text-center text-cyan-950">
            <div className="w-40 mx-auto">
              <Image src={DentistFemale} alt="Dentist Profile Picture" />
            </div>
            <h5 className="font-semibold mt-2">
              Dentist <small className="text-xs">B.D.S</small>
            </h5>
            <p className="text-sm font-medium">
              Dr. Sarah Johnson is a skilled hygienist who specialises in
              preventive dental care.
            </p>
          </div>
        </div>
      </div>
      <div className="w-9/12 mx-auto py-8">
        <div className="grid lg:grid-cols-3 md:grid-cols-3 gap-12">
          <div className="text-center text-cyan-950">
            <div className="w-40 mx-auto">
              <Image src={NurseA} alt="Nurse Profile Picture" />
            </div>
            <h5 className="font-semibold mt-2">Dental Nurse</h5>
            <p className="text-sm font-medium">Olivia O’Neill</p>
          </div>
          <div className="text-center text-cyan-950">
            <div className="w-40 mx-auto">
              <Image src={NurseB} alt="Nurse Profile Picture" />
            </div>
            <h5 className="font-semibold mt-2">Dental Nurse</h5>
            <p className="text-sm font-medium">Aisling O’Connor</p>
          </div>
          <div className="text-center text-cyan-950">
            <div className="w-40 mx-auto">
              <Image src={NurseC} alt="Nurse Profile Picture" />
            </div>
            <h5 className="font-semibold mt-2">Dental Nurse</h5>
            <p className="text-sm font-medium">Saoirse Ryan</p>
          </div>
        </div>
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
