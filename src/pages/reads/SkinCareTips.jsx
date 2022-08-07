import { Helmet } from 'react-helmet';
import { NavBar, Footer, PostPhotoElaborate, PostPhoto, PostBody, PostHeader, PostPhotoWrapContainer } from '../../containers';

import '../../css/Reads.css';

const SkinCareTips = () => {
    return(
        <div>
            <Helmet>
                <title>skin care tips for men (best skin care routine for men)</title>
            </Helmet>
            <NavBar/>
            <PostHeader>
                <h1>skin care tips for men (best skin care routine for men)</h1>
                <h4>By Fikayomi</h4>
            </PostHeader>
            <PostBody>
                <p>Your face is your money maker. It is the first place people often look at and start forming an impression about you. It is an important and often forgotten part of your appearance. Think about this, you are in a new place and you don't know your way around. I am sure that you look around at people and use their faces/ appearances to determine who you would be asking for directions.</p>

                <p>Now, while not all of us have been blessed with fantastic genes, there are many things that we can do to maximize the potential we have. In this article I'll be sharing with you a very simple skincare routine as well as some tips that will help you to improve and maintain great skin.</p>

                <p><b>Disclaimer:</b> Everything in this article is based on research and experience. Do not consider this as professional advice but as a guide. Consider it your responsibility to tailor it to suit you. This article is not to replace professional consultation as some cases may require.</p>

                <h2>Simple Skincare Routine For Men</h2>

                <p>This routine has a few uncomplicated steps so it's a very easy habit to pick up and you don't waste your time with a 70 step routine. Consider this as the foundation of your skin care on which you build and add steps as suited for you.</p>

                <h3>Wash Your Face Twice Daily</h3>
                <PostPhotoWrapContainer>
                    <PostPhoto id='washyourface'></PostPhoto>
                    <PostPhotoElaborate>
                        <p>I will assume that you wash your face every morning at the start of your day and now I want you to start washing your face before bed too. Invest in good quality face wash. Avoid washing your face with a bar of soap because they are usually too harsh and dry up the skin.</p>
                    </PostPhotoElaborate>
                </PostPhotoWrapContainer>

                <h3>Moisturize</h3>
                <PostPhotoWrapContainer>
                    <PostPhotoElaborate>
                        <p>After washing your face, show your skin some love by moisturising. <b>For the mornings, you are advised to use a moisturizer with SPF</b> (Sun Protection Factor) which will protect your skin from the harmful effects of the sun as you go about your day. Take note of some moisturizers that have SPF but also bleach the skin (avoid them). After you wash your face at night apply a moisturizer that will nourish your skin as you sleep. You don't need SPF in your night moisturizer.</p>
                    </PostPhotoElaborate>
                    <PostPhoto id='moisturize'></PostPhoto>
                </PostPhotoWrapContainer>

                <h3>Exfoliate</h3>
                <p>Exfoliating removes dead skin cells on the surface and allows new skin to come to the surface. It removes dead and dull skin and leaves room for brighter healthy skin. You should exfoliate about once or twice weekly</p>

                <p>There are different methods of exfoliating, like the use of exfoliating sponges, brushes or scrubs. You should find the one that suits you best.</p>

                <p>Like I mentioned earlier, these simple tips are the foundation. Depending on your consideration or lifestyle you can add things like eye creams, anti-aging cream etc.</p>

                <h2>Skin Care Tips</h2>
                <p>Together with the simple routine, I will be sharing some tips that will also improve your skin and help keep your skin healthy.</p>

                <h3>Stop Touching Your Face</h3>
                <PostPhotoWrapContainer>
                    <PostPhoto id='stoptouchingyourface'></PostPhoto>
                    <PostPhotoElaborate>
                        <p>You go through your day touching different surfaces picking up different germs and dirt, you put those dirty hands on your face and now transfer all that dirt and grime onto your face. You are using your own hands to damage your skin (sort of). If you know you can't help touching your face, at least try to keep your hands clean.</p>
                    </PostPhotoElaborate>
                </PostPhotoWrapContainer>
                
                <h3>Drink Water</h3>
                <PostPhotoWrapContainer>
                    <PostPhotoElaborate>
                        <p>Just drink water, the benefits are endless, not only will your skin benefit but your entire body. In fact, I want you to drink some now, yes right now.</p>
                    </PostPhotoElaborate>
                    <PostPhoto id='drinkwater'></PostPhoto>
                </PostPhotoWrapContainer>

                <h3>Clean/Change Your Pillowcase And Towel</h3>
                <PostPhotoWrapContainer>
                    <PostPhoto id='changeyourpillowcase'></PostPhoto>
                    <PostPhotoElaborate>
                        <p>Your face is buried in your pillow for 6 to 8 hours every night. It only makes sense to keep that surface clean. It's advisable to change or clean your pillowcases weekly and your towel once every two weeks.</p>
                    </PostPhotoElaborate>
                </PostPhotoWrapContainer>
                
                <h3>Take Vitamin C</h3>
                <PostPhotoWrapContainer>
                    <PostPhotoElaborate>
                        <p>Let's see some of the benefits of vitamin C on your skin. It helps smooth wrinkles, it boosts collagen, it promotes healing, it sometimes helps with dark spots too.</p>
                    </PostPhotoElaborate>
                    <PostPhoto id='vitaminc'></PostPhoto>
                </PostPhotoWrapContainer>

                <h3>Have A Grooming Routine</h3>
                <p>This one may not directly affect your skin but it's part of leveling up your face. If your skin care is on point you'll be holding yourself back if your grooming is not on point as well. Start from getting a haircut and managing your facial hair.</p>

                <p>Now you have the knowledge you need to begin to improve your skin and your appearance in general. Be consistent with these things and have some patience and you will see results.</p>
            </PostBody>
            <Footer/>
        </div>
    )
}

export default SkinCareTips;