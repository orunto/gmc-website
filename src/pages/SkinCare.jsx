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
                <a href="https://wa.me/2348137290744"><Button>Get Started</Button></a>
            </div>
        </div>
    )
}

export default SkinCare;