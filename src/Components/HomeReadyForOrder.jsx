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
  console.log(products);
  
  return (
    <div>
      <section className="container mx-auto responsive-padding mb-6 py-2 overflow-hidden">
        <Slider {...settings}>
          {products.map((item, index) => (
            <div
              key={index} className="single-product shadow-xl border border-gray-200 rounded-lg text-center p-6 mx-2 my-6">
              <img src={item.image[0]} alt="" className="p-4" />
              <div className="h-18 overflow-hidden">
                <Link to={`/product/${LinkGenerator.generateProductLink( item.name )}`} >
                  <p className="font-medium my-3 transition-all duration-300 hover:text-primary"> {item.name} </p>
                </Link>
              </div>
              <div className="item-price">
  {item.price_options && item.price_options.length > 0 ? (
    // If price_options exist, show min and max sale prices
    <p className="text-lg font-semibold text-gray-700">
      ${Math.min(...item.price_options.map(option => option.sale_price))} - 
      ${Math.max(...item.price_options.map(option => option.sale_price))}
    </p>
  ) : (
    // If only sale_price exists, show the sale price
    <p className="text-lg font-semibold text-red-500">
      ${item.sale_price} 
      <span className="text-gray-400 line-through text-sm ml-2">
        ${item.regular_price}
      </span>
    </p>
  )}
</div>

              <div className="button  py-1 md:mt-0">
                <Link to={`/product/${LinkGenerator.generateProductLink(item.name)}`}>
                  <button className="px-3 py-1 rounded-md text-xs sm:text-base transition-all duration-300 hover:text-black">
                    Select Product
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </Slider>
      </section>
    </div>
  );
};

export default HomeReadyForOrder;
