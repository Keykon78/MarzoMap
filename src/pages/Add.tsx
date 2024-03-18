import React, { useEffect, useState } from 'react';
import {delay, motion} from 'framer-motion'
import ColorButton from '../components/ColorButton';
import { Link } from 'react-router-dom';
import { ArrowLeftOutlined, ArrowRightOutlined } from '@ant-design/icons';

const Add = () => {
    const hexColors = ['#fa8c16','#fadb14','#52c41a',"#f5222d", "#722ed1","#1677ff"];  
    const nameColors = ['Orange','Red','Green',"Purple", "Yellow","Blue"];  
    const ColorButtons = []

    for (let i = 0; i < hexColors.length; i++){
        ColorButtons.push(<ColorButton color={{name:nameColors[i], hexcode:hexColors[i]}}/>)
    }
    return (

        <motion.div 
        initial={{y:"100%"}}
        animate={{y:"0%" }}
        exit={{y:"100%"}}
        transition={{duration:1}}
        style={{position:'absolute',display:"flex",flexDirection: "column", width:"100%", height: "100%", backgroundColor: "#f7f7f7"}}>
        <h1 style={{fontSize:55, marginLeft:10, alignSelf:"center"}}>What was your color group?</h1>
       
        <div style={{alignSelf:"center"}}>
        {ColorButtons}
        </div>
        
        <div style={{display:"flex",flexDirection:"row", marginLeft:30, marginRight:30,marginTop:60, justifyContent:"space-between"}}>
            <Link to={"/"}><ArrowLeftOutlined style={{fontSize:24, color:"black"}}/></Link>
            <ArrowRightOutlined  style={{fontSize:24, color:"lightgrey", alignSelf:"flex-end"}}/>
        </div>
        
        </motion.div>
    );
    
}



export default Add