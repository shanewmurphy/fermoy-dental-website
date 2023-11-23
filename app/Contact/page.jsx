import HeroPage from "../components/Hero-page";
import Image from "next/image";
import EmailIcon from "/public/EmailIcon.svg";
import PhoneIcon from "/public/phone.svg";
import SignImg from "/public/Sign.webp";
import FAQ from "../components/FAQ";
import TestimonalCarousel from "../components/Testimonials";

export default function ContactPage() {
  return (
    <div className="w-screen">
      <HeroPage />
      <div className="w-screen bg-lightBrown py-16 antialiased">
        <div className="w-10/12 mx-auto text-cyan-950">
          <div>
            <h2 className="text-center font-bold mb-1">Contact Information</h2>
            <h5 className="text-center">
              For any inquiries, please reach out to us.
            </h5>
          </div>
          <div className="grid grid-cols-2 gap-8 mt-16">
            <div className="p-8">
              <h4 className="font-bold mb-1">Femory Dental Centre</h4>
              <address className="text-sm font-medium">
                66 Lower Patrick Street,
                <br /> Fermoy, <br /> Co Cork, <br /> Ireland.
              </address>
              <div className="mt-8 flex items-center">
                <Image src={PhoneIcon} alt="Phone Icon" />
                <span className="pl-2 font-semibold text-xl">025-31137</span>
              </div>
              <div className="mt-4 flex items-center">
                <Image src={EmailIcon} alt="Email Icon" />
                <span className="pl-2 font-semibold text-sm underline">
                  hello@femorydentalcentre.com
                </span>
              </div>
            </div>
            <div className="p-8">
              <Image
                className="rounded-xl"
                src={SignImg}
                alt="Femory Dental Centre"
              />
            </div>
          </div>
        </div>
      </div>
      <div>
        <FAQ />
      </div>
    </div>
  );
}