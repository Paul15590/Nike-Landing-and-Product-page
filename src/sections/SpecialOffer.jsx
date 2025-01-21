import { arrowRight } from "../assets/icons";
import { offer } from "../assets/images";
import Button from "../components/Button";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const SpecialOffer = () => {
    const [specilaOfferInView, setspecilaOfferInView] = useState(false);

  const handleScroll = () => {
    const element = document.getElementById("animated-div-2");
    const rect = element.getBoundingClientRect();
    const top = rect.top;

    if (top >= 0 && top <= window.innerHeight) {
      setspecilaOfferInView(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

    return (
        <section
        className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container">
            <motion.div   
            id="animated-div-2"
            initial={{ opacity: 0, y: 150 }}
            animate={specilaOfferInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 150 }}
            transition={{ duration: 2 }}

            className="flex-1 ">
                <img src={offer} alt="" width={773} height={687} className="object-contain w-full" />
            </motion.div>

            <motion.div        
            id="animated-div"
            initial={{ opacity: 0, y: 150 }}
            animate={specilaOfferInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
            transition={{ delay:2, duration: 2 }}

            className="flex flex-1 flex-col">
                <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
                  <span className="text-coral-red inline-block mt-3"> Special </span> Offer
                </h2>
                <p className="mt-4 lg:max-w-lg info-text">Embark on a shopping journey that redefines your experience with unbeatable deals. From premier selections to incredible savings , we offer unparalled value that sets us apart.</p>
                <p className="mt-6 lg:max w-lg info-text">Navigate a realm of possibilities designed to fulfill your unique desires , surpassing the loftliest expectations . Your journey with us is nothing short of exceptional. </p>
                <div className="mt-11 flex flex-wrap gap-4">
                 <Button label="Shop now" iconURL={arrowRight}/>
                 <Button label="Learn More " backgroundColor="bg-white" borderColor="border-slate-gray" textColor="text-slate-gray"/>

                </div>
            </motion.div>
        </section>
    )
}

export default SpecialOffer;