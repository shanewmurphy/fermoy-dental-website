import Image from "next/image";
import SignImg from "/public/Sign.webp";

export default function Contact() {
  return (
    <div>
      <div className="w-screen lg:py-32 md:py-24 sm:py-24 bg-lightBrown antialiased">
        <div className="lg:w-10/12 xmd:w-11/12 md:w-11/12 sm:w-10/12 mx-auto ">
          <div className="grid lg:grid-cols-2 md:grid-col-2 sm:grid-flow-row content-center items-center text-cyan-950">
            <div className="rounded-lg lg:p-12 md:p-12">
              <Image
                className="rounded-lg"
                src={SignImg}
                alt="Fermoy Dental Practice"
              />
            </div>

            <div>
              <h2 className="font-bold text-cyan-950 mb-2 sm:mt-4">
                Book an Appointment Today!
              </h2>
              <p className="font-semibold text-sm mb-6">
                Experience top-quality dental care in Fermoy, Co Cork, Ireland.
                Our friendly team is ready to help you achieve a healthy and
                beautiful smile.
              </p>
              <p className="font-bold">Mon - Fri 09:30am - 17:30pm</p>
              <h3 className="font-bold mt-2">Call Us 025 31136</h3>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="w-screen lg:py-32 md:py-24 sm:py-24 bg-lightBrown antialiased">
        <div className="lg:w-10/12 xmd:w-11/12 md:w-11/12 sm:w-11/12 mx-auto lg:p-16 md:p-8 sm:p-6 rounded-xl">
          <h2 className="text-cyan-950 font-extrabold text-center mb-2 antialiased">
            Book an Appointment Today!
          </h2>
          <p className="text-sm font-medium text-cyan-950 text-center lg:w-8/12 mb-4 mx-auto">
            Experience top-quality dental care in Fermoy, Co Cork, Ireland. Our
            friendly team is ready to help you achieve a healthy and beautiful
            smile.
          </p>
          <h3 className="text-center text-cyan-950 font-extrabold antialiased">
            Call Us 025 -454547
          </h3>
        </div>
      </div> */}
    </div>
  );
}
