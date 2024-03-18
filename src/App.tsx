import React, { useEffect, useState } from 'react';
import './App.css';
import { Button, ConfigProvider, theme } from 'antd';
import MapComponent from './components/MapComponent';
import logo from './assets/Logo.png'
import { PlusOutlined, SearchOutlined } from '@ant-design/icons';
import { BrowserRouter } from 'react-router-dom';
import AnimatedRoutes from './components/AnimatedRoutes';
import {GlobalContext} from './components/GlobalContext'
import User from './components/User';





const App: React.FC = () => {
  
  
  const bgColors = ['#fa8c16','#fadb14','#52c41a',"#f5222d", "#722ed1","#1677ff"];  
  const [primary, setPrimary] = useState<string>(bgColors[Math.floor(Math.random() * bgColors.length)])
  return (
    
  <ConfigProvider theme={{ token: { colorPrimary: primary}, components: { Button: {defaultColor: primary, defaultShadow: "0 4px 2px rgba(0, 0, 0, 0.2)", defaultBorderColor:"#ffffff", fontWeight:700} } }}>
    <BrowserRouter>
      <GlobalContext.Provider value={{primary,setPrimary}}>

      <AnimatedRoutes/>
      </GlobalContext.Provider>
    </BrowserRouter>
  </ConfigProvider>
  
  );
}

export default App;

