import React from 'react'
import Hero from '../components/home/Hero'
import OfferBanner from '../components/home/OfferBanner'
import RoundTripFlights from '../components/home/RoundTripFlights'
import PopularHotels from '../components/home/PopularHotels'
import PopularDestinations from '../components/home/PopularDestinations'
import Testimonial from '../components/home/Testimonial'
import MobileArea from '../components/home/MobileArea'
import ClientLogo from '../components/home/ClientLogo'
import WhyChoose from '../components/home/WhyChoose'
import BlogArea from '../components/home/BlogArea'
import BackToTop from '../components/layout/BackToTop'

export default function Home() {
  return (
    <>
      <Hero />
      <OfferBanner />
      <RoundTripFlights />
      <PopularHotels />
      <PopularDestinations />
      <Testimonial />
      <MobileArea />
      <ClientLogo />
      <WhyChoose />
      <BlogArea />
      <BackToTop />
    </>
  )
}
