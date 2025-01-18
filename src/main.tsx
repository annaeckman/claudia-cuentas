import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { Lang } from './utils/useLang.ts'
import App from './components/App/App.tsx'

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <App />
    </StrictMode>
)
