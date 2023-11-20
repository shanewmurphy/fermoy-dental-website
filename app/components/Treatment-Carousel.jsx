"use client";
import Image from "next/image";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
// import "swiper/css/pagination";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
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
  {
    id: "04",
    imgUrl: "/carousel/img_04.jpg",
    title: "Dental Bridges",
  },
];

// Import Swiper styles
import "swiper/css";

export default function Slider() {
  const swiperRef = useRef();
  return (
    <>
      <div className="w-screen bg-deepgreen py-20">
        <div className="lg:w-10/12 xmd:w-11/12 md:w-11/12 sm:w-10/12 mx-auto">
          <div>
            <h2 className="font-bold text-cyan-950 mb-2">Treatments</h2>
          </div>
          <Swiper
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            slidesPerView={"auto"}
            spaceBetween={30}
            grabCursor={true}
            autoplay={{
              delay: 3500,
              disableOnInteraction: true,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
          >
            <div>
              {CarouselData.map((CarouselData) => (
                <SwiperSlide key={CarouselData.id}>
                  <div>
                    <Image
                      className="rounded-lg"
                      src={CarouselData.imgUrl}
                      width={400}
                      height={500}
                      alt="Dental Treatments"
                      priority
                    />
                    <div className="absolute inset-0 bg-slate-800/50 rounded-lg flex items-center justify-center">
                      <h3 className="text-white font-semibold">
                        {CarouselData.title}
                      </h3>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </div>
          </Swiper>
          <div className="flex justify-end mt-6">
            <div className="pr-3">
              <button onClick={() => swiperRef.current.slidePrev()}>
                <ArrowLeft />
              </button>
            </div>
            <div>
              <button onClick={() => swiperRef.current.slideNext()}>
                <ArrowRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function ArrowRight() {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="20" cy="20" r="20" fill="white" />
      <path
        d="M21.7403 27.8127L28.8117 20.4718C28.8714 20.4099 28.9187 20.3363 28.9511 20.2554C28.9834 20.1744 29 20.0877 29 20C29 19.9124 28.9834 19.8256 28.9511 19.7447C28.9187 19.6637 28.8714 19.5902 28.8117 19.5282L21.7403 12.1873C21.619 12.0658 21.4566 11.9985 21.2881 12C21.1195 12.0015 20.9583 12.0717 20.8391 12.1955C20.7199 12.3192 20.6523 12.4866 20.6508 12.6616C20.6494 12.8365 20.7141 13.0051 20.8313 13.131L26.8053 19.3326H11.6429C11.4724 19.3326 11.3088 19.403 11.1883 19.5281C11.0677 19.6533 11 19.823 11 20C11 20.177 11.0677 20.3467 11.1883 20.4719C11.3088 20.597 11.4724 20.6674 11.6429 20.6674H26.8053L20.8312 26.869C20.7141 26.9949 20.6493 27.1635 20.6508 27.3384C20.6523 27.5134 20.7199 27.6808 20.8391 27.8045C20.9583 27.9283 21.1195 27.9985 21.2881 28C21.4566 28.0015 21.619 27.9343 21.7403 27.8127Z"
        fill="#565555"
      />
    </svg>
  );
}
function ArrowLeft() {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="20" cy="20" r="20" fill="white" />
      <path
        d="M18.2597 12.1873L11.1883 19.5282C11.1286 19.5901 11.0813 19.6637 11.0489 19.7446C11.0166 19.8256 11 19.9123 11 20C11 20.0876 11.0166 20.1744 11.0489 20.2553C11.0813 20.3363 11.1286 20.4098 11.1883 20.4718L18.2597 27.8127C18.381 27.9342 18.5434 28.0015 18.7119 28C18.8805 27.9985 19.0417 27.9283 19.1609 27.8045C19.2801 27.6808 19.3477 27.5134 19.3492 27.3384C19.3506 27.1635 19.2859 26.9949 19.1687 26.869L13.1947 20.6674L28.3571 20.6674C28.5276 20.6674 28.6912 20.597 28.8117 20.4719C28.9323 20.3467 29 20.177 29 20C29 19.823 28.9323 19.6533 28.8117 19.5281C28.6912 19.403 28.5276 19.3326 28.3571 19.3326L13.1947 19.3326L19.1688 13.131C19.2859 13.0051 19.3507 12.8365 19.3492 12.6616C19.3477 12.4866 19.2801 12.3192 19.1609 12.1955C19.0417 12.0717 18.8805 12.0015 18.7119 12C18.5434 11.9985 18.381 12.0657 18.2597 12.1873Z"
        fill="#565555"
      />
    </svg>
  );
}
