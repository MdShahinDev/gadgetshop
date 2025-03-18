import { Link } from 'react-router-dom'
import banner1 from '../assets/banner/feature-banner-1.jpg'
import banner2 from '../assets/banner/feature-banner-2.jpg'
import banner3 from '../assets/banner/feature-banner-3.jpg'
import { FaLongArrowAltRight } from "react-icons/fa";
const FeatureBanner = () => {
  return (
    <div className="container mx-auto responsive-padding my-6 py-2">
  <div className="flex flex-col md:flex-row gap-4">
    <div className="w-full md:w-1/2 relative">
      <img className="w-full rounded-lg" src={banner1} alt="Banner 1" />
      <div className="text absolute top-1/8 left-1/2 -translate-x-1/2 -translate-y-1/8">
        <h3 className='text-primary text-center'>NEW ARRIVALS</h3>
        <h2 className='text-center'>Ecom Watch new series</h2>
        <Link to={'/shop'} className='text-center my-2 flex gap-2 justify-center items-center font-semibold transition-all duration-300 hover:text-primary'>Shop Now <FaLongArrowAltRight/> </Link>
      </div>
    </div>
    <div className="w-full md:w-1/2 flex flex-col gap-4">
    <div className='relative'>
      <img className="w-full rounded-lg" src={banner2} alt="Banner 2" />
      <div className="text absolute top-1/3 left-[30px]">
        <h3 className='text-[20px] uppercase font-bold'>Special deals <br /> CYBER MONDAY SALE</h3>
        <p className='text-base my-4'>Up To <span className='text-primary font-bold'>50% Discount</span>, no Promo Code Needed</p>
        <Link to={'/shop'} className='text-left my-2 flex gap-2  items-center font-semibold transition-all duration-300 hover:text-primary'>Shop Now <FaLongArrowAltRight/> </Link>
      </div>
    </div>
    <div className='flex flex-col md:flex-row gap-2'>
      <img className="w-full rounded-lg md:w-[375px]" src={banner3} alt="Banner 3" />
      <img className="w-full rounded-lg md:w-[375px]" src={banner3} alt="Banner 3" />
    </div>
    </div>
  </div>
</div>

  )
}

export default FeatureBanner
