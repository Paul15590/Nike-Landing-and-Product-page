import { star } from "../assets/icons"
import { Link } from "react-router-dom"
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
 const PopularProductCard = ({product}) => {  
    const handleProductClick = () => {
    localStorage.setItem("selectedProduct", JSON.stringify(product));
  };

  const[ popularProductsInView, setPopularProductsInview] = useState(false)
  const handleScroll = () => {
          const element = document.getElementById("animated-div-3");
          const rect = element.getBoundingClientRect();
          const top = rect.top;
      
          if (top >= 0 && top <= window.innerHeight) {
            setPopularProductsInview(true);
          }
        };
      
        useEffect(() => {
          window.addEventListener("scroll", handleScroll);
          return () => window.removeEventListener("scroll", handleScroll);
        }, []);
    return (
        <div className="flex flex-1 flex-col w-full max-sm:w-full">
            
                <Link
                to={`/product-page/${product.name}`}
                onClick={handleProductClick} // Store product in local storage on click
                >
                    <motion.div
                        id="animated-div-3"
                        initial= {{ opacity: 0}}
                        animate={popularProductsInView ? {opacity: 1 , y:0} : {opacity: 0, y:150}}
                        transition={{ duration:2}}
                    >
                        <img src={product.imgURL} alt="" className="w-[280px] h-[280px] "/>
                    </motion.div>
                   
                </Link>
            
            <motion.div
                id="animated-div-3"
                initial= {{ opacity: 0, y:150 }}
                animate={popularProductsInView ? {opacity: 1 , y:0} : {opacity: 0, y:150}}
                transition={{ duration:4}}
            >
                <div className="mt-8 flex justify-start gap-2.5">
                    <img src={star} alt="rating" width={24} height={24} />
                    <p className="font-montserrat text-xl leading-normal text-slate-gray">(4.5)</p>
                </div>
                <h3 className="mt-2 text-2xl leading-normal font-semibold font-palanquin">{product.name}</h3>
                <p className=" mt-2 font-semibold font-montserrat text-coral-red text-2xl leading-normal ">{product.price }</p>
            </motion.div>
           
        </div>
    )
 }

 export default PopularProductCard;