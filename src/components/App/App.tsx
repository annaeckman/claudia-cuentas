import './App.css'
import { Link } from 'react-router'
import { title, claudiaDescription } from '../../utils/copy.tsx'
import { useLang } from '../../hooks/useLang.ts'

function App(): JSX.Element {
  const lang = useLang()

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
