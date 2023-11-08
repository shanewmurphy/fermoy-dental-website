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
        <div>
          <h2 className="font-extrabold text-cyan-950 mb-3 text-center">
            Featured Treatments
          </h2>
        </div>
        <div className="grid lg:grid-cols-2 md:grid-row gap-16 antialiased">
          <div className="relative group">
            <figure class="effect-ruby">
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
            <figure class="effect-ruby">
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
            <figure class="effect-ruby">
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
            <figure class="effect-ruby">
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
