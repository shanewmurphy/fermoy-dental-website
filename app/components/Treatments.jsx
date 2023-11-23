"use client";
"use client";
import Image from "next/image";

import HygieneImg from "/public/Hygiene.jpg";
import FillingsImg from "/public/Fillings.jpg";
import DentalCrownsImg from "/public/DentalCrowns.jpg";
import BridgesImg from "/public/bridges.jpg";

const Treatments = () => {
  return (
    <div className="w-screen bg-deepgreen">
      <div className="w-10/12 py-32 mx-auto">
        <div className="flex justify-between mb-4">
          <div>
            <h2 className="font-extrabold text-cyan-950 mb-3">
              Dental Treatments
            </h2>
          </div>
          <div>
            <button
              className="text-red hover:before:bg-redborder-red-500 relative h-[50px] w-40 
            overflow-hidden border border-cyan-950 rounded-md bg-white font-semibold px-3 text-cyan-950
            transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 
            before:h-full before:w-0 before:bg-cyan-950 before:transition-all before:duration-500
             hover:text-white hover:before:left-0 hover:before:w-full"
            >
              <span className="relative z-10">View All</span>
            </button>
          </div>
        </div>
        <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2 gap-16 antialiased">
          <div className="relative group">
            <figure className="effect-ruby">
              <Image
                src={HygieneImg}
                alt="img02"
                className="object-cover w-full h-full"
              />
              <figcaption>
                <h2 className="font-semibold">Dental hygiene</h2>
                <p>
                  We specialise in helping patients with dental hygiene and
                  making their smiles look great
                </p>
                <p>Link to Page</p>
              </figcaption>
            </figure>
          </div>
          <div className="relative group">
            <figure className="effect-ruby">
              <Image
                src={FillingsImg}
                alt="img02"
                className="object-cover w-full h-full"
              />
              <figcaption>
                <h2 className="font-semibold">Fillings</h2>
                <p>
                  We specialise in helping patients with dental fillings and
                  making their smiles look great.
                </p>
                <p>Link to Page</p>
              </figcaption>
            </figure>
          </div>
          <div className="relative group">
            <figure className="effect-ruby">
              <Image
                src={DentalCrownsImg}
                alt="img02"
                className="object-cover w-full h-full"
              />
              <figcaption>
                <h2 className="font-semibold">Dental Crowns</h2>
                <p>
                  We specialise in helping patients with dental fillings and
                  making their smiles look great.
                </p>
                <p>Link to Page</p>
              </figcaption>
            </figure>
          </div>
          <div className="relative group">
            <figure className="effect-ruby">
              <Image
                src={BridgesImg}
                alt="img02"
                className="object-cover w-full h-full"
              />
              <figcaption>
                <h2 className="font-semibold">Dental Bridges</h2>
                <p>
                  We specialise in helping patients with dental fillings and
                  making their smiles look great.
                </p>
                <p>Link to Page</p>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Treatments;
