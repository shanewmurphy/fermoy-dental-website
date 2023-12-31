"use client";
import Image from "next/image";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import GoogleLogo from "/public/GoogleLogo.svg";
import "swiper/css";
// import "swiper/css/pagination";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const TestimonialsData = [
  {
    id: "01",
    Name: "Andrew Finn",
    Review:
      "I used to be terrified of the dentist, but Fermoy Dental has completely changed my mind. She is so gentle and patient, and she always makes me feel comfortable",
    StarRatingUrl: "./StarFive.svg",
  },
  {
    id: "02",
    Name: "Orla O' Connor",
    Review:
      "Excellent service from Fermoy Dental & all the team, they really gone above & beyond in helping put me at ease & is extremely invested in her patients",
    StarRatingUrl: "./StarFive.svg",
  },
  {
    id: "03",
    Name: "Matt O' Sullivan",
    Review:
      "I used to be terrified by dentists and didn't want to visit one, until I had no choice, after first appointment I have no fear anymore, it was nice and easy",
    StarRatingUrl: "./StarFour.svg",
  },
  {
    id: "04",
    Name: "Anita Gleeson",
    Review:
      "Fermoy Dental has been fantastic with my children, puts them at ease & they have no fears going in",
    StarRatingUrl: "./StarFive.svg",
  },
  {
    id: "05",
    Name: "Nathan Crowley",
    Review:
      "Excellent dentist and extremely professional. Very happy with the treatment I received. Lovely atmosphere in there. Nurses are very helpful and extremely kind. Would highly recommend this practices",
    StarRatingUrl: "./StarFive.svg",
  },
  {
    id: "06",
    Name: "G Conroy",
    Review:
      "Very kind and caring dentist who always puts his patients first. I would highly recommend him to anyone looking for a great dentist.",
    StarRatingUrl: "./StarFour.svg",
  },
];

// Import Swiper styles
import "swiper/css";

export default function TestimonalCarousel() {
  const swiperRef = useRef();
  return (
    <>
      <div>
        <div className="w-screen lg:block md:block sm:hidden bg-deepgreen py-20">
          <div className="lg:w-10/12 xmd:w-11/12 md:w-11/12 sm:w-10/12 mx-auto">
            <div>
              <h2 className="font-bold text-center text-cyan-950 mb-6">
                What Our Customers Say
              </h2>
            </div>
            <Swiper
              onSwiper={(swiper) => {
                swiperRef.current = swiper;
              }}
              slidesPerView={"3"}
              spaceBetween={30}
              grabCursor={true}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Pagination, Navigation]}
              className="mySwiper"
            >
              <div>
                {TestimonialsData.map((TestimonialsData) => (
                  <SwiperSlide key={TestimonialsData.id}>
                    <div className="py-8 px-8 bg-white rounded-xl h-72 testimonal_card">
                      <p className="text-sm font-medium h-36 text-cyan-900">
                        &quot;{TestimonialsData.Review}&quot;
                      </p>
                      <h6 className="mt-6 font-semibold text-cyan-950">
                        {TestimonialsData.Name}
                      </h6>
                      <div className="flex items-center">
                        <Image src={GoogleLogo} alt="Google Ratings" />
                        <span>
                          <Image
                            src={TestimonialsData.StarRatingUrl}
                            className="pl-1"
                            width={60}
                            height={11}
                            alt="Google Ratings"
                          />
                        </span>
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
      </div>
      <div></div>
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
