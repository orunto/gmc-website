import { Helmet } from 'react-helmet';
import { Footer, NavBar } from '../containers';

import '../css/Reads.css';
import '../css/Standards.css';

const Support = () => {
    return(
        <div className='Support'>
            <Helmet>
                <title>Gentlemen's Crib | Support</title>
            </Helmet>
            <NavBar/>
            <div className='StandardHeader'>
                <h1>We’re Here to Support You</h1>
                <h4>So get in touch</h4>
                <form className='SupportFieldContainer'>
                    <input className='RegularField' type='text' placeholder='Name'/>
                    <input className='RegularField' type='email' placeholder='Email Address'/>
                    <input className='RegularField' type='tel' placeholder='Phone Number'/>
                    <select className='RegularField'>
                        <option>Starter Packs</option>
                        <option>Our app</option>
                        <option>Skin Care</option>
                    </select>
                    <input className='MessageField' type='text' placeholder='Message'/>
                    <input className='SubmitField' type='submit' placeholder='Send'/>
                </form>
            </div>
            <Footer/>
        </div>
    )
}

export default Support;