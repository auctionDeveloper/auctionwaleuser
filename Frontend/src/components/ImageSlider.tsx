import { useState, useEffect } from "react";
import im1  from "@/assets/1.jpg";
import im2 from "@/assets/2.jpg";
import im3 from "@/assets/3.jpg";
import im4 from "@/assets/4.jpg";
import im5 from "@/assets/5.jpg";


const images = [
 im1,
 im2,
 im3,
 im4,
];

export default function ImageSlider() {
  const [start, setStart] = useState(0);
  const [perPage, setPerPage] = useState(3);

  useEffect(() => {
    const updatePerPage = () => {
      const width = window.innerWidth;
      setPerPage(width < 768 ? 1 : width < 1024 ? 2 : 3);
    };

    updatePerPage();
    window.addEventListener("resize", updatePerPage);
    return () => window.removeEventListener("resize", updatePerPage);
  }, []);

  const prev = () => {
    setStart((prev) => (prev - perPage + images.length) % images.length);
  };

  const next = () => {
    setStart((prev) => (prev + perPage) % images.length);
  };

  const visibleImages = Array.from(
    { length: perPage },
    (_, i) => images[(start + i) % images.length]
  );

  return (
    <div className="relative w-full max-w-6xl mx-auto px-4">
      {/* Left arrow */}
      <button
        onClick={prev}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-200 hover:bg-gray-300 text-xl rounded-full w-10 h-10 flex items-center justify-center shadow-md z-10"
      >
        ‹
      </button>

      {/* Right arrow */}
      <button
        onClick={next}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-200 hover:bg-gray-300 text-xl rounded-full w-10 h-10 flex items-center justify-center shadow-md z-10"
      >
        ›
      </button>

      {/* Images grid */}
      <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 transition-all">
        {visibleImages.map((src, idx) => (
          <div key={idx} className="overflow-hidden rounded-xl shadow-lg">
            <img
              src={src}
              alt={`Slide ${idx + 1}`}
              className="w-full h-64 object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
