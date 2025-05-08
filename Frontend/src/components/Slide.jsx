import React, { useState } from "react";
import Slide from "../CarouselSlide/Slide";
import styles from "./Carousel.module.css";

const Slide = ({ slides }) => {
  const [slideIndex, setSlideIndex] = useState(0);

  const handlePrevSlide = () => {
    setSlideIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNextSlide = () => {
    setSlideIndex((prev) => (prev + 1) % slides.length);
  };

  return (
    <section className={`${styles.slidesWrapper} w-full`}>
      <div className={styles.slides}>
        <button
          className={`${styles.prevSlideBtn} cursor-pointer`}
          onClick={handlePrevSlide}
        >
          <svg
            width="113"
            height="122"
            viewBox="0 0 113 122"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_d_429_1959)">
              <circle cx="51.8531" cy="60.8531" r="20.8531" fill="#F49B00" />
              <path
                d="M53.998 56.2952L49.4501 60.8531L53.998 65.411L52.5979 66.8111L46.6399 60.8531L52.5979 54.8951L53.998 56.2952Z"
                fill="white"
              />
            </g>
          </svg>
        </button>

        {[...slides, ...slides, ...slides].map((slide, i) => {
          let offset = slides.length + (slideIndex - i);

          if (typeof slide === "string") {
            return (
              <Slide
                image={slide.image}
                title={slide.title}
                author={slide.author}
                year={slide.year}
                offset={offset}
                key={i}
              />
            );
          } else {
            return (
              <Slide
                image={slide.image}
                title={slide.title}
                author={slide.author}
                year={slide.year}
                offset={offset}
                key={i}
              />
            );
          }
        })}
        <button
          className={`${styles.nextSlideBtn} cursor-pointer`}
          onClick={handleNextSlide}
        >
          <svg
            width="122"
            height="122"
            viewBox="0 0 122 122"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_d_429_1955)">
              <circle cx="61.147" cy="60.8531" r="20.8531" fill="#F49B00" />
              <path
                d="M57.0161 65.411L61.5641 60.8531L57.0161 56.2952L58.4162 54.8951L64.3743 60.8531L58.4162 66.8111L57.0161 65.411Z"
                fill="white"
              />
            </g>
          </svg>
        </button>
      </div>
    </section>
  );
};

export default Slide;
