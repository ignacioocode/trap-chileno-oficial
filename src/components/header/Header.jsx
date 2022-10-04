import './Header.css'
import banner from '../../assets/img/banner.JPG'
import NavBar from './navBar/NavBar'

const Header = () => {
    return(
        <header>
            <NavBar/>
            <div className="Container">
                <h1>
                    <p>Música</p>
                    <p>@TrapChileno</p>
                </h1>
                {/* <h5>Descripción</h5>
                <p>@TrapChileno es un canal de música Urbana donde podrás encontrar las últimas noticias, previews, etc sobre Chile.</p>                         */}
            </div>
            <div className="ImgContainer">
                <img src={banner} alt="" />
            </div>
        </header>
    )
}

export default Header