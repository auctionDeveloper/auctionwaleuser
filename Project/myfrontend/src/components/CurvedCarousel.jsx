import React, { useRef, useState } from "react";

const images = [
  "https://picsum.photos/id/1015/1000/700",
  "https://picsum.photos/id/1016/1000/700",
  "https://picsum.photos/id/1018/1000/700",
  "https://picsum.photos/id/1019/1000/700",
  "https://picsum.photos/id/1020/1000/700",
  "https://picsum.photos/id/1021/1000/700",
  "https://picsum.photos/id/1022/1000/700",
];

export default function CurvedCarousel() {
  const scrollRef = useRef(null);
  const [liked, setLiked] = useState(Array(images.length).fill(false));

  const toggleLike = (index) => {
    const newLikes = [...liked];
    newLikes[index] = !liked[index];
    setLiked(newLikes);
  };

  const scroll = (dir) => {
    const container = scrollRef.current;
    const cardWidth = container.firstChild.offsetWidth + 32;
    if (dir === "left") {
      container.scrollBy({ left: -cardWidth, behavior: "smooth" });
    } else {
      container.scrollBy({ left: cardWidth, behavior: "smooth" });
    }
  };

  return (
    <div className="w-full bg-white relative overflow-visible">
      <div className="relative w-full z-10 py-[50px] overflow-visible">
        {/* Top Oval */}
        <div
          className="absolute left-1/2 transform -translate-x-1/2 z-30 pointer-events-none flex items-start justify-center pt-5 text-black text-3xl font-bold select-none"
          style={{
            top: "-100px", // moved upward
            width: "120vw",
            height: "200px",
            backgroundColor: "#ffffff",
            borderBottomLeftRadius: "100%",
            borderBottomRightRadius: "100%",
            userSelect: "none",
          }}
        >
          Budgetwise Auctions
        </div>

        {/* Bottom Oval */}
        <div
          className="absolute left-1/2 transform -translate-x-1/2 w-[150vw] z-30 pointer-events-none"
          style={{
            bottom: "-100px", // pulled upward
            height: "280px",
            backgroundColor: "#ffffff",
            borderTopLeftRadius: "100%",
            borderTopRightRadius: "100%",
          }}
        >
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-40 flex gap-6 pointer-events-auto">
            <button
              onClick={() => scroll("left")}
              className="bg-gray-200 text-black text-3xl px-6 py-3 rounded-full shadow hover:bg-gray-300"
            >
              &#8249;
            </button>
            <button
              onClick={() => scroll("right")}
              className="bg-gray-200 text-black text-3xl px-6 py-3 rounded-full shadow hover:bg-gray-300"
            >
              &#8250;
            </button>
          </div>
        </div>

        {/* Image Cards */}
        <div
          ref={scrollRef}
          className="flex overflow-x-auto scroll-smooth no-scrollbar px-[5vw] space-x-5"
        >
          {images.map((src, index) => (
            <div
              key={index}
              className="group shrink-0 w-[30vw] sm:w-[20vw] h-[60vh] sm:h-[70vh] rounded-3xl overflow-hidden relative transition-transform duration-300 z-20"
            >
              <img
                src={src}
                alt={`img-${index}`}
                className="w-full h-full object-cover rounded-3xl"
              />

              {/* Heart Icon - Top right */}
              <div
                onClick={() => toggleLike(index)}
                className="absolute top-14 right-4 z-40 cursor-pointer hover:scale-110 transition-transform"
              >
                <div className="bg-white rounded-full p-2 shadow-md flex items-center justify-center w-11 h-11">
                  {liked[index] ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="red"
                      viewBox="0 0 24 24"
                      className="w-6 h-6"
                    >
                      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 
                        2 8.5 2 6 4 4 6.5 4c1.74 0 3.41 1.01 
                        4.13 2.44h1.74C14.09 5.01 15.76 4 
                        17.5 4 20 4 22 6 22 8.5c0 3.78-3.4 
                        6.86-8.55 11.54L12 21.35z" />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="gray"
                      strokeWidth={1.8}
                      className="w-3 sm:w-6 h-3 sm:h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3.172 5.172a4.5 4.5 0 016.364 0L12 7.636l2.464-2.464a4.5 4.5 0 116.364 6.364L12 21.364 3.172 11.536a4.5 4.5 0 010-6.364z"
                      />
                    </svg>
                  )}
                </div>
              </div>

              {/* Overlay with Blur and Content */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col justify-end text-white rounded-3xl">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end items-center text-center sm:text-left px-5 sm:px-14 pb-12 sm:pb-14 py-14 gap-3 sm:gap-0">
                  <div>
                    <p className="text-base sm:text-lg md:text-xl font-semibold">Image Title</p>
                    <p className="text-xs sm:text-sm opacity-80">2-word Text</p>
                  </div>
                  <button className="text-white text-2xl font-bold p-2 hover:scale-110 transition">
                    &#8594;
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
