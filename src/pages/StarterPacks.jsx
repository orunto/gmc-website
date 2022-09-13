import { Helmet } from 'react-helmet';
import { NavBar, Footer, OlderPostsItem, ProductSummary } from '../containers';
import { Button } from '../components'

import '../css/Reads.css';
import '../css/Standards.css';

const StarterPacks = () => {
    return(
        <div className='StarterPacks'>
            <Helmet>
                <title>Gentlemen's Crib | Starter Packs</title>
            </Helmet>
            <NavBar/>
            <div className='StandardHeader'>
                <h1>Wardrobe Starter Packs</h1>
                <h4>We have curated special packs of fashion items.</h4>
                <a href="/start"><Button>Buy Now</Button></a>
            </div>

            <div className='Products' id='starterpackproducts'>
                <h2>Here’s how Starter Packs simplify your wardrobe</h2>

                <ProductSummary>
                    <div className='SummaryPhotoRight' id="everythingyouneed"></div>
                    <div className='SummaryDescription'>
                        <h3>Everything you need</h3>
                        <p>Starter packs allow you to quickly fill your wardrobe with enough essential fashion items to fill up every need for the next few months. The items are selected based on your lifestyle to ensure that you don’t need to buy any fashion item for the next few months.</p>
                        <div className='SummaryPhotoRight' id="fashionitems"></div>
                    </div>
                </ProductSummary>

                <ProductSummary>
                    <div className='SummaryDescription'>
                        <h3>Save Cost</h3>
                        <div className='SummaryPhoto' id="savecost"></div>
                        <p>Starter Packs are the perfect opportunity for you to buy a lot of fashion and clothing items at once and save up to #100,000</p>
                    </div>
                    <div className='SummaryPhoto' id="learnfashion"></div>
                </ProductSummary>

                <a href="/start"><Button>View Packs</Button></a>
            </div>

            <div className='PersonalStylist'>
                <div className='PersonalStylistPhoto'></div>
                <ProductSummary>
                <div className='SummaryDescription'>
                    <h3>A Personal Stylist. For you. For free.</h3>
                    <p>When you purchase a wardrobe starter pack, you get lifetime free acess to a dedicated wardrobe stylist to help you organize your fashion shopping, give outfit inspiration, pick  outfits and organize your fashion calendar.</p>
                    <a href=''><Button>Get Started</Button></a>
                </div>

                </ProductSummary>
            </div>

            <div className='Products'>
                <h2>Starter Pack Templates</h2>
                <div className='OlderPostsItemContainer'>
                    <a href='https://starterpacks.gentlemenscrib.com/corporate'>
                        <OlderPostsItem>
                            <div className='OlderPostsItemImage' id='corporate'></div>
                            <h3>Corporate</h3>
                        </OlderPostsItem>
                    </a>
                    <a href='https://starterpacks.gentlemenscrib.com/smartcasual'>
                        <OlderPostsItem>
                            <div className='OlderPostsItemImage' id='smartcasual'></div>
                            <h3>Smart Casual</h3>
                        </OlderPostsItem>
                    </a>
                    <a href='https://starterpacks.gentlemenscrib.com/streetwear'>
                        <OlderPostsItem>
                            <div className='OlderPostsItemImage' id='streetwear'></div>
                            <h3>Streetwear</h3>
                        </OlderPostsItem>
                    </a>
                    <a href='https://starterpacks.gentlemenscrib.com/techbro'>
                        <OlderPostsItem>
                            <div className='OlderPostsItemImage' id='techbro'></div>
                            <h3>Tech Bro</h3>
                        </OlderPostsItem>
                    </a>
                    <a href='https://starterpacks.gentlemenscrib.com/student'>
                        <OlderPostsItem>
                            <div className='OlderPostsItemImage' id='student'></div>
                            <h3>Student</h3>
                        </OlderPostsItem>
                    </a>
                    <a href='https://starterpacks.gentlemenscrib.com/athleisure'>
                        <OlderPostsItem>
                            <div className='OlderPostsItemImage' id='athleisure'></div>
                            <h3>Athleisure</h3>
                        </OlderPostsItem>
                    </a>
                    <a href='https://starterpacks.gentlemenscrib.com/traditional'>
                        <OlderPostsItem>
                            <div className='OlderPostsItemImage' id='traditional'></div>
                            <h3>Traditional</h3>
                        </OlderPostsItem>
                    </a>
                    <a href='https://starterpacks.gentlemenscrib.com/fashionista'>
                        <OlderPostsItem>
                            <div className='OlderPostsItemImage' id='fashionista'></div>
                            <h3>Fashionista</h3>
                        </OlderPostsItem>
                    </a>
                    <a href='https://starterpacks.gentlemenscrib.com/custommade'>
                        <OlderPostsItem>
                            <div className='OlderPostsItemImage' id='custommade'></div>
                            <h3>Custom-Made</h3>
                        </OlderPostsItem>
                    </a>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default StarterPacks;