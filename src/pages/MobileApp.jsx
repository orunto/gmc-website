import { Helmet } from 'react-helmet';
import { NavBar } from '../containers';
import { Button } from '../components'

import '../css/Reads.css';
import '../css/Standards.css';

const MobileApp = () => {
    return(
        <div className='MobileApp'>
            <Helmet>
                <title>Gentlemen's Crib | Mobile App</title>
            </Helmet>
            <NavBar/>
            <div className='StandardHeader'>
                <h2>Free Skincare Consultations for Men</h2>
                <h4>Talk to an expert on improving your skin’s health and get recommendations for routines and products within your budget.</h4>
                <a href="https://wa.me/2348137290744"><Button>Start Free Consultation</Button></a>
            </div>
        </div>
    )
}

export default MobileApp;