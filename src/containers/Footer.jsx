import { ReactComponent as FooterInstaIco } from '../images/FooterInstaIco.svg';
import { ReactComponent as FooterTwitterIco } from '../images/FooterTwitterIco.svg';
import { ReactComponent as FooterFacebookIco } from '../images/FooterFacebookIco.svg';
import { ReactComponent as FooterWhatsappIco } from '../images/FooterWhatsappIco.svg';
import { ReactComponent as FooterLinkedInIco } from '../images/FooterLinkedInIco.svg';
import Logo from '../images/Logo.png';

import '../css/Components.css';

const Footer = () => {
    return(
        <footer>
            <div className='FooterLinksContainer'>
                <div className="FooterLinks">
                    <p>Company</p>
                    <a href='#'>About Us</a>
                    <a href='#'>Reads</a>
                    <a href='#'>FAQs</a>
                </div>

                <div className="FooterLinks">
                    <p>Products</p>
                    <a href='#'>Starter Packs</a>
                    <a href='#'>Community</a>
                    <a href='#tel'>Mobile App</a>
                </div>

                <div className="FooterLinks">
                    <p>Legal</p>
                    <a href='#'>Cookies and Privacy Policy</a>
                    <a href='#'>Terms of Service</a>
                </div>

                <div className="FooterLinks" id="footersocialscontainer">
                    <p>Get In Touch</p>
                    <div id="footersocials">
                        <a href='https://instagram.com/gentlemens.crib_?igshid=YmMyMTA2M2Y=' target='_blank' rel="noreferrer"><FooterInstaIco/></a>
                        <a href='https://twitter.com/gentlemenscrib' target='_blank' rel="noreferrer"><FooterTwitterIco/></a>
                        <a href='https://wa.me/2348027132741' target='_blank' rel="noreferrer"><FooterWhatsappIco/></a>
                        <a href='https://www.facebook.com/profile.php?id=100067959218609' target='_blank' rel="noreferrer"><FooterFacebookIco/></a>
                        <a href='https://www.linkedin.com/company/gentlemens-crib/' target='_blank' rel="noreferrer"><FooterLinkedInIco/></a>
                    </div>
                    <span>support@gentlemenscrib.com</span>
                    <span>Block 2, Flat 6, Baba Omojola Estate, Bagada, Lagos</span>
                </div>
            </div>

            <hr/>

            <div className='EndCredits'>
                <span>© 2020 Pepperest. All rights reserved</span>
                <img src={Logo} />
                <span><a>Terms of Service</a> | <a href=''>Privacy Policy</a></span>
            </div>
        </footer>
    )
}

export default Footer;