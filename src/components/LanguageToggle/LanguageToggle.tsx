import "./LanguageToggle.css";
import { Link } from "react-router";
import useLang from '../../utils/useLang.ts'

function LanguageToggle(): JSX.Element {
    const lang = useLang();
    const handleLanguageClick = () => {
        lang === 'en' ? 'es' : 'en';
    }

    return(
        <div className="switch__container">

        <p className="switch__text">in english</p>
        <label className="switch__label">
            <input onClick={handleLanguageClick} type="checkbox" className="switch__box" />
            <span className="switch__slider"></span>
        </label>
        <p className="switch__text">en espanol</p>
        </div>
    )
}
export default LanguageToggle;