import Image from "next/image";
import SignImg from "/public/Sign.webp";

export default function Contact() {
  return (
    <div>
      <div className="w-screen lg:py-32 md:py-16 sm:py-24 bg-lightBrown antialiased">
        <div className="lg:w-10/12 md:w-11/12 xmd:w-11/12 sm:w-10/12 mx-auto">
          <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-flow-row content-center items-center text-cyan-950">
            <div className="rounded-lg lg:p-12 md:p-4">
              <Image
                className="rounded-lg"
                src={SignImg}
                alt="Fermoy Dental Practice"
              />
            </div>
            <div className="">
              <h3 className="font-bold text-cyan-950 mb-2 sm:mt-4">
                Book an Appointment Today!
              </h3>
              <p className="font-semibold text-sm mb-6">
                Experience top-quality dental care. Our friendly team is ready
                to help you achieve a healthy and beautiful smile.
              </p>
              <h4 className="font-bold mt-2">Call Us 025 31136</h4>
              <p className="font-semibold text-sm mt-2 sm:mt-1">
                Mon - Fri 09:30am - 17:30pm
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
