import Logo from '../images/Logo.png';
import { Button } from '../components';

import '../css/NavBar.css';

const NavBar = () => {
    return(
        <nav>
            <img src={Logo} alt="Logo"/>
            <ul>
                <li>Products</li>
                <li>Company</li>
                <li>Support</li>
                <li>Reads</li>
            </ul>

            <Button>Visit Crib</Button>
        </nav>
    )
}

export default NavBar;