"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import HygieneImg from "/public/Hygiene.jpg";
import FillingsImg from "/public/Fillings.jpg";

const Home = () => {
  const groupRefs = useRef([]);

  useEffect(() => {
    const images = groupRefs.current;

    images.forEach((image) => {
      const heading = image.querySelector(".heading");
      const paragraph = image.querySelector(".paragraph");
      const icon = image.querySelector(".icon");

      gsap.set([paragraph, icon], { y: 0, opacity: 0 });

      image.addEventListener("mouseenter", (e) => {
        gsap.to([paragraph, icon], {
          y: 0,
          opacity: 1,
          duration: 0.9,
          stagger: 0.3,
          ease: "power4.inOut",
        });
      });

      image.addEventListener("mouseleave", (e) => {
        gsap.to([paragraph, icon], { y: 80, opacity: 0, duration: 0.5 });
      });
    });
  }, []);

  return (
    <div>
      <div className="w-10/12 py-32 mx-auto">
        <div className="grid lg:grid-cols-2 md:grid-row gap-16 antialiased">
          <div
            className="relative group"
            ref={(el) => (groupRefs.current[0] = el)}
          >
            <Image
              src={HygieneImg}
              alt="Image 1"
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-40 opacity-100 transition-opacity duration-300 text-white text-center font-bold">
              <h3 className="heading font-medium mb-2">Dental Hygiene</h3>
              <p className="paragraph font-medium px-8">
                We specialize in helping patients with dental hygiene and making
                their smiles look great
              </p>
              <div className="icon">Link Icon</div>
            </div>
          </div>
          <div
            className="relative group"
            ref={(el) => (groupRefs.current[1] = el)}
          >
            <Image
              src={FillingsImg}
              alt="Image 2"
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-40 opacity-100 transition-opacity duration-300 text-white text-center font-bold">
              <h3 className="heading font-medium mb-2">Dental Fillings</h3>
              <p className="paragraph">Additional Text</p>
              <div className="icon">Link Icon</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
