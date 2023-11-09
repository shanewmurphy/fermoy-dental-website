"use client";
import Image from "next/image";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
// import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
const CarouselData = [
  {
    id: "01",
    imgUrl: "/carousel/img_01.jpg",
    title: "Dental Hygiene",
  },
  {
    id: "02",
    imgUrl: "/carousel/img_02.jpg",
    title: "Dental fillings",
  },
  {
    id: "03",
    imgUrl: "/carousel/img_03.jpg",
    title: "Dental Crowns",
  },
];

// Import Swiper styles
import "swiper/css";

export default function Slider() {
  return (
    <>
      <div className="w-screen bg-deepgreen py-16">
        <div className="lg:w-10/12 xmd:w-11/12 md:w-11/12 sm:w-10/12 mx-auto">
          <Swiper
            slidesPerView={"auto"}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            <div>
              {CarouselData.map((CarouselData) => (
                <SwiperSlide>
                  <div>
                    <Image
                      className="rounded-lg"
                      src={CarouselData.imgUrl}
                      width={400}
                      height={600}
                    />
                    <div className="absolute inset-0 bg-slate-800/50 rounded-lg flex items-center justify-center">
                      <h3 className="text-white">{CarouselData.title}</h3>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </div>
          </Swiper>
        </div>
      </div>
    </>
  );
}
