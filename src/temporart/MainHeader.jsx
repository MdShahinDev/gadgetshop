import React, { useEffect, useState } from 'react';
import logo from '../assets/logo.png';
import { Link, NavLink } from 'react-router-dom';
import { FaRegHeart } from 'react-icons/fa';
import { FiShoppingCart } from 'react-icons/fi';
import { FaRegUserCircle } from 'react-icons/fa';
import { IoMenu, IoClose  } from 'react-icons/io5';
import { MdOutlineShoppingBag } from "react-icons/md";
const MainHeader = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  useEffect(() => {
    const handleClicOutside = (event) => {
      if (isSidebarOpen && !event.target.closest('.sidebar-menu') && !event.target.closest('.menu-icon')) {
        setIsSidebarOpen(false);
      }
    };
    document.addEventListener('click', handleClicOutside);
    return () => {
      document.removeEventListener('click', handleClicOutside);
    };
  }, [isSidebarOpen]);
  return (
    <>
      <header>
        {/* Desktop Header */}
        <div className='desktop-main-header hidden md:block border-b border-gray-300'>
          <div className=' hidden py-4 md:flex container mx-auto responsive-padding justify-between gap-2 items-center'>
            <div className='logo'>
              <Link to={'/'}>
                <img className='w-64' src={logo} alt='Logo' />
              </Link>
            </div>
            <div className='search-bar w-full text-center'>
              <input className='w-3/4 border py-2 px-2 text-base text-gray-600 border-gray-300 rounded-md focus:ring-0 focus:outline-none' type='text' placeholder='Search here' />
            </div>
            <div className='shopping-cart'>
              <ul className='flex justify-between gap-8 text-xl lg:text-2xl'>
                <li className='relative hover:text-hover transition-all'>
                  <Link to={'/wishlist'}>
                    <FaRegHeart /> <span className='absolute -bottom-3 -right-3 text-xs bg-primary rounded-full text-black font-semibold w-5 h-5 flex justify-center items-center'>0</span>{' '}
                  </Link>
                </li>
                <li className='relative hover:text-hover transition-all'>
                  <Link to={'/cart'}>
                    <MdOutlineShoppingBag /> <span className='absolute -bottom-3 -right-3 text-xs bg-primary rounded-full text-black font-semibold w-5 h-5 flex justify-center items-center'>0</span>{' '}
                  </Link>
                </li>
                <li className=' hover:text-hover transition-all'>
                  <Link to={'/my-account'}>
                    <FaRegUserCircle />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* Desktop Header */}
        {/* Desktop Menu */}
        <div className='hidden md:block z-10 border-b border-gray-300 bg-black responsive-padding overflow-x-hidden'>
          <div className='main-menu py-4 container mx-auto '>
            <ul className='flex gap-4 justify-center text-base font-medium  text-white uppercase'>
              <NavLink to={'/'}>
                <li className='hover:text-hover'>Home</li>
              </NavLink>
              <NavLink to={'/shop'}>
                <li className='hover:text-hover'>SHOP</li>
              </NavLink>
            </ul>
          </div>
        </div>
        {/* Desktop Menu */}

        {/* Mobile Menu */}
        <div className='mobile-header border-b border-gray-300 py-2 md:hidden'>
          <div className='container mx-auto responsive-padding flex justify-between items-center'>
            <div className='menu-icon text-3xl' onClick={toggleSidebar}>
              <IoMenu />
            </div>
            <div className='logo'>
              <Link to={'/'}>
                <img className='w-40 sm:w-48' src={logo} alt='Logo' />
              </Link>
            </div>
            <div className='shopping-cart'>
              <ul className='flex justify-between gap-5 text-xl sm:gap-6'>
                <li className='relative hover:text-hover transition-all'>
                  <Link to={'/wishlist'}>
                    <FaRegHeart /> <span className='absolute -bottom-2 -right-2 text-xs bg-primary rounded-full text-black font-semibold w-4 h-4 flex justify-center items-center'>0</span>{' '}
                  </Link>
                </li>
                <li className='relative hover:text-hover transition-all'>
                  <Link to={'/cart'}>
                    <MdOutlineShoppingBag /> <span className='absolute -bottom-2 -right-2 text-xs bg-primary rounded-full text-black font-semibold w-4 h-4 flex justify-center items-center'>0</span>{' '}
                  </Link>
                </li>
                <li className=' hover:text-hover transition-all'>
                  <Link to={'/my-account'}><FaRegUserCircle /></Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* Mobile Menu End */}

        {/* Mobile SearchBar  */}
        <div className='mobile-search-bar responsive-padding py-2 md:hidden'>
          <input className='w-full border py-2 px-2 text-base text-gray-600 border-gray-300 rounded-md focus:ring-0 focus:outline-none' type='text' placeholder='Search Product' />
        </div>
        {/* Mobile SearchBar End  */}

        {/* Mobile Sidebar Menu */}
        <div
          className={`fixed inset-0 bg-white bg-opacity-70 backdrop-blur-sm z-50 transition-opacity duration-300 ${
            isSidebarOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
          }`}
        ></div>

        <div
          className={`fixed top-0 left-0 h-full w-64 sm:w-80 bg-white shadow-lg z-50 transform transition-transform duration-300 sidebar-menu ${
            isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          {/* Sidebar Header */}
          <div className="p-4 flex justify-between items-center border-b border-gray-300">
            <Link to={'/'} onClick={toggleSidebar}><img className='w-32' src={logo} alt="" /></Link>
            <IoClose className="text-2xl cursor-pointer text-primary" onClick={toggleSidebar} />
          </div>

          {/* Sidebar Links */}
          <nav >
            <ul className="flex flex-col text-gray-900 text-lg">
                <NavLink to={'/'} onClick={toggleSidebar} ><li className='text-base font-semibold px-2 py-2 border-b border-gray-300'>HOME</li> </NavLink>
                <NavLink to={'/shop'} onClick={toggleSidebar} ><li className='text-base font-semibold px-2 py-2 border-b border-gray-300'>SHOP</li> </NavLink>
            </ul>
          </nav>
        </div>
        {/* Mobile Sidebar Menu End */}
      </header>
    </>
  );
};

export default MainHeader;
