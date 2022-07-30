import { ReactComponent as QuoteMark } from '../images/QuoteMark.svg';
import { ReactComponent as InstaIco } from '../images/InstaIco.svg';
import { ReactComponent as TwitterIco } from '../images/TwitterIco.svg';
import { ReactComponent as FacebookIco } from '../images/FacebookIco.svg';
import { ReactComponent as LinkedInIco } from '../images/LinkedInIco.svg';
import { ReactComponent as WhatsappIco } from '../images/WhatsappIco.svg';

import { SocialCard } from '../components';

import '../css/Home.css';

const Socials = () => {
    return(
        <section className='Socials'>
            <h2>We talk a lot on our social media</h2>
            <h4>Join in the conversation</h4>
            <div className='SocialsTopRow'>
                <a href='https://instagram.com/gentlemens.crib_?igshid=YmMyMTA2M2Y=' target='_blank'><SocialCard id="instacard">
                    <InstaIco />
                    <div className="SocialSnippets">
                        <QuoteMark/>
                        <p>Gravida facilisis at hac suspendisse non. Arcu et et eget elementum tempus scelerisque pharetra. Ipsum a massa nulla.</p>
                    </div>
                    <p>@gentlemans_crib_ng</p>
                    <span>Drop a like</span>
                </SocialCard></a>

                <a href='https://twitter.com/gentlemenscrib' target='_blank'><SocialCard id="twittercard">
                    <TwitterIco />
                    <div className="SocialSnippets">
                        <QuoteMark/>
                        <p>Gravida facilisis at hac suspendisse non. Arcu et et eget elementum tempus scelerisque pharetra. Ipsum a massa nulla.</p>
                    </div>
                    <p>@gentlemenscrib</p>
                    <span>Retweet</span>
                </SocialCard></a>

                <a href='https://www.facebook.com/profile.php?id=100067959218609' target='_blank'><SocialCard id="facebookcard">
                    <FacebookIco />
                    <div className="SocialSnippets">
                        <QuoteMark/>
                        <p>Gravida facilisis at hac suspendisse non. Arcu et et eget elementum tempus scelerisque pharetra. Ipsum a massa nulla.</p>
                    </div>
                    <p>Gentlemen’s Crib</p>
                    <span>Like and Share</span>
                </SocialCard></a>
            </div>

            <div className='SocialsBottomRow'>
            <a href='https://www.linkedin.com/company/gentlemens-crib/' target='_blank'><SocialCard id="linkedincard">
                    <LinkedInIco />
                    <div className="SocialSnippets">
                        <QuoteMark/>
                        <p>Gravida facilisis at hac suspendisse non. Arcu et et eget elementum tempus scelerisque pharetra. Ipsum a massa nulla.</p>
                    </div>
                    <p>Gentlemen’s Crib</p>
                    <span>Thumbs Up</span>
                </SocialCard></a>

                <a href='https://wa.me/2348027132741' target='_blank'><SocialCard id="whatsappcard">
                    <WhatsappIco />
                    <div className="SocialSnippets">
                        <QuoteMark/>
                        <p>Gravida facilisis at hac suspendisse non. Arcu et et eget elementum tempus scelerisque pharetra. Ipsum a massa nulla.</p>
                    </div>
                    <p>wa.me/2348027132741</p>
                    <span>Shoot a Text</span>
                </SocialCard></a>
            </div>
        </section>
    )
}

export default Socials;