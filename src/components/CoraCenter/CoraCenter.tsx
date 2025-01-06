import "./CoraCenter.css";
import coraLogo from "../../assets/Cora+Logo.png";
import instagram from "../../assets/instagram-icon.png";
import { coraCenterDescription } from "../../utils/copy";
import useLang from '../../utils/useLang.ts'

function CoraCenter(): JSX.Element {
    const lang = useLang();

    return(
        <><img src={coraLogo} alt="logo for cora center" className="cora__logo" />
        <a href="https://www.coracenter.org/" target="_blank" className="cora__link">Cora Center</a>
    <a
    href="https://www.instagram.com/coracenterportland/"
    target="_blank"
    className="cora__instagram-link"
  >
    <img src={instagram} alt="" className="cora__instagram" />
  </a>
  <p className="cora__description">{coraCenterDescription[lang]}</p>
  </>
    )
}
export default CoraCenter;