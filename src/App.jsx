import React from 'react';
import './App.css'
import  Header  from './components/Header/Header.jsx'
import 'react-bootstrap/dist/react-bootstrap.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';  
import { Footer } from './components/Footer/Footer.jsx'
import { Outlet } from 'react-router-dom'



function App() {
  return (
    <div className='d-flex flex-column  layout'>
    <Header />
    <Outlet />
    {/* <Footer /> */}
    </div>
  )
}

export default App
