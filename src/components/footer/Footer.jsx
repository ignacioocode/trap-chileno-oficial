import './Footer.css'
import { faYoutube } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon, } from "@fortawesome/react-fontawesome"
import { faGithub } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
    return (
        <footer>
            <div className='DivTitle'>
                <p>Redes Sociales</p>
                <h3>Mantenerse en Contacto</h3>
            </div>
            <div className='DivIcon'>
                <a href="http://" target="_blank" rel="noopener noreferrer"></a>
                <FontAwesomeIcon icon={faYoutube} />
                <FontAwesomeIcon icon={faGithub} />
            </div>
        </footer>
    )
}

export default Footer