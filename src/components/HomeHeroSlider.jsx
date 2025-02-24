import React from 'react';
import Slider from 'react-slick';
import sliderImg1 from '../assets/slider/home-banner-slider-1.jpg';
import sliderImg2 from '../assets/slider/home-banner-slider-2.jpg';
import sliderImg3 from '../assets/slider/home-banner-slider-3.jpg';
import { Link } from 'react-router-dom';
const HomeHeroSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  return (
    <div className='container mx-auto mt-4 overflow-hidden'>
      <Slider {...settings} className='mb-4'>
        <div>
          <div className='slide-img relative'>
            <img className='rounded-none lg:rounded-2xl w-full object-cover' src={sliderImg1} alt='Banner 1' />
            <div className='banner-content absolute top-1/2 left-10 transform -translate-y-1/2 text-white'>
              <p className=' my-2 uppercase font-semibold'>are you a gammer?</p>
              <h2 className=' my-2 font-bold uppercase'>Monitor screen for gamming</h2>
              <Link to={'/shop'}>
                <button className='my-2 px-2 py-1 md:px-4 md:py-2 rounded-md transition-all hover:bg-hover duration-300'>SHOP NOW</button>
              </Link>
            </div>
          </div>
        </div>
        <div>
          <div className='slide-img relative'>
            <img className='rounded-none lg:rounded-2xl w-full object-cover' src={sliderImg2} alt='Banner 2' />
            <div className='banner-content absolute top-1/2 left-10 transform -translate-y-1/2 text-white'>
              <p className=' my-2 uppercase font-semibold'>camera ultrapixel</p>
              <h2 className=' my-2 font-bold uppercase'>ecommax phone</h2>
              <Link to={'/shop'}>
                <button className='my-2 px-2 py-1 md:px-4 md:py-2 rounded-md transition-all hover:bg-hover duration-300'>SHOP NOW</button>
              </Link>
            </div>
          </div>
        </div>
        <div>
          <div className='slide-img relative'>
            <img className='rounded-none lg:rounded-2xl w-full object-cover' src={sliderImg3} alt='Banner 3' />
            <div className='banner-content absolute top-1/2 left-10 transform -translate-y-1/2 text-white'>
              <p className=' my-2 uppercase font-semibold'>smart speaker seried</p>
              <h2 className=' my-2 font-bold uppercase'>ultra clean sound experience</h2>
              <Link to={'/shop'}>
                <button className='my-2 px-2 py-1 md:px-4 md:py-2 rounded-md transition-all hover:bg-hover duration-300'>SHOP NOW</button>
              </Link>
            </div>
          </div>
        </div>
        
      </Slider>
    </div>
  );
};

export default HomeHeroSlider;
