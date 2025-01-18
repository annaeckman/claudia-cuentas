import './Services.css'
import flowers from '../../assets/flours.jpeg'
import CoraCenter from '../../components/CoraCenter/CoraCenter'

function Services(): JSX.Element {
    return (
        <>
            <div className="services">
                <div className="services__text-container">
                    <h2 className="services__header">Work with Claudia</h2>

                    <h3 className="services__subheader">Therapy</h3>
                    <p className="services__description">
                        Contrary to popular belief, Lorem Ipsum is not simply
                        random text.
                    </p>
                    <h3 className="services__subheader">Psilocybin Sessions</h3>
                    <p className="services__description">
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered alteration in
                        some form, by injected humour.
                    </p>
                    <h3 className="services__subheader">
                        Mentorship/Consulting
                    </h3>
                    <p className="services__description">
                        It is a long established fact that a reader will be
                        distracted by the readable content of a page when
                        looking at its layout.
                    </p>
                </div>
                <div className="services__image-container">
                    <img src={flowers} alt="" className="services__image" />
                </div>
            </div>
            <CoraCenter />
        </>
    )
}
export default Services
