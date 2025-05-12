import React from 'react'
import CurvedCarousel from '../components/CurvedCarousel'
import Testimonials from '../components/Testimonials'
import BankAuction from '../components/BankAuction'
import MissionVision from '../components/MissionVision'
import WhyUseAuctionwale from '../components/WhyUseAuctionwale'
import SearchBar from '../components/SearchBar'

export default function HomePage() {
  return (
    <div>
         <SearchBar/>
       <CurvedCarousel/>
       <WhyUseAuctionwale/>

       <BankAuction/>
       <MissionVision/>
       <Testimonials/>
      
  
    </div>
  )
}
