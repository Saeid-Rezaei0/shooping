import React from 'react'
import Banner from './Banner'
import Homecategory from './Homecategory'
import CategoryShow from './CategoryShow'
import Register from './Register'
import LocationSpread from './LocationSpread'
import Aboutus from './Aboutus'
import AppSection from './AppSection'
import Sponsor from './Sponsor'
import ProductSlider from './SliderProduct'
import LayOUT from '../LayOUT'

export default function Home() {
  scroll(0, 0)
  return (
    <div>
      <LayOUT>
      <Banner />
      <Homecategory />
      <ProductSlider />
      <CategoryShow />
      <Register />
      <LocationSpread />
      <Aboutus />
      <AppSection />
      <Sponsor />
      </LayOUT>
    </div>
  )
}
