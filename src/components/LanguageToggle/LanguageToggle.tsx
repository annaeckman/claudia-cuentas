import './LanguageToggle.css'
import { useNavigate } from 'react-router'
import useLang from '../../utils/useLang.ts'

function LanguageToggle(): JSX.Element {
    const navigate = useNavigate()
    const lang = useLang()

    const handleLanguageClick = () => {
        navigate(`/${lang === 'en' ? 'es' : 'en'}`)
    }

    return (
        <div className="switch__container">
            <p className="switch__text">in english</p>
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
            <p className="switch__text">en espanol</p>
        </div>
    )
}
export default LanguageToggle

{
    /* <Link className="nav__lang" to={`/${lang === 'en' ? 'es' : 'en'}`}>
{title[lang === 'en' ? 'es' : 'en']}
</Link> */
}

//before we used a link which manually changed the domain...
