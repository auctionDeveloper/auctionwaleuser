import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import img1 from '@/assets/1.jpg';
import img2 from '@/assets/2.jpg';
import img3 from '@/assets/3.jpg';
import img4 from '@/assets/4.jpg';
import img5 from '@/assets/5.jpg';
import './ImageCircleSlider.css'; // 👇 use external CSS for curve styling

const images = [img1, img2, img3, img4, img5];

export default function ImageCircleSlider() {
  return (
    <div className="a">
      <div className="slider">
        <div className="curve-top"></div>

        <Swiper
          spaceBetween={30}
          slidesPerView={3}
          loop={true}
          grabCursor={true}
          centeredSlides={true}
          speed={800}
        >
          {images.map((img, idx) => (
            <SwiperSlide key={idx}>
              <div
                className="snapper"
                style={{ backgroundImage: `url(${img})` }}
              />
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="curve-bottom"></div>
      </div>
    </div>
  );
}
