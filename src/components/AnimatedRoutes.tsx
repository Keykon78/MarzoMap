import React, { useContext } from 'react';
import {Route, Routes, useLocation } from 'react-router-dom';
import Home from '../pages/Home';
import Add from '../pages/Add';
import { useGlobalContext } from './GlobalContext';
import { AnimatePresence } from 'framer-motion';


const AnimatedRoutes = () => {
    
    const {primary} = useGlobalContext()
    const location = useLocation();
    
    return (
        <div>
        <AnimatePresence>
        <Routes location={location} key={location.pathname}>
            <Route path='/' element={<Home primaryColor={primary}/>}/> 
            <Route path='/Add/' element={<Add/>}/>
        </Routes>
        </AnimatePresence>
        </div>
    );
}

export default AnimatedRoutes;