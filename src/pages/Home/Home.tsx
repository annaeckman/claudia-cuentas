import './Home.css'
import claudia from '../../assets/clau.jpeg'
import CoraCenter from '../../components/CoraCenter/CoraCenter'
import ContactMe from '../../components/ContactMe/ContactMe'
import { claudiaDescription, claudiaSubheader } from './Content'
import useLang from '../../utils/useLang'
import hummingbird from '../../assets/hummingbird.png'

function Home(): JSX.Element {
    const lang = useLang()

    return (
        <>
            <div className="home">
                <img src={hummingbird} alt="" className="home__hummingbird" />
                <img src={hummingbird} alt="" className="home__hummingbird" />
                <div className="home__content">
                    <img src={claudia} alt="" className="home__image" />
                    <div className="home__text-container">
                        <h1 className="home__header">Claudia Cuentas</h1>
                        <h2 className="home__sub-header">
                            {claudiaSubheader[lang === 'en' ? 'es' : 'en']}
                        </h2>
                        <p className="home__description">
                            {claudiaDescription[lang === 'en' ? 'es' : 'en']}
                        </p>
                    </div>
                </div>
            </div>
            <CoraCenter />
            <ContactMe />
        </>
    )
}

export default Home
