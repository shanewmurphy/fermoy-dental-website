import Image from "next/image";
import FooterLogo from "/public/FooterLogo.svg";
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
                025-31136
              </span>
            </div>
            <div className="flex items-center">
              <button className="font-medium text-white text-xs underline">
                hello@femorydentalcentre.com
              </button>
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
          <div>
            <p className="text-xs text-white mt-2">
              <Link target="blank" href="https://shanemurphy.design">
                Made by Shane
              </Link>
            </p>
          </div>
        </div>
      </div>
      <div className="w-screen lg:hidden bg-cyan-950">
        <div className="flex flex-col py-8 px-8">
          <div className="">
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
                025-31136
              </span>
            </div>
            <div className="flex items-center">
              <span className="font-medium text-white text-sm underline">
                <a href="mailto:hello@femorydentalcentre.com">
                  hello@femorydentalcentre.com
                </a>
              </span>
            </div>
          </div>
          <div className="mt-8">
            <div className="border-t-2 border-b-2 border-cyan-800">
              <Link href="Treatments">
                <h6 className="py-2 text-white">Treatments</h6>
              </Link>
            </div>
            <div className="border-b-2 border-cyan-800">
              <Link href="About">
                <h6 className="py-2 text-white">About Us</h6>
              </Link>
            </div>
            <div className="border-b-2 border-cyan-800">
              <Link href="Contact">
                <h6 className="py-2 text-white">Contact Us</h6>
              </Link>
            </div>
          </div>
          <div className="flex justify-end mt-4">
            <Link target="blank" href="https://shanemurphy.design">
              <span className="text-xs font-medium text-white">
                Made by Shane
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
