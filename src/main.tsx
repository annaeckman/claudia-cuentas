import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './components/App/App.tsx'
import { Lang } from './utils/useLang.ts'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router';

const defaultLang:Lang = 'en';

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
  <StrictMode>
    <Routes>
      <Route path="/" element={<Navigate to={`/${defaultLang}`} />} />
      <Route path="/:lang" element={<App />} />
      <Route path= "/:lang/about" element={<div />} />
    </Routes>
  </StrictMode>
  </BrowserRouter>
)
