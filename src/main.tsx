import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router';


createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
  <StrictMode>
    <Routes>
      <Route path="/" element={<Navigate to="/en" />} />
      <Route path="/:lang" element={<App />} />
      <Route path= "/:lang/about" element={<div />} />
    </Routes>
    <App />
  </StrictMode>
  </BrowserRouter>
)
