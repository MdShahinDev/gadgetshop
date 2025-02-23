import React from 'react';
import { Link } from 'react-router-dom';

const TopBar = () => {
  return (
    <>
      <section className='bg-gray-200 py-2'>
        <div className='container mx-auto responsive-padding'>
          <div className='topbar flex justify-between items-center'>
            <div className='topleft'>
              <p className='text-sm hover:text-hover transition-all px-2'>
                <Link to={'mailto:hello.shahinofficial@gmail.com'}>hello.shahinofficial@gmail.com</Link>
              </p>
            </div>
            <div className='topright text-sm'>
              <select name='currency' id='currency' className='border px-2 focus:outline-none focus:ring-0'>
                <option value='USD' selected>USD</option>
                <option value='BDT'>BDT</option>
              </select>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TopBar;
