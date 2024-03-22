import { ArrowLeftOutlined, ArrowRightOutlined } from "@ant-design/icons";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {color, motion} from 'framer-motion'
import { Button, DatePicker, Input, Select, Switch } from "antd";
import { useGlobalContext } from "../components/GlobalContext";
import { useRef, useState } from "react";
import User from '../components/User';
import DateSelect from "../components/DateSelect";



const Social = () => {
   const navigate = useNavigate()
   const location = useLocation()
   const [date, setDate] = useState(new Date())
   
   var instaInput = ""
    var telInput = ""



   const userData :User = location.state
   
  

    return (

        <motion.div 
       initial={{opacity:0}}
       animate={{opacity:1}}
       exit={{y:"100%"}}
       transition={{duration:1}}
       style={{position:'absolute',display:"flex",flexDirection: "column", width:"100%", height: "100%", backgroundColor: userData.color }}>
       
       
       <h1 style={{fontSize:55, marginLeft:10, alignSelf:"center", color:"#f7f7f7"}}>Some last information</h1>
        
    <div style={{display:"flex", flexDirection:"column" ,alignSelf:"center", justifyContent:"center", width:230}}>
        
        
        <DateSelect setDate={setDate}/>

        <div style={{display:"flex", flexDirection:"column"}}>
            <h3 style={{marginBottom:8, color:"#f7f7f7"}}>Socials 🌎 (not required)</h3>
            <Input style={{marginBottom:5}} placeholder="Instagram" onChange={e => instaInput = e.target.value}></Input>
            <Input placeholder="Phonenumber" onChange={e => telInput = e.target.value}></Input>
        </div>

        <Button style={{marginTop: 10, width:70, height:50, alignSelf:"center"}} type="default" onClick={
            () =>{  
                userData.social = {insta: instaInput, phone: telInput}
                userData.end = date
                navigate("/Add/Position", {state:{name:userData.name, color: userData.color, place:userData.place, end: userData.end, social: userData.social}})
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