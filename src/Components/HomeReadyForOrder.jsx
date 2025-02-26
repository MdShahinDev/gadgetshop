import Slider from "react-slick";
import { NextArrow, PrevArrow } from "./CustomArrows";
import { ShopContext } from "../Context/ShopContext";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { LinkGenerator } from "../Helper/LinkGenerator";
const HomeReadyForOrder = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };
  const { products } = useContext(ShopContext);

  return (
    <div>
      <section className="container mx-auto responsive-padding mb-6 py-2 overflow-hidden">
        <Slider {...settings}>
          {products.map((item, index) => (
           <div key={index} className="single-product h-[310px] shadow-xl border border-gray-200 rounded-lg text-center p-6 mx-2 my-6">
           <img src={item.image[0]} alt="" className="p-4" />
           <div className="h-16 overflow-hidden">
            <Link to={`/product/${LinkGenerator.generateProductLink(item.name)}`}>
             <p className="font-medium my-3 transition-all duration-300 hover:text-primary">{item.name}</p>
            </Link>
           </div>
           <div className="button py-2">
             <button className="px-3 py-1 rounded-md text-base transition-all duration-300 hover:text-black">
               Select Product
             </button>
           </div>
         </div>
          ))}

        </Slider>
      </section>
    </div>
  );
};

export default HomeReadyForOrder;
