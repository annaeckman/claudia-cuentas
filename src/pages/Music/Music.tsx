import ContactMe from '../../components/ContactMe/ContactMe'
import './Music.css'

function Music(): JSX.Element {
    return (
        <>
            <div className="music">
                <iframe
                    className="music__spotify"
                    src="https://open.spotify.com/embed/artist/42ICyqclgLpJxKWZX0HzXk?utm_source=generator"
                    width="80%"
                    height="700"
                    frameBorder="0"
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy"
                ></iframe>
            </div>
            <ContactMe />
        </>
    )
}
export default Music
