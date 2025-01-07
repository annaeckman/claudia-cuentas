import "./Home.css";
import claudia from "../../assets/claudia.jpeg";


function Home(): JSX.Element {
    return(
        <div className="home">
        <div className="home__image-container">
            <img src={claudia} alt="" className="home__image" />
        </div>
        <div className="home__text-container">
            <h1 className="home__header">Claudia Cuentas</h1>
            <h2 className="home__sub-header">Artist, therapist, educator at the intersection of art, trauma recovery, cultural identity, indigenous knowledge and the decolonization of healing. </h2>
            <p className="home__description"></p>
            </div>
            </div>
    )
}

export default Home;