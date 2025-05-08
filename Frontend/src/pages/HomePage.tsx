import CurvedCarousel from '@/components/CurvedCarousel'
import CircularImageSlider from '@/components/ImageCircleSlider'
import ImageSlider from '@/components/ImageSlider';
import carousel from '@/components/'
import React from 'react'

export default function HomePage() {
  return (
    <div>
      <div className="p-8">
      <h2 className="text-center text-2xl font-bold mb-4">Our Property</h2>
      
      <ImageSlider />
      <Slide/>
      <CircularImageSlider/>
      <CurvedCarousel/>
    </div>
    </div>
  )
}
