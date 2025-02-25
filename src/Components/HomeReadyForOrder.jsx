import React from 'react';
import Slider from 'react-slick';
import pimg from '../assets/1525-57779.jpg';
import pimg2 from '../assets/Amazfit-T-Rex-3--Lava-7129.jpg';
import { NextArrow, PrevArrow } from './CustomArrows';

const HomeReadyForOrder = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6, // Large screens (default)
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024, // Medium screens
        settings: {
          slidesToShow: 3, // Show 3 items
        },
      },
      {
        breakpoint: 768, // Small screens
        settings: {
          slidesToShow: 2, // Show 2 items
        },
      },
      {
        breakpoint: 480, // Extra small screens
        settings: {
          slidesToShow: 2, // Show 1 item
        },
      },
    ],
  };

  return (
    <div>
      <section className='container mx-auto responsive-padding mb-6 py-2 overflow-hidden'>
        <Slider {...settings}>
          <div className='single-product shadow-xl border border-gray-200 rounded-lg text-center p-6 mx-2 my-6'>
            <img src={pimg2} alt='' className=' p-4'/>
            <p className='font-medium my-3'>Galaxy S25 Ultra 5G</p>
            <div className='button'>
              <button className='px-3 py-1 rounded-md text-base'>Add to Cart</button>
            </div>
          </div>
          <div className='single-product shadow-xl border border-gray-200 rounded-lg text-center p-6 mx-2 my-6'>
            <img src={pimg2} alt='' className=' p-4'/>
            <p className='font-medium my-3'>Galaxy S25 Ultra 5G</p>
            <div className='button'>
              <button className='px-3 py-1 rounded-md text-base'>Add to Cart</button>
            </div>
          </div>
          <div className='single-product shadow-xl border border-gray-200 rounded-lg text-center p-6 mx-2 my-6'>
            <img src={pimg2} alt='' className=' p-4'/>
            <p className='font-medium my-3'>Galaxy S25 Ultra 5G</p>
            <div className='button'>
              <button className='px-3 py-1 rounded-md text-base'>Add to Cart</button>
            </div>
          </div>
          <div className='single-product shadow-xl border border-gray-200 rounded-lg text-center p-6 mx-2 my-6'>
            <img src={pimg2} alt='' className=' p-4'/>
            <p className='font-medium my-3'>Galaxy S25 Ultra 5G</p>
            <div className='button'>
              <button className='px-3 py-1 rounded-md text-base'>Add to Cart</button>
            </div>
          </div>
          <div className='single-product shadow-xl border border-gray-200 rounded-lg text-center p-6 mx-2 my-6'>
            <img src={pimg2} alt='' className=' p-4'/>
            <p className='font-medium my-3'>Galaxy S25 Ultra 5G</p>
            <div className='button'>
              <button className='px-3 py-1 rounded-md text-base'>Add to Cart</button>
            </div>
          </div>
          <div className='single-product shadow-xl border border-gray-200 rounded-lg text-center p-6 mx-2 my-6'>
            <img src={pimg2} alt='' className=' p-4'/>
            <p className='font-medium my-3'>Galaxy S25 Ultra 5G</p>
            <div className='button'>
              <button className='px-3 py-1 rounded-md text-base'>Add to Cart</button>
            </div>
          </div>
          <div className='single-product shadow-xl border border-gray-200 rounded-lg text-center p-6 mx-2 my-6'>
            <img src={pimg2} alt='' className=' p-4'/>
            <p className='font-medium my-3'>Galaxy S25 Ultra 5G</p>
            <div className='button'>
              <button className='px-3 py-1 rounded-md text-base'>Add to Cart</button>
            </div>
          </div>
          
          
        </Slider>
      </section>
    </div>
  );
};

export default HomeReadyForOrder;
