import React, { useEffect, useState } from 'react';
import { Button, ConfigProvider, theme } from 'antd';
import logo from '../assets/Logo.png'
import { PlusOutlined, SearchOutlined } from '@ant-design/icons';
import { Link, useNavigate, useParams } from 'react-router-dom';
import MapComponent from '../components/MapComponent';
import {delay, motion} from 'framer-motion'

const Home = (props:{primaryColor:string}) => {
    const navigate = useNavigate();
    
return(
    
    <motion.div 
    
    exit={{height:"0%"}}
    transition={{duration:1}}
        style={{display:"flex",flexDirection:"column", position:"absolute", height:"100%", width:"100%", backgroundColor:"red"}}>
        
 {/*  <MapComponent primaryColor={props.primaryColor}/> */}
    <div
        
        style={{display:"flex",flexDirection:"column", position:"absolute", height:"100%", width:"100%", backgroundColor:"rgba(0,0,0,0.2)",}}>
            
            <img width={200} src={logo} style={{alignSelf:"center"}}/>
            <div style={{display:"flex",flexDirection:"column", position:"absolute", bottom:50, width:200, alignSelf:"center"}}>
                <Button onClick={() => navigate("/Add")} size='large' shape='round' style={{marginBottom:10,height:50}} type='default'>Add<PlusOutlined /></Button>
                <Button size= 'large' shape='round' style={{height:50}}type='default'>Find <SearchOutlined/> <Link to="/Add"></Link></Button>   
            </div>
            
            
        </div>
    </motion.div>
);
    
}

export default Home;