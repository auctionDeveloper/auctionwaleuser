import React from 'react'
import CurvedCarousel from '../components/CurvedCarousel'
import Testimonials from '../components/Testimonials'
import BankAuction from '../components/BankAuction'
import MissionVision from '../components/MissionVision'
import WhyUseAuctionwale from '../components/WhyUseAuctionwale'
import HomeSearch from '../components/HomeSearch'

export default function HomePage() {
  return (
    <div>
       <HomeSearch/>
       <CurvedCarousel/>
       <WhyUseAuctionwale/>

       <BankAuction/>
       <MissionVision/>
       <Testimonials/>
      
  
    </div>
  )
}
