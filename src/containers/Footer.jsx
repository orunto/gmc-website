import Logo from '../images/Logo.png';
import { ReactComponent as FooterInstaIco } from '../images/FooterInstaIco.svg';
import { ReactComponent as FooterTwitterIco } from '../images/FooterTwitterIco.svg';
import { ReactComponent as FooterFacebookIco } from '../images/FooterFacebookIco.svg';
import { ReactComponent as FooterWhatsappIco } from '../images/FooterWhatsappIco.svg';
import { ReactComponent as FooterLinkedInIco } from '../images/FooterLinkedInIco.svg';

import '../css/Components.css';

const Footer = () => {
    return(
        <footer>
            <div className='FooterLinksContainer'>
                <div className="FooterLinks">
                    <p>Company</p>
                    <a href='https://www.gentlemenscrib.com/company'>About Us</a>
                    <a href='https://reads.gentlemenscrib.com'>Reads</a>
                    <a href='#'>FAQs</a>
                </div>

                <div className="FooterLinks">
                    <p>Products</p>
                    <a href='https://starter.gentlemenscrib.com'>Starter Packs</a>
                    <a href='https://wa.me/2348027132741'>Community</a>
                    <a href='#tel'>Mobile App</a>
                </div>

                <div className="FooterLinks">
                    <p>Legal</p>
                    <a href='https://www.gentlemenscrib.com/privacy'>Cookies and Privacy Policy</a>
                    <a href='https://www.gentlemenscrib.com/terms'>Terms of Service</a>
                </div>

                <div className="FooterLinks" id="footersocialscontainer">
                    <p>Get In Touch</p>
                    <div id="footersocials">
                        <a href='https://instagram.com/gentlemens.crib_?igshid=YmMyMTA2M2Y=' target='_blank' rel="noreferrer">Our Instagram<FooterInstaIco/></a>
                        <a href='https://twitter.com/gentlemenscrib' target='_blank' rel="noreferrer">Our Twitter<FooterTwitterIco/></a>
                        <a href='https://wa.me/2348027132741' target='_blank' rel="noreferrer">Our Whatsapp<FooterWhatsappIco/></a>
                        <a href='https://www.facebook.com/profile.php?id=100067959218609' target='_blank' rel="noreferrer">Our Facebook<FooterFacebookIco/></a>
                        <a href='https://www.linkedin.com/company/gentlemens-crib/' target='_blank' rel="noreferrer">Our LinkedIn<FooterLinkedInIco/></a>
                    </div>
                    <span>support@gentlemenscrib.com</span>
                    <span>Block 2, Flat 6, Baba Omojola Estate, Bagada, Lagos</span>
                </div>
            </div>

            <hr/>

            <div className='EndCredits'>
                <span>© 2022 Gentlemen's Crib. All rights reserved</span>
                <a href='https://www.gentlemenscrib.com'><img src={Logo} alt="Logo"/></a>
                <span><a href='https://www.gentlemenscrib.com/terms'>Terms of Service</a> | <a href='https://www.gentlemenscrib.com/privacy'>Privacy Policy</a></span>
            </div>
        </footer>
    )
}

export default Footer;