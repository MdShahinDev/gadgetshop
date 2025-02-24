import React from 'react';
import HomeHeroSlider from '../Components/HomeHeroSlider';
import SectionTitle from '../ReusableComponent/SectionTitle';
import HomeCategory from '../Components/HomeCategory';

const Home = () => {
  return (
    <div>
      <HomeHeroSlider />
      <SectionTitle heading='Browse by Category' text='Get your desired product from featured category' />
      <HomeCategory />
    </div>
  );
};

export default Home;
