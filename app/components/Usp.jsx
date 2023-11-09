import Image from "next/image";
import USP from "/public/usp.jpg";
import USPB from "/public/USPB.jpg";
export default function UspSection() {
  return (
    <div className="w-screen bg-lightBrown">
      <div className="lg:w-10/12 xmd:w-11/12 md:w-11/12 sm:w-10/12 lg:py-32 md:py-24 sm:py-16 mx-auto antialiased">
        <div className="flex lg:flex-row xmd:flex-row md:flex-col sm:flex-col lg:gap-24 md:gap-20 sm:gap-6">
          <div className="basis-6/12">
            <div>
              <h2 className="font-extrabold text-cyan-950 mb-4">
                We are committed to helping our patients
              </h2>
            </div>
            <h5 className="text-cyan-950 font-bold">
              State-of-the-art equipment
            </h5>
            <p className="text-sm mb-3 text-cyan-950 font-medium">
              Our dental practice is equipped with the latest technology and
              state-of-the-art equipment to ensure the highest quality of care
              for our patients.
            </p>
            <h5 className="font-bold text-cyan-950">Experienced staff</h5>
            <p className="text-sm font-medium mb-3">
              Our team of experienced dentists and dental hygienists are
              dedicated to providing personalised and professional dental care.
            </p>
            <h5 className="font-bold text-cyan-950">
              Comprehensive dental services
            </h5>
            <p className="text-sm font-medium mb-3">
              From routine check-ups to advanced dental procedures, we offer a
              wide range of comprehensive dental services to meet all of your
              oral health needs.
            </p>
          </div>
          <div className="basis-6/12">
            <div>
              <Image className="rounded-lg" src={USPB} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
