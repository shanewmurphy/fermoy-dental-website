import Image from "next/image";
import FooterLogo from "/public/Footerlogo.svg";
import Link from "next/link";
export default function Footer() {
  return (
    <div>
      <div className="w-screen lg:block md:block sm:hidden bg-cyan-950 lg:py-12 lg:px-24 md:py-8 md:px-12 antialiased">
        <div className="flex lg:gap-16 md:gap:12 antialiased">
          <div>
            <div className="w-20 mb-1">
              <Image src={FooterLogo} alt="Logo" />
            </div>
            <h6 className="font-medium text-white">Femory Dental Centre</h6>
            <address className="text-xs text-white font-medium antialiased">
              66 Lower Patrick Street,
              <br /> Fermoy, <br /> Co Cork, <br /> Ireland.
            </address>
            <div className="mt-2 flex items-center">
              <span className="font-semibold text-white text-lg">
                025-31137
              </span>
            </div>
            <div className="flex items-center">
              <span className="font-medium text-white text-xs underline">
                hello@femorydentalcentre.com
              </span>
            </div>
          </div>
          <div className="grow">
            <div className="h-44 grid grid-cols-1 content-end">
              <div className="flex text-white justify-around">
                <div className="text-sm">
                  <Link href="Treatments">
                    <span
                      className="text-sm relative after:bg-white pb-1 after:absolute after:h-px after:w-0 after:bottom-0 
              after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer"
                    >
                      Treatments
                    </span>
                  </Link>
                </div>
                <div className="text-sm">
                  <Link href="About">
                    <span
                      className="text-sm relative after:bg-white pb-1 after:absolute after:h-px after:w-0 after:bottom-0 
              after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer"
                    >
                      About Us
                    </span>
                  </Link>
                </div>
                <div className="text-sm">
                  <Link href="About">
                    <span
                      className="text-sm relative after:bg-white pb-1 after:absolute after:h-px after:w-0 after:bottom-0 
              after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer"
                    >
                      The Team
                    </span>
                  </Link>
                </div>
                <div className="text-sm">
                  <Link href="Contact">
                    <span
                      className="text-sm relative after:bg-white pb-1 after:absolute after:h-px after:w-0 after:bottom-0 
              after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer"
                    >
                      Contact Us
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="border-b-2 mt-3"></div>
        <div className="flex justify-between mt-2">
          <div>
            <span className="text-xs text-white">{"Copyright © "}</span>
            <span className="text-xs text-white">
              {new Date().getFullYear()}
            </span>
          </div>
          <div>Made by Shane</div>
        </div>
      </div>
      <div className="w-screen lg:hidden  bg-cyan-950">AA</div>
    </div>
  );
}
