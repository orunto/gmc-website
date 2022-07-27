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
                <SocialCard id="instacard">
                    <InstaIco />
                    <div className="SocialSnippets">
                        <QuoteMark/>
                        <p>Gravida facilisis at hac suspendisse non. Arcu et et eget elementum tempus scelerisque pharetra. Ipsum a massa nulla.</p>
                    </div>
                    <p>@gentlemans_crib_ng</p>
                    <span>Drop a like</span>
                </SocialCard>

                <SocialCard id="twittercard">
                    <TwitterIco />
                    <div className="SocialSnippets">
                        <QuoteMark/>
                        <p>Gravida facilisis at hac suspendisse non. Arcu et et eget elementum tempus scelerisque pharetra. Ipsum a massa nulla.</p>
                    </div>
                    <p>@gentlemenscrib</p>
                    <span>Retweet</span>
                </SocialCard>

                <SocialCard id="facebookcard">
                    <FacebookIco />
                    <div className="SocialSnippets">
                        <QuoteMark/>
                        <p>Gravida facilisis at hac suspendisse non. Arcu et et eget elementum tempus scelerisque pharetra. Ipsum a massa nulla.</p>
                    </div>
                    <p>Gentlemen’s Crib</p>
                    <span>Like and Share</span>
                </SocialCard>
            </div>

            <div className='SocialsBottomRow'>
                <SocialCard id="linkedincard">
                    <LinkedInIco />
                    <div className="SocialSnippets">
                        <QuoteMark/>
                        <p>Gravida facilisis at hac suspendisse non. Arcu et et eget elementum tempus scelerisque pharetra. Ipsum a massa nulla.</p>
                    </div>
                    <p>Gentlemen’s Crib</p>
                    <span>Thumbs Up</span>
                </SocialCard>

                <SocialCard id="whatsappcard">
                    <WhatsappIco />
                    <div className="SocialSnippets">
                        <QuoteMark/>
                        <p>Gravida facilisis at hac suspendisse non. Arcu et et eget elementum tempus scelerisque pharetra. Ipsum a massa nulla.</p>
                    </div>
                    <p>wa.me/2347122</p>
                    <span>Shoot a Text</span>
                </SocialCard>
            </div>
        </section>
    )
}

export default Socials;