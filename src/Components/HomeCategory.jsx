import React from 'react';
import cat1 from '../assets/category/cat-1.webp';
import cat2 from '../assets/category/cat-2.webp';
import cat3 from '../assets/category/cat-3.webp';
import cat4 from '../assets/category/cat-4.webp';
import cat5 from '../assets/category/cat-5.webp';
import cat6 from '../assets/category/cat-6.webp';
const HomeCategory = () => {
  return (
    <div className='container mx-auto responsive-padding my-6 py-2'>
      <div className='grid gap-4 grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6'>
        <div className='single-cat flex flex-col justify-center items-center py-4 shadow-lg rounded-lg border border-gray-200 cursor-pointer'>
          <img src={cat6} alt='' className='w-[100px] h-auto rounded-lg ' />
          <p className='text-center my-4'>Smartphone</p>
        </div>
        <div className='single-cat flex flex-col justify-center items-center py-4 shadow-lg rounded-lg border border-gray-200 cursor-pointer'>
          <img src={cat1} alt='' className='w-[100px] h-auto rounded-lg ' />
          <p className='text-center my-4'>Tablet</p>
        </div>
        <div className='single-cat flex flex-col justify-center items-center py-4 shadow-lg rounded-lg border border-gray-200 cursor-pointer'>
          <img src={cat2} alt='' className='w-[100px] h-auto rounded-lg ' />
          <p className='text-center my-4'>Smart Watch</p>
        </div>
        <div className='single-cat flex flex-col justify-center items-center py-4 shadow-lg rounded-lg border border-gray-200 cursor-pointer'>
          <img src={cat3} alt='' className='w-[100px] h-auto rounded-lg ' />
          <p className='text-center my-4'>Airpods</p>
        </div>
        <div className='single-cat flex flex-col justify-center items-center py-4 shadow-lg rounded-lg border border-gray-200 cursor-pointer'>
          <img src={cat4} alt='' className='w-[100px] h-auto rounded-lg ' />
          <p className='text-center my-4'>Speaker</p>
        </div>
        <div className='single-cat flex flex-col justify-center items-center py-4 shadow-lg rounded-lg border border-gray-200 cursor-pointer'>
          <img src={cat5} alt='' className='w-[100px] h-auto rounded-lg ' />
          <p className='text-center my-4'>Headphone</p>
        </div>
        
      </div>
    </div>
  );
};

export default HomeCategory;
