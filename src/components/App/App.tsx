import { useState } from 'react'
import './App.css'
import { Link } from 'react-router'
import { title, claudiaDescription } from '../../utils/copy.tsx'
import { useParams } from 'react-router'
import useLang from '../../utils/useLang.ts'

// whenever I change the language: add as onClick: document.documentElement.lang = lang

function App(): JSX.Element{
  const lang = useLang();

  return (
    
      <div>
      <h1>{title[lang]}</h1>
      <Link to={`/${lang === 'en' ? 'es' : 'en'}`}>
          {title[lang === 'en' ? 'es' : 'en']}
        </Link>
        <p>{claudiaDescription[lang]}</p>
      </div>
      
      
  )
  }


export default App
