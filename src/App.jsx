import React from 'react';
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Header } from './components/Header/Header.jsx'
import 'react-bootstrap/dist/react-bootstrap.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';  
import { Footer } from './components/Footer/Footer.jsx'
import { Outlet } from 'react-router-dom'



function App() {

  return (
    <div className='d-flex flex-column justify-content-between layout'>
    <Header></Header>
    <Outlet />
    <Footer />
      
    </div>
  )
}

export default App
