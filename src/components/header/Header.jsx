import { Outlet } from 'react-router'
import './Header.css'
import banner from '../../assets/img/banner.JPG'

const Header = ({children}) => {
    return(
        <header>
            {children}
                <div className="Container">
                    <Outlet/>
                </div>
                <div className="ImgContainer">
                    <img src={banner} alt="" />
                </div>
        </header>
    )
}

export default Header