
import React, { useRef, useEffect } from "react"
import { motion } from "framer-motion";

const ColorButton= (props:{color:string}) => {
    
      return (
    <div style={{display:"flex"}}>
        
        <motion.div 
        initial ={{scale:0}}
        animate={{scale:1}}
        transition={{duration:1, delay:1.2}}
        style={{borderRadius:30, width:20, height:50, backgroundColor:props.color}}>
               
        </motion.div>
       
        <motion.p  
        initial ={{opacity:0}}
        animate={{opacity:1}}
        transition={{duration:1, delay:1}}>
            {props.color}
        </motion.p>
    </div>
        
      );
    };

    export default ColorButton;