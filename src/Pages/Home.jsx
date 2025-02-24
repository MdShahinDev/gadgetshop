import React from 'react'
import HomeHeroSlider from '../Components/HomeHeroSlider'
import SectionTitle from '../ReusableComponent/SectionTitle'
import Category from '../Components/Category'

const Home = () => {  
  return (
    <div>
      <HomeHeroSlider/>
      <SectionTitle heading='Browse by Category' text='Get your desired product from featured category' />
      <Category/>
    </div>
  )
}

export default Home