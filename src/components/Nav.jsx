import { hamburger } from "../assets/icons";
import headerLogo from "../assets/images/header-logo.svg";
import {navLinks} from "../constants/index";
import iconClose from "../assets/icons/close-circle-svgrepo-com.svg"
import iconAbout from "../assets/icons/about-information-info-help-svgrepo-com.svg"
import iconMenu from "../assets/icons/menu-dots-circle-svgrepo-com.svg"
import iconContactUs from "../assets/icons/social-contact-svgrepo-com.svg"
import iconProducts from "../assets/icons/products-product-svgrepo-com.svg";
import { useState } from "react";

 const Nav = () => {
   const [isMobileNavVisible, setIsMobileNavVisible] = useState(false);

   const toggleMobileNav = () => {
     setIsMobileNavVisible(!isMobileNavVisible);
   }
    return(
      <header className="padding-x py-8 z-10 w-full ">
         <nav className="flex justify-between items-center max-container">
            <a href="/">
                <img src={headerLogo} alt="Logo" />
            </a>

            <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
               {navLinks.map((items) => {
                  return(
                  <li key={items.label}>
                     <a href={items.href} className="font-montserrat leading-normal text-lg text-slate-gray">{items.label}</a>
                  </li>
                  )
               })}
            </ul>

            <ul id="mobile-nav" className={`absolute right-10 top-7 flex flex-col justify-center items-center z-10 transition-all duration-1000 ease-in-out${
            isMobileNavVisible ? "opacity-100 translate-y-2" : "opacity-0 -translate-y-[1000px]"
          }`}>
               <li className="mb-10 cursor-pointer"> <img src={iconClose} alt="close-btn"  width={40} height={40}  onClick={toggleMobileNav}/></li>
               <li className="mb-4">  <a href="."><img src={iconMenu} alt="close-btn"  width={40} height={40} /> <p className="mt-[-10px] text-[14px] text-center">menu</p></a></li>
               <li className="mb-4">  <a href="."><img src={iconAbout} alt="close-btn"  width={40} height={40} /><p className="mt-[-10px] text-[14px] text-center">About</p></a></li>
               <li className="mb-4">  <a href="."><img src={iconContactUs} alt="close-btn"  width={40} height={40} /><p className="mt-[-10px] text-[14px] text-center">Contact</p></a></li>
               <li className="mb-4">  <a href="."><img src={iconProducts} alt="close-btn"  width={40} height={40} /><p className="mt-[-10px] text-[14px] text-center">Product </p></a></li>
            </ul>


            <div className={`hidden max-lg:block transition-transform duration-1000 ease-in-out ${ isMobileNavVisible ? "translate-y-[-100px] opacity-0" : "translate-y-0 opacity-100"}`}>
               {!isMobileNavVisible && <img src={hamburger} alt="Hamburger" width={40} height={40} className="cursor-pointer" onClick={toggleMobileNav}/>}
               
            </div>
         </nav>
      </header>
    )
 }

 export default Nav;