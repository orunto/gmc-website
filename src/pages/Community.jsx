import { Helmet } from 'react-helmet';
import { NavBar } from '../containers';
import { Button } from '../components'

import '../css/Reads.css';
import '../css/Standards.css';

const Community = () => {
    return(
        <div className='Community'>
            <Helmet>
                <title>Gentlemen's Crib | Community</title>
            </Helmet>
            <NavBar/>
            <div className='StandardHeader'>
                <h1>Join Our Community</h1>
                <h4>It’s well regulated across 5 platforms with a 1000+ members</h4>

                <div className='CommunityButtonContainer'>
                <a href="/start"><Button id="instabutton">Instagram</Button></a>
                <a href="/start"><Button id="twitterbutton">Twitter</Button></a>
                <a href="/start"><Button id="facebookbutton">Facebook</Button></a>
                <a href="/start"><Button id="linkedinbutton">LinkedIn</Button></a>
                <a href="/start"><Button id="whatsappbutton">Whatsapp</Button></a>
                </div>
            </div>
        </div>
    )
}

export default Community;