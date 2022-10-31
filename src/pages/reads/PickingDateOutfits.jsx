import { Helmet } from 'react-helmet';
import { NavBar, Footer, PostHeader, PostBody, PostPhotoElaborate, PostPhotoWrapContainer, PostPhoto } from '../../containers';

import '../../css/Reads.css';

const PickingDateOutfits = () => {
    return(
        <div>
            <Helmet>
                <title>5 Tips to Consider When Picking Date Outfits for Men</title>
            </Helmet>
            <NavBar/>
            <PostHeader id='pickingdateoutfitsheader'>
                <h1>5 Tips to Consider When Picking Date Outfits for Men</h1>
                <h4>By Stephen</h4>
            </PostHeader>
            <PostBody>
                <p>Before a relationship and in its early days, you must make a great impression so that your crush or partner understands that you are serious about being with her and that you are the best man out there for her. While this can be expressed through a lot of things, it also means taking note of every little detail, down to your outfits.</p>

                <p>Putting effort into a nice outfit when going on a date tells your partner that you care about who you are as an individual, and also what she thinks about you. Now, while the importance of dressing well for a date has already been shared, it is still possible, and maybe even likely, that many men do not know how to put together a decent look for a meet-up with their lady.</p>

                <p>If you are used to wearing your favourite pair of faded jeans and sneakers everywhere you go, this is that one time when you have to put them aside and try coming up with something more appropriate for the event at hand. To help you with this, Gentlemen's Crib will run you through five date tips to get her head swooning and you, at the top of your game.</p>

                <h3>1. Time of the Day</h3>
                <PostPhotoWrapContainer>
                    <PostPhoto id='timeoftheday'></PostPhoto>
                    <PostPhotoElaborate>
                        <p>The time of the day when you'll be going on your date plays an important role in deciding on suitable outfits. Morning dates, like grabbing coffee with your crush or partner, are usually on the more casual side while evening dates are usually more ‘serious.’ An example of these casual outfits which you can wear in the morning or early hours of the afternoon is dark jeans with either a striped t-shirt or hoodie and a pair of (neat) casual sneakers. For evening dates, you can wear something like jeans, with a suit jacket (if you are comfortable wearing one) and a white shirt.</p>
                    </PostPhotoElaborate>
                </PostPhotoWrapContainer>

                <h3>2. Date Location</h3>
                <PostPhotoWrapContainer>
                    <PostPhotoElaborate>
                        <p>The venue for your date plays an important role in determining which outfits you should consider wearing and the ones you should do away with for the time being. If, for example, you are going to a fancy restaurant, you might want to consider dressing up a bit, while for a walk in the park, nice jeans and a shirt will suffice and if to a beach, a pair of shorts and loose shirts will do the trick.</p>
                    </PostPhotoElaborate>
                    <PostPhoto id='datelocation'></PostPhoto>
                </PostPhotoWrapContainer>

                <h3>3. Your Date's Personality</h3>
                <PostPhotoWrapContainer>
                    <PostPhoto id='yourdatepersonality'></PostPhoto>
                    <PostPhotoElaborate>
                        <p>Although you must pick an outfit that feels authentic to your dressing style when picking a date outfit, you should also pay attention to the kind of person your date is, and match her personality or outfits. This can drastically reduce the level of awkwardness (if it's the first date), and make her feel comfortable in your presence. In situations where your outfits match down to the colours and style, you will earn bonus points in her books if you both come off as being cute together.</p>
                    </PostPhotoElaborate>
                </PostPhotoWrapContainer>

                <h3>4. Your Clothes’ Neatness</h3>
                <PostPhotoWrapContainer>
                    <PostPhotoElaborate>
                        <p>Regardless of how nice your clothes are, as long as they are either smeared with a stain or wrinkled, it instantly ruins your outfits and makes you appear both disorganised and unserious. While this can happen to anyone, you have to try your best to ensure it doesn't to you. To reduce the chances of experiencing such, plan your outfits days before your date and make every adjustment that needs to be made.</p>
                    </PostPhotoElaborate>
                    <PostPhoto id='yourclothesneatness'></PostPhoto>
                </PostPhotoWrapContainer>

                <h3>5. Cloth Colours</h3>
                <PostPhotoWrapContainer>
                    <PostPhoto id='clothcolours'></PostPhoto>
                    <PostPhotoElaborate>
                        <p>While there is nothing wrong with bright colours, it is usually important to stick to ‘reserved’ colours such as black, grey and light blue. In addition to this, avoid shirts with too many imprints or designs on them. While the goal might be to appear casual, you do not want to appear too casual, as though you do not take the time you'll be sharing with her seriously. In a few words, make sure your outfit does not speak louder than you do.</p>
                    </PostPhotoElaborate>
                </PostPhotoWrapContainer>

                <p>With these tips, you are on your way to success on THAT date. Gentlemen's Crib wishes you the very best!</p>
            </PostBody>
            <Footer/>
        </div>
    )
}

export default PickingDateOutfits;