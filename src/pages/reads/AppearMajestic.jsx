import { Helmet } from 'react-helmet';
import { NavBar, Footer, PostHeader, PostBody, PostPhotoElaborate, PostPhotoWrapContainer, PostPhoto } from '../../containers';

import '../../css/Reads.css';

const AppearMajestic = () => {
    return(
        <div>
            <Helmet>
                <title>7 Formal Accessories To Make You Appear Majestic</title>
            </Helmet>
            <NavBar/>
            <PostHeader id='appearmajesticheader'>
                <h1>7 Formal Accessories To Make You Appear Majestic</h1>
                <h4>By Stephen</h4>
            </PostHeader>
            <PostBody>
                <p>Looking your very best in a suit is a science because it involves accurately measured shoulder lengths, sleeves and waist among others, as well as one of the purest forms of art because it deals with aesthetics and expresses creativity in its most authentic form.</p>

                <p>One of the ways by which you can look your best in a suit is to add one or two accessories that elevate your style and break up the monotony of your office attire. For savvy spenders, accessories are also an affordable way of upping your wardrobe.</p>

                <p>Although it is unnecessary and often discouraged that you adopt all accessories at the same time and it's best if you opt for two or three, these are accessories every man should have and gracefully swap to fit in with his mood, workplace and/or lifestyle.</p>

                <h3>1. Tie Clip</h3>
                <PostPhotoWrapContainer>
                    <PostPhoto id='majestictieclip'></PostPhoto>
                    <PostPhotoElaborate>
                        <p>Despite being one of the smallest accessories you can own for formal outings, a tie clip can add loads of classic styles to your look as well as keep your tie intact, giving off the impression that you are confident and well-collected. However, before using a tie clip, there are certain factors you should consider.</p>
                        <ul>
                            <li>There are variations of styles, colours and sizes of tie clips to choose from. It is important that you pick the right one based on what you believe will make you the most appealing.</li>
                            <li>Your tie clip must never be wider than your tie as this will only make it ridiculous to look at. </li>
                            <li>Although it is an unspoken rule, tie clips are best placed between your third and fourth buttons.</li>
                        </ul>
                    </PostPhotoElaborate>
                </PostPhotoWrapContainer>

                <h3>2. Wristwatch</h3>
                <PostPhotoWrapContainer>
                    <PostPhotoElaborate>
                        <p>When it comes to accessories even for outfits that are not necessarily formal, wrist watches are the easiest piece you can add. Although no one needs one to tell the time, their aesthetic value and classic style are hard to give up on. Ideally, it is expected that you have more than one option so that you can always switch to one that fits your outfit better.</p>
                    </PostPhotoElaborate>
                    <PostPhoto id='majesticwristwatch'></PostPhoto>
                </PostPhotoWrapContainer>

                <h3>3. Pocket Square</h3>
                <PostPhotoWrapContainer>
                    <PostPhoto id='majesticpocketsquare'></PostPhoto>
                    <PostPhotoElaborate>
                        <p>A Pocket Square is a wonderful accessory for men bold enough to add a touch of personality to their formal suits. A pocket colour should have an interesting colour or/and pattern and should either compliment or stand out from the rest of your outfit, but the overall impression it leaves must harmonise. For example, a strongly patterned suit goes well with a soft-pedalled pocket square while you have a wider choice to pick from when your suit has a solid neutral colour</p>
                    </PostPhotoElaborate>
                </PostPhotoWrapContainer>

                <h3>4. Belt</h3>
                <p>Although the most basic function of a belt is to hold your trousers to your waist, it has evolved to be one means of defining one's style. Choosing the right belt to go with a formal dressing is one of the most effective ways of enriching your ensemble. </p>

                <h3>5. Tie</h3>
                <p>Not only will this list be incomplete without adding neckties, but omitting this accessory would be downright ridiculous because ‘tie clip’ topped our list. Ties give you a plethora of choices to personalise your outfit from its colour, fabric, width, and so on. Apart from its personalising feature, ties also denote confidence and nobility. You should note, however, that using a tie the same colour as your pocket square is a no-no because it makes your outfit look unsophisticated and immature.</p>

                <h3>6. Lapel Pin</h3>
                <p>Although this accessory only began gaining more acceptance recently, there is no better way to own your outfit than to use a lapel pin. In the past, they were used by members of a group or an organisation but recently, you can have custom-made lapel pins built with the material of your choice: preferably silver or gold, to slot in on your outfit.</p>

                <h3>7. Cufflinks</h3>
                <PostPhotoWrapContainer>
                    <PostPhotoElaborate>
                        <p>Just like belts, cufflinks are accessories which serve both functional and decorative purposes. Like buttons too, they come in different colours, shapes. They are mostly worn for formal events, dinner dates and weddings.</p>
                
                        <p>Just as was stated earlier, wearing two or three accessories at the same time is just right. If you do more, you'll be a hot mess and you definitely do not want that.</p>
                    </PostPhotoElaborate>
                    <PostPhoto  id='majesticcufflinks'></PostPhoto>
                </PostPhotoWrapContainer>
            </PostBody>
            <Footer/>
        </div>
    )
}

export default AppearMajestic;