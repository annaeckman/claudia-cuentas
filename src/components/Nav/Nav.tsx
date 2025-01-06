import { Link } from "react-router";
import useLang from "../../utils/useLang";
import "./Nav.css";
import LanguageToggle from '../LanguageToggle/LanguageToggle.tsx';

function Nav(): JSX.Element {
    const lang = useLang();

    return (
        <div className="nav">
            <Link className="nav__logo" to="/">Claudia Cuentas</Link>
         <LanguageToggle />   
        <div className="nav__links">
            <Link to="/" className="nav__link">About</Link>
            <Link to="/" className="nav__link">Services</Link>
            <Link to="/" className="nav__link">Music</Link>
            <Link to="/" className="nav__link">Contact</Link>
        </div>
    
        </div>
    );

}

export default Nav;