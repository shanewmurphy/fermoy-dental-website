import Image from "next/image";
import USP from "/public/usp.jpg";
import USPB from "/public/USPB.jpg";
export default function UspSection() {
  return (
    <div className="w-screen bg-lightBrown">
      <div className="w-10/12 py-32 mx-auto antialiased">
        <div className="flex lg:flex-row md:flex-row sm:flex-col lg:gap-24 md:gap-20 sm:gap-6">
          <div className="basis-6/12">
            <h4 className="text-cyan-950 font-bold">
              State-of-the-art equipment
            </h4>
            <p className="text-xs mb-6 text-cyan-950 font-medium">
              Our dental practice is equipped with the latest technology and
              state-of-the-art equipment to ensure the highest quality of care
              for our patients.
            </p>
            <h4 className="font-bold text-cyan-950">Experienced staff</h4>
            <p className="text-xs font-medium mb-6">
              Our team of experienced dentists and dental hygienists are
              dedicated to providing personalised and professional dental care.
            </p>
            <h4 className="font-bold text-cyan-950">
              Comprehensive dental services
            </h4>
            <p className="text-xs font-medium mb-6">
              From routine check-ups to advanced dental procedures, we offer a
              wide range of comprehensive dental services to meet all of your
              oral health needs.
            </p>
          </div>
          <div className="basis-6/12">
            <div>
              <Image className="rounded-lg" src={USP} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
