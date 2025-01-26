import './ContactMe.css'
import pickle from '../../assets/pickle.jpeg'

function ContactMe(): JSX.Element {
    return (
        <div className="contact">
            <div className="contact__text-container">
                <h2 className="contact__sub-header">
                    If you're interested in learning more...{' '}
                </h2>
                <h3 className="contact__description">
                    Click here to contact Claudia
                </h3>
            </div>
            <div className="contact__image-container">
                <img src={pickle} alt="" className="contact__image" />
            </div>
        </div>
    )
}

export default ContactMe
