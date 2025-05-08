// CurvedCarousel.jsx
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import React from 'react';

export default function CurvedCarousel() {
  const images = [
    "https://cdn.prod.website-files.com/6068671735ae6e60c1a497a3/606867de25efbebb66c27220_photo1.jpg",
    "https://cdn.prod.website-files.com/6068671735ae6e60c1a497a3/606867f21e205c04eda17081_photo2.jpg",
    "https://cdn.prod.website-files.com/6068671735ae6e60c1a497a3/606867fb25efbe5b91c272b6_photo3.jpg",
    "https://cdn.prod.website-files.com/6068671735ae6e60c1a497a3/6068680904d7b92afa7ba883_photo4.jpg",
    "https://cdn.prod.website-files.com/6068671735ae6e60c1a497a3/6068681573e52211e9e86b5f_photo5.jpg",
    "https://cdn.prod.website-files.com/6068671735ae6e60c1a497a3/606868d3b9a1850ee2de4ff6_photo6.jpg",
    "https://cdn.prod.website-files.com/6068671735ae6e60c1a497a3/606868dc16f37465c307811e_photo7.jpg",
  ];

  return (
    <section className="relative bg-white">
      {/* Top Wave */}
      <div className="w-full overflow-hidden">
        <svg
          viewBox="0 0 804 50.167"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
          preserveAspectRatio="none"
        >
          <path fill="#E9C6DD" d="M804,0v16.671c0,0-204.974,33.496-401.995,33.496C204.974,50.167,0,16.671,0,16.671V0H804z" />
        </svg>
      </div>

      {/* Carousel */}
      <div className="max-w-7xl mx-auto px-4 py-10">
        <Splide
          options={{
            type: 'loop',
            perPage: 3,
            gap: '1rem',
            autoplay: true,
            pauseOnHover: true,
            arrows: true,
            pagination: true,
            breakpoints: {
              768: { perPage: 1 },
              1024: { perPage: 2 },
            },
          }}
          aria-label="Curved Image Carousel"
        >
          {images.map((src, index) => (
            <SplideSlide key={index}>
              <img src={src} alt={`Slide ${index + 1}`} className="w-full h-auto rounded-lg" />
            </SplideSlide>
          ))}
        </Splide>
      </div>

      {/* Bottom Wave */}
      <div className="w-full overflow-hidden">
        <svg
          viewBox="0 0 804 50.167"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full rotate-180"
          preserveAspectRatio="none"
        >
          <path fill="#E9C6DD" d="M804,0v16.671c0,0-204.974,33.496-401.995,33.496C204.974,50.167,0,16.671,0,16.671V0H804z" />
        </svg>
      </div>
    </section>
  );
}
