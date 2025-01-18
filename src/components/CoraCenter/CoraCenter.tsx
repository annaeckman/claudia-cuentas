import './CoraCenter.css'
import coraLogo from '../../assets/Cora+Logo.png'
import instagram from '../../assets/instagram-icon.png'
import { coraCenterDescription } from '../../utils/copy'
import useLang from '../../utils/useLang.ts'

function CoraCenter(): JSX.Element {
    const lang = useLang()

    return (
        <div className="cora">
            <div className="cora__image-container">
                <img
                    src={coraLogo}
                    alt="logo for cora center"
                    className="cora__image"
                />
            </div>
            <div className="cora__text-container">
                <div className="cora__links">
                    <a
                        href="https://www.coracenter.org/"
                        target="_blank"
                        className="cora__link"
                    >
                        Cora Center
                    </a>
                    <a
                        href="https://www.instagram.com/coracenterportland/"
                        target="_blank"
                        className="cora__instagram-link"
                    >
                        <img
                            src={instagram}
                            alt=""
                            className="cora__instagram"
                        />
                    </a>
                </div>
                <p className="cora__description">
                    {coraCenterDescription[lang]}
                </p>
            </div>
        </div>
    )
}
export default CoraCenter
