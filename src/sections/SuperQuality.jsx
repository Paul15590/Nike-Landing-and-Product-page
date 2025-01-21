import { shoe8 } from "../assets/images";
import Button from "../components/Button";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const SuperQuality = () => {
     const [superQualityInView, setsuperQualityInView] = useState(false);
    
      const handleScroll = () => {
        const element = document.getElementById("animated-div");
        const rect = element.getBoundingClientRect();
        const top = rect.top;
    
        if (top >= 0 && top <= window.innerHeight) {
          setsuperQualityInView(true);
        }
      };
    
      useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
      }, []);
    return (
       <section id="about-us" className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container">
            <motion.div 
            id="animated-div"
            initial={{ opacity: 0, y: 150 }}
            animate={superQualityInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 150 }}
            transition={{ duration: 2 }}

            className="flex flex-1 flex-col">
                <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
                    We Provide You <span className="text-coral-red inline-block mt-3"> Super </span>
                    <span className="text-coral-red inline-block mt-3">Quality </span> Shoes
                </h2>
                <p className="mt-4 lg:max-w-lg info-text">Ensuring premium comfort and style, our meticulously crafted footwear is designed to elevate with unmatched quality, innovation, and a touch of elegance.</p>
                <p className="mt-6 lg:max w-lg info-text">Our dedication to detail and excellence ensures your satisfication</p>
                <div className="mt-11 ">
                 <Button label="View Details"/>
                </div>
            </motion.div>

            <motion.div 
            id="animated-div"
            initial={{ opacity: 0, y: 150 }}
            animate={superQualityInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
            transition={{delay:2,  duration: 2 }}   

            className="flex-1 flex justify-center items-center">
                <img src={shoe8} alt="shoe8" width={570} height={522} className="object-contain" />
            </motion.div>
       </section>
    )
}

export default SuperQuality;