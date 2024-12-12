import { useState } from 'react'
import './App.css'
import { Link } from 'react-router'
import { title, claudiaDescription } from './copy.tsx'
import { useParams } from 'react-router'

type Lang = 'en' | 'es';

function App(): JSX.Element{
  const lang = useParams().lang as Lang;

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
