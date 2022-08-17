import Logo from '../images/Logo.png';
import LogoBlack from '../images/LogoBlack.png';
import LogoMobile from '../images/LogoMobile.png';
import { ReactComponent as MenuIco} from '../images/MenuIco.svg';
import { ReactComponent as CancelIco} from '../images/MenuIco.svg';
import { ReactComponent as ProductDropdown} from '../images/ProductDropdown.svg';
import { Button } from '../components';
import '../css/NavBar.css';

const readslocation = 'reads' + window.location;


function Drop () {
    const nav = document.querySelector("nav");
    const menu = document.querySelector("#menu");
    const cancel = document.querySelector("#cancel");

    nav.style.height = "380px";
    menu.style.display = "none";
    cancel.style.display = "block";
}

function Fold () {
    const nav = document.querySelector("nav");
    const menu = document.querySelector("#menu");
    const cancel = document.querySelector("#cancel");

    nav.style.height = "10px";
    cancel.style.display = "none";
    menu.style.display = "block";
}

// FOR WHEN I ADD IN THE PRODUCTS DROPDOWN
// function Drop () {   
//     const nav = document.querySelector("nav");
//     const menu = document.querySelector("#menu");
//     const cancel = document.querySelector("#cancel");

//     nav.style.height = "380px";
//     menu.style.display = "none";
//     cancel.style.display = "block";
// }

// function Fold () {
//     const nav = document.querySelector("nav");
//     const menu = document.querySelector("#menu");
//     const cancel = document.querySelector("#cancel");

//     nav.style.height = "10px";
//     cancel.style.display = "none";
//     menu.style.display = "block";
// }

const NavBar = () => {
    return(
        <nav id="nav">
            <a id="logowhite" href='https://www.gentlemenscrib.com'><img src={Logo} alt="Logo"/></a>
            <a href='https://www.gentlemenscrib.com'><img src={LogoBlack} id="logoblack" alt="Logo"/></a>
            <div className='MobileNavBar'>
                <img src={LogoMobile} alt="Logo" id="mobile"/>
                <MenuIco id="menu" onClick={Drop}/>
                <CancelIco id="cancel" onClick={Fold}/>
            </div>
            <ul>
                <li>Products <ProductDropdown/></li>
                <li><a href='https://company.gentlemenscrib.com'>Company</a></li>
                <li>Support</li>
                <li><a href='https://reads.gentlemenscrib.com'>Reads</a></li>
            </ul>

            <a href='https://reads.gentlemenscrib.com'><Button>Visit Crib</Button></a>
        </nav>
    )
}

export default NavBar;