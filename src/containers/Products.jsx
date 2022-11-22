import '../css/Home.css';

import { ProductSummary } from '../containers';
import { Button } from '../components'

const Products = () => {
    return(
        <div className='Products'>
            <h2>Our Products</h2>
            <ProductSummary>
                <div className='SummaryDescription'>
                    <h3>Learn fashion and stay up to date</h3>
                    <div className='SummaryPhoto' id="learnfashion"></div>
                    <p>We are building a community for men to learn how to look good. Reads, videos, direct help from someone you can talk to, outfit planning help, shopping assistance. Everything you need to look good is now available to you, for free.</p>
                    <a href='https://wa.me/2348027132741'><Button>Get Started</Button></a>
                </div>
                <div className='SummaryPhoto' id="learnfashion"></div>
            </ProductSummary>

            <ProductSummary>
                <div className='SummaryPhotoRight' id="fashionitems"></div>
                <div className='SummaryDescription'>
                    <h3>Find a store</h3>
                    <div className='SummaryPhotoRight' id="fashionitems"></div>
                    <p>By connnecting you to the best fashion retailers for you,Gentlemen’s Crib helps members of our community to ensure that they are buying the right products at the right prices from the right places. All items are crib-insured (if you don’t like what you get, just return it, no questions asked.)</p>
                    <a href='https://wa.link/exlcp6'><Button>Shop Now</Button></a>
                </div>
            </ProductSummary>

            <ProductSummary>
                <div className='SummaryDescription'>
                    <h3>Get dressed for your events</h3>
                    <div className='SummaryPhoto' id="dressed"></div>
                    <p>Do you have a big event coming up that you need help with getting dressed for? Your graduation, your wedding, a big speech, a party, a photoshoot. Any help you need, we can connect you with the best and most affordable stylists in Nigeria to help you out.</p>
                    <a href='https://wa.link/aqm395'><Button>Talk to a Stylist</Button></a>
                </div>
                <div className='SummaryPhoto' id="dressed"></div>
            </ProductSummary>

            <ProductSummary>
                <div className='SummaryPhotoRight' id="starterpacks"></div>
                <div className='SummaryDescription'>
                    <h3>Starter Packs</h3>
                    <div className='SummaryPhotoRight' id="starterpacks"></div>
                    <p>Need to start a new wardrobe? Or do you just want to buy fashion items at once and not worry about your wardrobe for the next three months? We have developed a pack to help you solve your problems, buy everything you would need for the next three months and save as much as N100,000. Buy your own wardrobe starter pack today for just N300,000. All items are crib-insured (if you don’t like what you get, just return it, no questions asked.)</p>
                    
                    <a target="_blank" noreferrer href="https://shop.gentlemenscrib.com/collections/starter-packs"><Button>View starter packs</Button></a>
                </div>
            </ProductSummary>

            <ProductSummary>
                <div className='SummaryDescription'>
                    <h3>Find a Creator</h3>
                    <div className='SummaryPhoto' id="creators"></div>
                    <p>Do you need a bespoke outfit? You’re looking for vetted tailors to help you make that shoe or sew that agbada, suit, shirt, senator wear, sandals, bags. We have created a list of trusted local fashion designers and creators for you to get your outfits from. All our recommendations are crib-insured™ (if you don’t like what you get, just return it)</p>
                    <a href='https://wa.link/exlcp6'><Button>See creators</Button></a>
                </div>
                <div className='SummaryPhoto' id="creators"></div>
            </ProductSummary>

            <ProductSummary>
                <div className='SummaryPhotoRight' id="mobileapp"></div>
                <div className='SummaryDescription'>
                    <h3>Mobile app</h3>
                    <div className='SummaryPhotoRight' id="mobileapp"></div>
                    <p>We are building a mobile app that allows you to plan your outfits in advance, read articles, watch helpful videos, get free help from fashion experts on your outfits, find stores to buy from at best quality, affordable prices and with 100% guarantee.</p>
                    <a href='#tel'><Button>Join Our Waitlist</Button></a>
                </div>
            </ProductSummary>
        </div>
    )
}

export default Products;
