import React, { useEffect, useState } from 'react';
import './App.css';
import { Button, ConfigProvider, theme } from 'antd';
import MapComponent from './components/MapComponent';
import logo from './assets/Logo.png'
import { PlusOutlined, SearchOutlined } from '@ant-design/icons';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Add from './pages/Add';




const App: React.FC = () => {
  const bgColors = ['#fa8c16','#fadb14','#52c41a',"#f5222d", "#722ed1","#1677ff"];  
  const [primary, setPrimary] = useState(bgColors[Math.floor(Math.random() * bgColors.length)])
  
  
  
  return (
    
  <ConfigProvider theme={{ token: { colorPrimary: primary}, components: { Button: {defaultColor: primary, defaultShadow: "0 4px 2px rgba(0, 0, 0, 0.2)", defaultBorderColor:"#ffffff", fontWeight:700} } }}>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home primaryColor={primary}/>}/> 
        <Route path='Add/' element={<Add/>}/>
      </Routes>
    </BrowserRouter>
  </ConfigProvider>
  
  );
}

export default App;
