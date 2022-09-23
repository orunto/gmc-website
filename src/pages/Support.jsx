import { Helmet } from 'react-helmet';
import { Button } from '../components';
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
                <form className='SupportFieldContainer' action='https://submit-form.com/ZcTzSW3f'>
                <input
                    type="hidden"
                    name="_feedback.success.title"
                    value="Your message has been recieved!"
                    id="waitlisth2"
                />
                <input
                    type="hidden"
                    name="_feedback.success.message"
                    value="We'll follow up with you shortly"
                    id="waitlisth2"
                />
                    <input required name='Name' className='RegularField' type='text' placeholder='Name'/>
                    <input requiredname='Email' className='RegularField' type='email' placeholder='Email Address'/>
                    <input requiredname='Phone Number' className='RegularField' type='tel' placeholder='Phone Number'/>
                    <select required name='Topic' className='RegularField'>
                        <option value="" disabled selected>Select a topic</option>
                        <option value="starter packs">Starter Packs</option>
                        <option value="our app">Our app</option>
                        <option value="skin care">Skin Care</option>
                    </select>
                    <textarea required name='Message' className='MessageField' type='text' placeholder='Message'></textarea>
                    <Button type='submit'>Send</Button>
                </form>
            </div>
            <Footer/>
        </div>
    )
}

export default Support;