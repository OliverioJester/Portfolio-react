import React from 'react'
import {Navigate, createHashRouter} from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import App from './App';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

const Routes = createHashRouter([
    {
      path: "/",
      element: <App/>,
      children: [
        {
          path: '/',
          element: <Navigate to="/home" />
         } ,  
         {
          path: "/home",
          element: <Home />,
        },
      ],
    },
    
    {
      path: "/about",
      element: <About />,
    },

    {
      path: "/contact",
      element: <Contact />,
    },

    {
      path: '*',
      element: <NotFound />,
    },
    
  ]);

export default Routes