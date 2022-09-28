import { Helmet } from 'react-helmet';
import { Footer, NavBar } from '../containers';
import { Button } from '../components'

import '../css/Reads.css';
import '../css/MobileApp.css';

const MobileApp = () => {
    return(
        <div className='MobileApp'>
            <Helmet>
                <title>Gentlemen's Crib | Mobile App</title>
            </Helmet>
            <NavBar/>
            <div className='MobileAppHeader'>
                <div className='MobileAppExperience'>
                    <h3>Experience the Crib</h3>
                    <h2>Style At Your Fingertips</h2>
                    <a href=''><Button>Learn More</Button></a>
                </div>

                <div className='HomePageDisplay'></div>

                <div className='MobileAppBuzz'>
                    <h3>Accesible style options</h3>
                    <h3>Built for you. Just for you.</h3>
                </div>
            </div>

            <div className='AppPitch'>
                <div className='AppPitchImage' id="stylecalendar"></div>

                <div className='AppPitchDescription'>
                    <h3>Style Calendar</h3>
                    <p>Stay classy by using  our AI models to plan your daily outfits.</p>
                    <p>Let it learn how best to work for you with edits, app searches and correspondence with our in house stylists.</p>
                    <p>Style has never been easier</p>
                </div>
            </div>

            <div className='AppPitch'>
                <div className='AppPitchDescription'>
                    <h3>The Google For Style</h3>
                    <p>Find any and everything you need to know about men’s fashion on our app.</p>
                    <p>Our search feature is trained to find what you need when you do without a need for a second try.</p>
                    <p>Our recommendations are also suited just for you based on your activity,</p>
                </div>

                <div className='AppPitchImage' id="googleforstyle"></div>
            </div>

            <div className='AppPitch'>
                <div className='AppPitchImage' id='meetcreators'></div>

                <div className='AppPitchDescription'>
                    <h3>Meet Creators</h3>
                    <p>You no longer need to search tirelessly for the perfect brogues maker when you can have them delivered to you at your fingertips.</p>
                    <p>We aim to be a one stop shop for the African Male fashion creator space.</p>
                </div>
            </div>

            <div className='AppPitch'>
                <div className='AppPitchDescription'>
                    <h3>Items for sale</h3>
                    <p>We won’t just show suggest an outfit to you, we’ll tell you where to find it.</p>
                    <p>Shop recommendations as well as deals from the Crib itself are available to you.!!</p>
                </div>

                <div className='AppPitchImage' id='itemsforsale'></div>
            </div>

            <Footer/>
        </div>
    )
}

export default MobileApp;