import { useState } from 'react'
import './App.css'
import { Link } from 'react-router'
import { title, claudiaDescription } from '../../utils/copy.tsx'
import { useParams } from 'react-router'
import useLang from '../../utils/useLang.ts'
import Nav from '../Nav/Nav.tsx'
import Home from '../../pages/Home/Home.tsx'
import CoraCenter from '../CoraCenter/CoraCenter.tsx'
import Footer from '../Footer/Footer.tsx'
import { BrowserRouter, Routes, Route, Navigate, Outlet } from 'react-router'
import { Lang } from '../../utils/useLang.ts'
import Music from '../../pages/Music/Music.tsx'
import Services from '../../pages/Services/Services.tsx'
import ContactMe from '../../pages/ContactMe/ContactMe.tsx'

const defaultLang: Lang = 'en'

function App(): JSX.Element {
    const lang = useLang()

    return (
        <BrowserRouter>
            <Routes>
                {/* Redirect "/" to "/en" */}
                <Route index element={<Navigate to={defaultLang} />} />
                {/* Dynamic language route */}
                <Route
                    path=":lang"
                    element={
                        <>
                            <Nav /> <Outlet /> <Footer />
                        </>
                    }
                >
                    {/* Home route for "/:lang" */}
                    <Route index element={<Home />} /> {/* Other routes */}
                    <Route path="music" element={<Music />} />
                    <Route path="services" element={<Services />} />
                    <Route path="contact-me" element={<ContactMe />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App

// with this file structure, the footer isn't laying below the rest of the components
// (though I'm not sure why since outlet is being used)

// whenever I change the language: add as onClick: document.documentElement.lang = lang
