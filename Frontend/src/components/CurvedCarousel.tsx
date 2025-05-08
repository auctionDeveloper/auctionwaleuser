import { useState } from "react";

const images = [
  "https://cdn.prod.website-files.com/6068671735ae6e60c1a497a3/606867de25efbebb66c27220_photo1.jpg",
  "https://cdn.prod.website-files.com/6068671735ae6e60c1a497a3/606867f21e205c04eda17081_photo2.jpg",
  "https://cdn.prod.website-files.com/6068671735ae6e60c1a497a3/606867fb25efbe5b91c272b6_photo3.jpg",
  "https://cdn.prod.website-files.com/6068671735ae6e60c1a497a3/6068680904d7b92afa7ba883_photo4.jpg",
  "https://cdn.prod.website-files.com/6068671735ae6e60c1a497a3/6068681573e52211e9e86b5f_photo5.jpg",
];

export default function CurvedCarousel() {
  const [index, setIndex] = useState(0);

  const visibleItems = 5;
  const total = images.length;

  const next = () => setIndex((prev) => (prev + 1) % total);
  const prev = () => setIndex((prev) => (prev - 1 + total) % total);

  const getVisibleImages = () => {
    const result = [];
    for (let i = 0; i < visibleItems; i++) {
      result.push(images[(index + i) % total]);
    }
    return result;
  };

  return (
    <div className="relative w-full max-w-6xl mx-auto overflow-hidden">
      {/* Top & Bottom Oval Masks */}
      <div className="absolute top-0 left-0 w-full h-10 bg-white z-10 rounded-b-full"></div>
      <div className="absolute bottom-0 left-0 w-full h-10 bg-white z-10 rounded-t-full"></div>

      {/* Arrows + Images */}
      <div className="flex items-center justify-center gap-4 py-10 relative z-0">
        <button onClick={prev} className="z-20 bg-white shadow-md w-10 h-10 rounded-full flex items-center justify-center text-xl font-bold">
          ‹
        </button>

        <div className="flex gap-4 transition-all duration-500">
          {getVisibleImages().map((src, i) => (
            <div
              key={i}
              className={`rounded-xl overflow-hidden transition-all duration-300 shadow-lg
                ${i === 0 || i === 4 ? "w-[10%] opacity-60 scale-90" : "w-[30%]"}
                ${i === 2 ? "z-10 scale-105" : "z-0"}
              `}
            >
              <img src={src} alt={`Slide ${i}`} className="w-full h-64 object-cover" />
            </div>
          ))}
        </div>

        <button onClick={next} className="z-20 bg-white shadow-md w-10 h-10 rounded-full flex items-center justify-center text-xl font-bold">
          ›
        </button>
      </div>
    </div>
  );
}
