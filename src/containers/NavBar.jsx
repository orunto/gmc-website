import Logo from '../images/Logo.png';
import LogoBlack from '../images/LogoBlack.png';
import LogoMobile from '../images/LogoMobile.png';
import { ReactComponent as MenuIco} from '../images/MenuIco.svg';
import { ReactComponent as CancelIco} from '../images/MenuIco.svg';
import { ReactComponent as ProductDropdown} from '../images/ProductDropdown.svg';
import { Button } from '../components';
import '../css/NavBar.css';




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
function ProductDrop () {   
    // const productdropdown = document.querySelector("productdropdown");
    const productsubpages = document.querySelector("#productsubpages");
    // const cancel = document.querySelector("#cancel");

    // nav.style.height = "380px";
    productsubpages.style.display = "flex";
    // cancel.style.display = "block";
}

function ProductFold () {
    // const productdropdown = document.querySelector("productdropdown");
    const productsubpages = document.querySelector("#productsubpages");

    productsubpages.style.display = "none";
}

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
                <ul>
                    <li onMouseEnter={ProductDrop}>Products <ProductDropdown/></li>
                    <ul id='productsubpages'  onMouseLeave={ProductFold}>
                        <a href='#'><li>Starter Packs</li></a>
                        <a href='https://wa.me/2348027132741'><li>Community</li></a>
                        <a href='#tel'><li>Mobile App</li></a>
                    </ul>
                </ul>
                <li><a href='https://company.gentlemenscrib.com'>Company</a></li>
                <li>Support</li>
                <li><a href='https://reads.gentlemenscrib.com'>Reads</a></li>
            </ul>

            <a href='https://reads.gentlemenscrib.com'><Button>Visit Crib</Button></a>
        </nav>
    )
}

export default NavBar;