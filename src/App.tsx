import React, { useEffect, useState } from 'react';
import './App.css';
import { Button, ConfigProvider, theme } from 'antd';




const App: React.FC = () => {
  const bgColors = ['#fa8c16','#fadb14','#52c41a',"#f5222d", "#722ed1","#1677ff"];  
  const [primary, setPrimary] = useState(bgColors[Math.floor(Math.random() * bgColors.length)])
  useEffect(()=>{
    document.body.style.backgroundColor = primary;
  },[primary])
  
  
  
  return (
    
  <ConfigProvider theme={{ token: { colorPrimary: primary} }}>
    <Button type='primary'>Moin</Button>
    
  </ConfigProvider>
  
  );
}

export default App;
