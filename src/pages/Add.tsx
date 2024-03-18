import React, { useEffect, useState } from 'react';
import {delay, motion} from 'framer-motion'
import TextAnim from '../components/TextAnim';
import ColorButton from '../components/ColorButton';

const Add = () => {
   

    return (

        <motion.div 
        initial={{y:"100%"}}
        animate={{y:"0%" }}
        exit={{y:"100%"}}
        transition={{duration:1}}
        style={{position:'absolute',display:"flex",flexDirection: "column", width:"100%", height: "100%", backgroundColor: "#f7f7f7"}}>
        <h1 style={{fontSize:55, marginLeft:10, alignSelf:"center"}}>What was your color group?</h1>
       
        <ColorButton color='red'/>
        </motion.div>
    );
    
}



export default Add