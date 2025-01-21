import { motion } from "framer-motion";

const variant = {
     hover:{
        scale:1.1,
        textShadow:"0px 0px 8px rgb(225, 225, 225)",
        boxShadow:"0px 0px 8px rgb(225,225,225)",
      }
    }

const Button = ({label,iconURL, backgroundColor, textColor, borderColor,fullWidth}) => {
    return(
        <motion.button 
        variants={variant}
        whileHover="hover"
        
        className={`flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none
            ${backgroundColor ? `${backgroundColor} ${textColor} ${borderColor}`:
        "bg-coral-red  text-white border-coral-red"} rounded-full ${ fullWidth && " w-full"}`}
        >
            {label}
            {iconURL && <img src={iconURL} alt="arrow right icon"  className="ml-2 rounded-full w-5 h-5"/>}
        </motion.button>
    )
}

export default Button;