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
    const nav = document.querySelector("nav")
    const formen = document.querySelector(".ForMen")
    const productsubpages = document.querySelector("#productsubpages")
    // const productdropdown = document.querySelector("productdropdown")
    // const cancel = document.querySelector("#cancel")

    nav.style.height = "580px";
    productsubpages.style.display = "flex";
    // nav.style.background = "black"
    // cancel.style.display = "block";
}

function ProductFold () {
    const nav = document.querySelector("nav");
    const productsubpages = document.querySelector("#productsubpages");
    // const productdropdown = document.querySelector("productdropdown");

    nav.style.height = "380px";
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
                    <li onMouseEnter={ProductDrop} onClick={ProductDrop}>Products <ProductDropdown/></li>
                    <ul id='productsubpages'  onMouseLeave={ProductFold}>
                        <a onClick={ProductFold} href='#findastore'><li>Find a Store Close to You</li></a>
                        <a onClick={ProductFold} href='#findacreator'><li>Find a Local Creator</li></a>
                        <a onClick={ProductFold} href='https://shop.gentlemenscrib.com/collections/starter-packs'><li>Starter Packs</li></a>
                        <a onClick={ProductFold} href='https://www.gentlemenscrib.com/community'><li>Community</li></a>
                        <a onClick={ProductFold} href='https://www.gentlemenscrib.com/mobileapp'><li>Mobile App</li></a>
                        <a onClick={ProductFold} href='https://www.gentlemenscrib.com/skincare'><li>Skin Care</li></a>
                    </ul>
                </ul>
                <li><a href='https://www.gentlemenscrib.com/company'>Company</a></li>
                <li><a href='https://www.gentlemenscrib.com/support'>Support</a></li>
                <li><a href='https://reads.gentlemenscrib.com'>Reads</a></li>
            </ul>

            <a href='https://reads.gentlemenscrib.com'><Button>Visit Crib</Button></a>
        </nav>
    )
}

export default NavBar;