import Logo from '../images/Logo.png';
import LogoMobile from '../images/LogoMobile.png';
import { ReactComponent as MenuIco} from '../images/MenuIco.svg';
import { ReactComponent as ProductDropdown} from '../images/ProductDropdown.svg';
import { Button } from '../components';

import '../css/NavBar.css';

const NavBar = () => {
    return(
        <nav>
            <img src={Logo} alt="Logo"/>
            <div className='MobileNavBar'>
                <img src={LogoMobile} alt="Logo" id="mobile"/>
                <MenuIco id="menu"/>
            </div>
            <ul>
                <li>Products <ProductDropdown/></li>
                <li>Company</li>
                <li>Support</li>
                <li>Reads</li>
            </ul>

            <a href='/reads'><Button>Visit Crib</Button></a>
        </nav>
    )
}

export default NavBar;