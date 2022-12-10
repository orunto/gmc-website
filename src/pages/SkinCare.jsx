import { Helmet } from 'react-helmet';
import { NavBar } from '../containers';
import { Button } from '../components'

import '../css/Reads.css';
import '../css/Standards.css';

const SkinCare = () => {
    return(
        <div className='SkinCare'>
            <Helmet>
                <title>Gentlemen's Crib | Skin Care</title>
            </Helmet>
            <NavBar/>
            <div className='StandardHeader'>
                <h1>Free Skincare Consultations for Men</h1>
                <h4>Talk to an expert on improving your skin’s health and get recommendations for routines and products within your budget.</h4>
                <a href="https://wa.me/2349072419839?text=Hello%2C%20I%20would%20like%20the%20Gentlemen%27s%20Crib%20Free%20men%27s%20Skincare%20consultation%20and%20recommendation"><Button>Start Free Consultation</Button></a>
            </div>
        </div>
    )
}

export default SkinCare;