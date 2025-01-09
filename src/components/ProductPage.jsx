import { star } from "../assets/icons";
import { useEffect, useState } from "react";
import Button from "./Button";
import { arrowRight } from "../assets/icons";

const ProductPage = () => {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const storedProduct = localStorage.getItem("selectedProduct");
    if (storedProduct) {
      setProduct(JSON.parse(storedProduct)); // Parse and set the product data
    }
  }, []);

  if (!product) {
    return <p>Loading product details...</p>; 
  }

  return (
    <>
        <h2 className="text-4xl font-palanquin text-center max-sm:text-3xl ml-2 mr-2">{product.name} <span className="text-coral-red"> Product </span> Page</h2>
        <section id="product-page" className="w-full flex justify-start items-center gap-30 p-10 max-md:flex-col mb-10">
            <div className="w-full flex items-center justify-center max-md:w-full">
                <img src={product.imgURL} alt={product.name} className="w-[90%] max-md:w-full" />
            </div>
            <div className="p-[20px] max-md:w-full">
                <h3 className="font-montserrat text-4xl text-bold leading-normal max-md:text-3xl"> {product.name}</h3>
                <h3 className="font-montserrat text-coral-red text-4xl text-bold leading-normal max-md:text-3xl">{product.price}</h3>
                <p className="text-slate-400 font-palanquin ">Speed Booster Shoe</p>
                <div className="flex items-start gap-2 mt-3">
                    <img src={star} alt="star" />
                    <img src={star} alt="star" />
                    <img src={star} alt="star" />
                    <img src={star} alt="star" />
                    <img src={star} alt="star" />
                </div>
                <p className="font-montserrat text-xl leading-normal text-slate-gray mt-3">Experience top-notch quality and style with our sought-after selections. Discover a world of comfort, design, and value</p>
                

                <div className="mt-7">
                    <Button label="Shop Now"
                    iconURL={arrowRight}/>
                </div>
            </div>
        </section>
    </>


  );
};

export default ProductPage;
