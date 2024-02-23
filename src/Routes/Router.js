import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../Layout/MainLayout';
import Home from '../components/Home/Home';
import Singup from '../components/Singup/Singup';
import Singin from '../components/Singin/Singin';

export const router =createBrowserRouter([
    {path:'/',
    element:<MainLayout/>,
    children:[
        {path:'/home',element:<Home/>},
        {path:'/singup',element:<Singup/>},
        {path:'/singin',element:<Singin/>}

]}
])
   


