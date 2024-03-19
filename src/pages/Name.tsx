import { ArrowLeftOutlined, ArrowRightOutlined } from "@ant-design/icons";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {color, motion} from 'framer-motion'
import { Button, Input } from "antd";
import { useGlobalContext } from "../components/GlobalContext";
import { useRef, useState } from "react";
import User from '../components/User';



const Name = () => {
   const location = useLocation()
   const navigate = useNavigate()
   
   const {primary,setPrimary} = useGlobalContext()
   setPrimary(location.state.color);
   

   const [input, setInput] = useState("");

   const userData = new User("",location.state.color,"","","")

    
    return (

        <motion.div 
       initial={{opacity:0}}
       animate={{opacity:1}}
       exit={{opacity:0}}
       transition={{duration:1}}
       style={{position:'absolute',display:"flex",flexDirection: "column", width:"100%", height: "100%", backgroundColor: location.state.color}}>
       
       
       <h1 style={{fontSize:55, marginLeft:10, alignSelf:"center", color:"#f7f7f7"}}>What is your Name?</h1>
    
    <div style={{display:"flex", flexDirection:"column" ,alignSelf:"center", justifyContent:"center", marginTop:150}}>
        
        <Input  onChange={e => (setInput(e.target.value))} style={{width:300,borderTopWidth:0, borderLeftWidth:0, borderRightWidth:0, backgroundColor:"transparent", color:"#f7f7f7", fontWeight:800}}></Input>
        <Button style={{marginTop: 10, width:70, height:50, alignSelf:"center", color:location.state.color}} type="default" onClick={
            () =>{
              userData.name=input
              navigate("/Add/Social", {state:{name: userData.name, color: userData.color, place:userData.place, social:userData.social, end:userData.end}})
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

export default Name;