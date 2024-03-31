import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Header } from './components/Header/Header.jsx'
import { AboutPage } from './components/About/About.jsx'
import 'react-bootstrap/dist/react-bootstrap.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';  
import { Footer } from './components/Footer/Footer.jsx'

function App() {

  return (
    <>
    <Header></Header>
    <AboutPage />
    <Footer />
      
    </>
  )
}

export default App
