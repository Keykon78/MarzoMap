import { ArrowLeftOutlined, ArrowRightOutlined } from "@ant-design/icons";
import { Link, useLocation } from "react-router-dom";
import {motion} from 'framer-motion'

const Name = () => {
   const location = useLocation()
   
    return (

        <motion.div 
       initial={{opacity:0}}
       animate={{opacity:1}}
       exit={{y:"100%"}}
       transition={{duration:1}}
       style={{position:'absolute',display:"flex",flexDirection: "column", width:"100%", height: "100%", backgroundColor: location.state.color}}>
       
       
       <h1 style={{fontSize:55, marginLeft:10, alignSelf:"center", color:"#f7f7f7"}}>What is your Name?</h1>
      
       
       <div style={{display:"flex",flexDirection:"row", marginLeft:30, marginRight:30,marginTop:60, justifyContent:"space-between"}}>
           <Link to={"/"}><ArrowLeftOutlined style={{fontSize:24, color:"black"}}/></Link>
           <ArrowRightOutlined  style={{fontSize:24, color:"lightgrey", alignSelf:"flex-end"}}/>
       </div>
       
       </motion.div>
    );
    
}

export default Name;