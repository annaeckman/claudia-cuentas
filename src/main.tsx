import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './components/App/App.tsx'
import { defaultLang, LANG_PARAM, useSetHtmlLang } from './hooks/useLang.ts'
import { BrowserRouter, Routes, Route, Navigate, Outlet } from 'react-router'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<HtmlLangSetter />}>
          <Route path="/" element={<Navigate to={`/${defaultLang}`} />} />
          <Route path={`/:${LANG_PARAM}`} element={<App />} />
          <Route path={`/:${LANG_PARAM}/about`} element={<div />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
)

function HtmlLangSetter(): JSX.Element {
  useSetHtmlLang()
  return <Outlet />
}
