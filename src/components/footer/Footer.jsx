import './Footer.css'
import { faYoutube } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon, } from "@fortawesome/react-fontawesome"
import { faGithub } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
    return (
        <footer>
            <div className='DivTitle'>
                <p>Contacto</p>
                <h3>Mantenerse en Contacto</h3>
            </div>
            <div className='DivIcon'>
                <FontAwesomeIcon icon={faYoutube} />
                <FontAwesomeIcon icon={faGithub} />
            </div>
        </footer>
    )
}

export default Footer