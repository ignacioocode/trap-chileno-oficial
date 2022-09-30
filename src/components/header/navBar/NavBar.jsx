import { NavLink } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHouse } from "@fortawesome/free-solid-svg-icons"
import './NavBar.css'

const NavBar = () => {
    return (
        <nav>
            <div className="Logo">
                <NavLink to={'/'}>
                    <FontAwesomeIcon className={'icon'} icon={faHouse}/>
                </NavLink>
            </div>
            <div className="Routes">
                <NavLink className={'NavLink'} to={'/nosotros'}>Nosotros</NavLink>
                <NavLink className={'NavLink'} to={'/proyectos'}>Proyectos</NavLink>
                <NavLink className={'NavLink'} to={'/contacto'}>Contacto</NavLink>
            </div>
        </nav>
    )
}

export default NavBar