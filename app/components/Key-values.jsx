"use client";
import { useState, useEffect } from "react";
import { gsap } from "gsap";

const KeyTitles = [
  {
    id: "01",
    title: "State-of-the-art equipment",
    subtitle:
      "Our dental practice is equipped with the latest technology and state-of-the-art equipment to ensure the highest quality of care for our patients.",
    imageUrl: "/image1.jpg",
  },
  {
    id: "02",
    title: "Experienced staff",
    subtitle:
      "Our team of experienced dentists and dental hygienists are dedicated to providing personalised and professional dental care.",
    imageUrl: "/image2.jpg",
  },
  {
    id: "03",
    title: "Comprehensive dental services",
    subtitle:
      "From routine check-ups to advanced dental procedures, we offer a wide range of comprehensive dental services to meet all of your oral health needs.",
    imageUrl: "/image3.jpg",
  },
];

const AnimatedSlideshow = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    const slideShowInterval = setInterval(() => {
      const newIndex = (activeIndex + 1) % 3; // Loop through 0, 1, 2
      setActiveIndex(newIndex);
      animateTitle(newIndex);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(slideShowInterval); // Clean up interval on component unmount
  }, [activeIndex]);

  useEffect(() => {
    preloadImages();
  }, []);

  const preloadImages = () => {
    const imagePaths = KeyTitles.map((item) => item.imageUrl);
    const images = [];
    let loadedImages = 0;

    imagePaths.forEach((src) => {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        loadedImages++;
        if (loadedImages === imagePaths.length) {
          setImagesLoaded(true);
        }
      };
      images.push(img);
    });
  };

  const animateTitle = (index) => {
    const titles = document.querySelectorAll(".title-item");
    const image = document.querySelector(".image-container img");
    const activeTitle = titles[index];

    const tl = gsap.timeline();

    tl.to(titles, { color: "#ccc", duration: 0.5, ease: "power2.inOut" })
      .to(
        activeTitle,
        { color: "#000", duration: 0.5, ease: "power2.inOut" },
        ">-0.5"
      )

      .to(image, { opacity: 0, duration: 0.5, ease: "power2.inOut" })
      .set(image, { src: KeyTitles[index].imageUrl })
      .to(image, { opacity: 1, duration: 0.5, ease: "power2.inOut" });
  };

  const handleTitleClick = (index) => {
    setActiveIndex(index);
    animateTitle(index);
  };

  return (
    <div className="w-10/12 mx-auto">
      <div className="flex py-32 gap-12">
        <div className="w-3/5">
          <ul>
            {KeyTitles.map((item, index) => (
              <li
                key={item.id}
                className={`title-item ${
                  activeIndex === index ? "active" : ""
                }`}
                onClick={() => handleTitleClick(index)}
              >
                <h4>{item.title}</h4>
                <p className="text-sm">{item.subtitle}</p>
                {activeIndex === index && (
                  <div className="active-indicator"></div>
                )}
              </li>
            ))}
          </ul>
        </div>
        <div className="w-3/5">
          <div className="image-container">
            {imagesLoaded && (
              <img
                src={KeyTitles[activeIndex].imageUrl}
                alt={`Image ${activeIndex + 1}`}
                style={{ opacity: 1, transition: "opacity 1s ease-in-out" }}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimatedSlideshow;
