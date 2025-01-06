import "./LanguageToggle.css";
import { Link } from "react-router";

function LanguageToggle(): JSX.Element {
    return(
        <div className="switch__container">

        <p className="switch__english">in english</p>
        <label className="switch__label">
            <input type="checkbox" className="switch__box" />
            <span className="switch__slider"></span>
        </label>
        <p className="switch__espanol">en espanol</p>
        </div>
    )
}
export default LanguageToggle;