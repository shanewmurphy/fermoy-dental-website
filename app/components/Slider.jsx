"use client";

import { useEffect, useState } from "react";
import gsap from "gsap";
import Image from "next/image";
const NEXT = 1;
const PREV = -1;
import ImageOne from "/public/image1.jpg";
import ImageTwo from "/public/image2.jpg";
import ImageThree from "/public/image3.jpg";
export class Slideshow {
  DOM = {
    el: null,
    slides: null,
    slidesInner: null,
  };
  current = 0;
  slidesTotal = 0;
  isAnimating = false;
  autoPlayInterval = null;

  constructor(DOM_el) {
    this.DOM.el = DOM_el;
    this.DOM.slides = [...this.DOM.el.querySelectorAll(".slide")];
    this.DOM.slidesInner = this.DOM.slides.map((item) =>
      item.querySelector(".slide__img")
    );

    this.DOM.slides[this.current].classList.add("slide--current");

    this.slidesTotal = this.DOM.slides.length;
  }

  next() {
    this.navigate(NEXT);
  }

  prev() {
    this.navigate(PREV);
  }

  navigate(direction) {
    if (this.isAnimating) return false;
    this.isAnimating = true;

    const previous = this.current;
    this.current =
      direction === 1
        ? this.current < this.slidesTotal - 1
          ? ++this.current
          : 0
        : this.current > 0
        ? --this.current
        : this.slidesTotal - 1;

    const currentSlide = this.DOM.slides[previous];
    const currentInner = this.DOM.slidesInner[previous];
    const upcomingSlide = this.DOM.slides[this.current];
    const upcomingInner = this.DOM.slidesInner[this.current];

    gsap
      .timeline({
        defaults: {
          duration: 1.5,
          ease: "power4.inOut",
        },
        onStart: () => {
          this.DOM.slides[this.current].classList.add("slide--current");
        },
        onComplete: () => {
          this.DOM.slides[previous].classList.remove("slide--current");
          this.isAnimating = false;
        },
      })
      .addLabel("start", 0)
      .to(
        currentSlide,
        {
          yPercent: -direction * 100,
        },
        "start"
      )
      .to(
        currentInner,
        {
          yPercent: direction * 30,
          startAt: {
            transformOrigin: direction === NEXT ? "0% 100%" : "100% 0%",
            rotation: 0,
          },
          rotation: -direction * 10,
          scaleY: 2.5,
        },
        "start"
      )
      .to(
        upcomingSlide,
        {
          startAt: {
            yPercent: direction * 100,
          },
          yPercent: 0,
        },
        "start"
      )
      .to(
        upcomingInner,
        {
          startAt: {
            transformOrigin: direction === NEXT ? "0% 0%" : "100% 100%",
            yPercent: -direction * 30,
            scaleY: 2.5,
            rotation: -direction * 10,
          },
          yPercent: 0,
          scaleY: 1,
          rotation: 0,
        },
        "start"
      );
  }

  startAutoPlay(interval) {
    this.autoPlayInterval = setInterval(() => {
      this.next();
    }, interval);
  }

  stopAutoPlay() {
    clearInterval(this.autoPlayInterval);
  }
}

const SlideshowComponent = () => {
  const [slideshow, setSlideshow] = useState(null);

  useEffect(() => {
    const slides = document.querySelector(".slides");
    const newSlideshow = new Slideshow(slides);

    if (newSlideshow) {
      setSlideshow(newSlideshow);
      newSlideshow.startAutoPlay(4000); // Start auto play every 5 seconds
    }

    return () => {
      newSlideshow && newSlideshow.stopAutoPlay(); // Clean up on component unmount
    };
  }, []);

  return (
    <>
      <div className="relative flex items-center justify-center antialiased">
        <div className="slides">
          <div className="slide">
            <div className="slide__img relative">
              <Image
                src={ImageOne}
                priority={true}
                quality={75}
                alt="Slide 1"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-slate-800/70  to-slate-800/10"></div>
            </div>
          </div>
          <div className="slide">
            <div className="slide__img relative">
              <Image
                src={ImageTwo}
                priority={true}
                quality={75}
                alt="Slide 1"
              />
              {/* <div className="absolute inset-0 overlay-gradient bg-slate-800 opacity-50"></div> */}
              <div className="absolute inset-0 bg-gradient-to-b from-slate-800/70  to-slate-800/10"></div>
            </div>
          </div>
          <div className="slide">
            <div className="slide__img relative">
              <Image
                src={ImageThree}
                priority={true}
                quality={75}
                alt="Slide 1"
              />
              {/* <div className="absolute inset-0 overlay-gradient bg-slate-800 opacity-50"></div> */}
              <div className="absolute inset-0 bg-gradient-to-b from-slate-800/70  to-slate-800/10"></div>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 flex items-center justify-center antialiased">
          <div className="text-white font-bold text-center">
            <h1 className="mb-2">Fermoy Dental Practice</h1>
            <h4 className="font-medium">
              Your Smile Starts Here Expert Dental <br /> Care You Can Trust
            </h4>
            {/* <div className="mt-4">
              <button className="bg-btn py-3 px-8 text-lg rounded-md">
                Call Us 025 25457
              </button>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default SlideshowComponent;
