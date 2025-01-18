import './Home.css'
import claudia from '../../assets/claudia.jpeg'
import CoraCenter from '../../components/CoraCenter/CoraCenter'
import ContactMe from '../ContactMe/ContactMe'
import { claudiaDescription, claudiaSubheader } from './Content'
import useLang from '../../utils/useLang'

function Home(): JSX.Element {
    const lang = useLang()

    return (
        <>
            <div className="home">
                <div className="home__image-container">
                    <img src={claudia} alt="" className="home__image" />
                </div>
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
            <CoraCenter />
            <ContactMe />
        </>
    )
}

export default Home
