import { ArrowLeftOutlined, ArrowRightOutlined } from "@ant-design/icons";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {color, motion} from 'framer-motion'
import { Button, DatePicker, Input, Select, Switch } from "antd";
import { useGlobalContext } from "../components/GlobalContext";
import { useRef, useState } from "react";
import User from '../components/User';



const Social = () => {
   const navigate = useNavigate()
   const location = useLocation()

   const userData = location.state
    const days = []
    const months =[]
    const years =[]


   for(let i=1; i<=31; i++){
        days.push({value:i, label:<span>{i}</span>})
   }
   for(let i=1; i<=12; i++){
    months.push({value:i, label:<span>{i}</span>})
    } 
    for(let i=2024; i<=2030; i++){
        years.push({value:i, label:<span>{i}</span>})
    }   


    return (

        <motion.div 
       initial={{opacity:0}}
       animate={{opacity:1}}
       exit={{y:"100%"}}
       transition={{duration:1}}
       style={{position:'absolute',display:"flex",flexDirection: "column", width:"100%", height: "100%", backgroundColor: userData.color }}>
       
       
       <h1 style={{fontSize:55, marginLeft:10, alignSelf:"center", color:"#f7f7f7"}}>Some last information</h1>
        
    <div style={{display:"flex", flexDirection:"column" ,alignSelf:"center", justifyContent:"center", width:230}}>
        
        <div style={{display:"flex", flexDirection:"column"}}>
            <h3 style={{marginBottom:8, color:"#f7f7f7"}}>End of Project 📅</h3>
            <div  style={{display:"flex", flexDirection:"row",justifyContent:"space-between"}}>
                <Select options={days} placeholder={"Day"}></Select>
                <Select options={months} placeholder={"Month"}></Select>
                <Select options={years} placeholder={"Year"}></Select>
            </div>
        </div>

        <div style={{display:"flex", flexDirection:"column"}}>
            <h3 style={{marginBottom:8, color:"#f7f7f7"}}>Socials 🌎 (not required)</h3>
            <Input style={{marginBottom:5}} placeholder="Instagram "></Input>
            <Input placeholder="Phonenumber "></Input>
        </div>

        <Button style={{marginTop: 10, width:70, height:50, alignSelf:"center"}} type="default" onClick={
            () =>{  
                console.log(userData.color)
            }
        }>OK
        </Button>
    
    </div>
       
       <div style={{position:"absolute", display:"flex",flexDirection:"row",bottom:20, marginLeft:30, marginRight:30,marginTop:60, justifyContent:"space-between"}}>
           <Link to={"/"}><ArrowLeftOutlined style={{fontSize:24, color:"black"}}/></Link>
       </div>
       
       </motion.div>
    );
    
}


export default Social;