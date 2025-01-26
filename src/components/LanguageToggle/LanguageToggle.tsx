import './LanguageToggle.css'
import { useNavigate, useLocation } from 'react-router'
import useLang from '../../utils/useLang.ts'

function LanguageToggle(): JSX.Element {
    const navigate = useNavigate()
    const location = useLocation()
    const currentLocationString = location.pathname.split('/')[2]
    const lang = useLang()

    const handleLanguageClick = () => {
        navigate(`/${lang === 'en' ? 'es' : 'en'}/${currentLocationString}`)
        //if you click it on a different page than home it brings you home
    }

    return (
        <div className="switch__container">
            <p className="switch__text">en espanol</p>
            <label className="switch__label">
                <input
                    onClick={handleLanguageClick}
                    type="checkbox"
                    className="switch__box"
                />
                <span
                    className={
                        lang === 'en'
                            ? 'switch__slider switch__slider_en'
                            : 'switch__slider switch__slider_es'
                    }
                ></span>
            </label>
            <p className="switch__text">in english</p>
        </div>
    )
}
export default LanguageToggle
