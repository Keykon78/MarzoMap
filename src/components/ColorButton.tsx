
import React, { useRef, useEffect } from "react"
import { motion } from "framer-motion";
import User from "./User";
import { useNavigate } from "react-router-dom";

const ColorButton= (props:{color:{name:string,hexcode:string}}) => {
        const navigate = useNavigate()
      return (
    <div style={{display:"flex", marginTop:5}}>
        
        <motion.div 
        initial ={{scale:0}}
        onClick={()=>{
            navigate("/Add/Name",{state:{color:props.color.hexcode}})
        }
    }
        animate={{scale:1}}
        transition={{duration:1, delay:1.2}}
        style={{borderRadius:10, width:50, height:50, backgroundColor:props.color.hexcode}}>
        
        </motion.div>
       
        <motion.p  
        initial ={{opacity:0}}
        animate={{opacity:1}}
        transition={{duration:1, delay:1}}
        style={{color: props.color.hexcode, marginLeft:10, fontWeight:600}}
        >
            {props.color.name}
        
        </motion.p>
    </div>
        
      );
    };

    export default ColorButton;