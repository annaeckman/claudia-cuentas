import { useState } from 'react'
import './App.css'
import { Link } from 'react-router'
import { title, claudiaDescription } from '../../utils/copy.tsx'
import { useParams } from 'react-router'
import useLang from '../../utils/useLang.ts'
import Nav from '../Nav/Nav.tsx';
import Home from '../Home/Home.tsx';
import CoraCenter from '../CoraCenter/CoraCenter.tsx';
import Footer from '../Footer/Footer.tsx';

// whenever I change the language: add as onClick: document.documentElement.lang = lang

function App(): JSX.Element{
  const lang = useLang();

  return (
    
      <div>
        <Nav />
        <Home />
        <CoraCenter />
        <Footer />
      </div>
      
      
  )
  }


export default App
