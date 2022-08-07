import { Helmet } from 'react-helmet';
import { NavBar, Footer, PostHeader, PostBody, PostPhotoElaborate, PostPhotoWrapContainer, PostPhoto } from '../../containers';

import '../../css/Reads.css';

const BlackFriday = () => {
    return(
        <div>
            <Helmet>
                <title>Black Friday Sales - Scam or Not</title>
            </Helmet>
            <NavBar/>
            <PostHeader>
            <h1>Black Friday Sales - Scam or Not</h1>
                <h4>By Fikayomi</h4>
            </PostHeader>
            <PostBody>
                <p>Holiday season is here and that means sales season is here. A lot of stores, both online and physical will offer a lot of sales between now and January next year. But the most popular and largely advertised is the black friday sale. You've seen or heard about them, the ridiculous discounts, the free shipping, the free items, some stores even change black friday sales from a day to a week or a month. These all seem too good to be true. Could there be something more to it? Is it a scam. These and many more are the questions that shall be answered in this article.</p>

                <h3>What is Black Friday?</h3>
                <p>Black Friday is the Friday following Thanksgiving day in the United States. It is the day that stores market as the biggest sale in the year and offer jaw dropping discounts and consumers fill up the physical stores and sell out the online stores to grab hold of the sweet deals. Consumers use this opportunity to shop for Christmas gifts and also get the items they have had in their wishlist.</p>
                <p>While on surface level it will seem these promos are for the benefit of the consumer, you should not forget that businesses won't do things that will harm their bottom line. Black Friday won't exist if it didn't benefit the stores.</p>

                <h3>The Tricks of Black Friday</h3>
                <p>From a business perspective, the aim of Black Friday is to increase sales and in turn increase profit. Corporations apply different tricks and tactics to make more money. I will be sharing with you some of the more common tricks, so you won't fall for them.</p>

                <h3>False Discounts</h3>
                <p>This is a very common trick. It is when the price of an item is increased by two or three times the normal retail price and then discounted to the retail price with claims of a heavy discount. An example would be if a tee shirt with ba retail price of #3000 is increased to #6000 and then discounted by 50% back to #3000. In some cases the discounted price becomes more than the original retail.</p>

                <h3>The Free Shipping Tactic</h3>
                <p>This is when you are offered free shipping for an item but only if you buy a couple more items or spend up to a certain amount. This is to insensitivice you to buy more than you planned to.</p>

                <h3>Up to 99% off</h3>
                <p>This is usually present when the sale is being advertised. You see things like up to 99% off. Generally consumers focus on the 99% part and rush to the site or store, which is the aim. When you arrive at the store you buy a lot of things, which usually are things you don't need.</p>
                <p>The item with the 99% discount is usually a single unit of the item or an item you don't want. This tactic is to drive people to the store or website and increase the chances of sales.</p>

                <h3>So the Sales are a Scam then?</h3>
                <p>No they're not. While some stores or merchants may employ some dishonest tactics to increase sales, if you are aware of these tactics and are more mindful with your shopping you will gain the most out of these sales and not end up with things you don't need.</p>
                <p>Here are some ways to gain the most out of the sales:</p>
                <ul>
                    <li>Keep a wishlist and take note of the prices. By doing this you keep track of the items you want and will know if discounts are real or not. This also helps you buy the important items first when you have some spending capital. You can use a tool like Karma (formally shoptagr) to keep your wishlist, it also informs you of the items are back in stock or any price difference.</li>
                    <li>Be disciplined. This will help you be more mindful with your purchase and avoid impulse buying. You won't fall for sales of items you don't need and end up with buyers remorse. Only buy what you came for and check out</li>
                    <li>Source for discount codes. Discount codes will always be helpful when you are shopping online. A great way to get discount codes is to join the mailing list of the store. Stores will often send some exclusive deals or discount codes to people on their mailing lists. Another way to get discount codes is to check on social media influencers that are affiliated with the store.</li>
                </ul>
                
                <p>In conclusion, Black Friday sales are not a scam if used properly and I'm sure that with this information I have given you, you will get the most out of this year's Black Friday sales. To help with that I'll be sharing with you some amazing Black Friday deals on Jumia.</p>
            </PostBody>
            <Footer/>
        </div>
    )
}

export default BlackFriday;