import React, { useEffect, useState } from 'react';
import './App.css';
import { Button, ConfigProvider, theme } from 'antd';
import MapComponent from './components/MapComponent';
import logo from './assets/Logo.png'
import { PlusOutlined, SearchOutlined } from '@ant-design/icons';



const App: React.FC = () => {
  const bgColors = ['#fa8c16','#fadb14','#52c41a',"#f5222d", "#722ed1","#1677ff"];  
  const [primary, setPrimary] = useState(bgColors[Math.floor(Math.random() * bgColors.length)])
  useEffect(()=>{
    document.body.style.backgroundColor = primary;
  },[primary])
  
  
  
  return (
    
  <ConfigProvider theme={{ token: { colorPrimary: primary}, components: { Button: {defaultColor: primary, defaultShadow: "0 4px 2px rgba(0, 0, 0, 0.2)", defaultBorderColor:"#ffffff", fontWeight:700} } }}>
    
    <div>
    <MapComponent primaryColor={primary}/>
    <div style={{display:"flex",flexDirection:"column", position:"absolute", height:"100%", width:"100%", backgroundColor:"rgba(0,0,0,0.2)",}}>
            
            <img width={200} src={logo} style={{alignSelf:"center"}}/>
            
            <div style={{display:"flex",flexDirection:"column", position:"absolute", bottom:50, width:200, alignSelf:"center"}}>
                <Button size='large' shape='round' style={{marginBottom:10,height:50}} type='default'>Add<PlusOutlined /></Button>
                <Button  size= 'large' shape='round' style={{height:50}}type='default'>Find <SearchOutlined/></Button>   
            </div>
            
            
        </div>
    </div>
    
  </ConfigProvider>
  
  );
}

export default App;
