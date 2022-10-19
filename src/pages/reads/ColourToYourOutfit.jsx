import { Helmet } from 'react-helmet';
import { NavBar, Footer, PostHeader, PostBody, PostPhotoElaborate, PostPhotoWrapContainer, PostPhoto } from '../../containers';

import '../../css/Reads.css';

const ColourToYourOutfit = () => {
    return(
        <div>
            <Helmet>
                <title>How to Add Colour to your Outfit like a Gentleman</title>
            </Helmet>
            <NavBar/>
            <PostHeader id='ColourToYourOutfitHeader'>
                <h1>How to Add Colour to your Outfit like a Gentleman</h1>
                <h4>By Stephen</h4>
            </PostHeader>
            <PostBody>
                <p>For many guys, matching outfits can be a very confusing task to do, especially since no one wants to end up feeling embarrassed and looking like a clown. To play it safe, many guys have decided to stick with monochromatic palettes, not because they necessarily prefer these neutral colours but rather because they do not want to make horrendous mistakes. </p>
                <p>If you are one of these guys, you should understand that it's normal to want to play it safe. However, what's the fun in that when there are thousands of outfits, colours and styles which you can wear and look even better than you would in monochromatic colours?</p>
                <p>If figuring out how to add colours to your clothing styles in the right manner is an issue for you, Gentlemen's Crib is here to guide you through.</p>
                <p>To successfully match outfits of different colours, there are three steps Gentlemen's Crib recommends:</p>


                <h3>1. Start With a Base Colour</h3>
                <PostPhotoWrapContainer>
                    <PostPhoto id='startwithabasecolour'></PostPhoto>
                    <PostPhotoElaborate>
                        <p>When you decide to add colours to your outfits, it's a different ballgame from matching monochromatic colours together because of the more limited options and styles with such colours. When opting for more vibrant colours, the first thing you want to avoid is matching the colour of every piece of your outfit with one another. Instead, start with a base colour (bright in this instance) and build on that (with neutral colours, since you are newly stepping out of your comfort zone). You can do this by adding one element of a bright colour like red or green or purple and keeping the rest of the outfit neutral with colours like brown, black, grey and white, making the bright colour pop out even more.</p>
                    </PostPhotoElaborate>
                </PostPhotoWrapContainer>

                <h3>2. Add a Different Intensity to the First Colour Piece</h3>
                <PostPhotoWrapContainer>
                    <PostPhotoElaborate>
                        <p>After advancing past the ‘base colour’ step perhaps after a couple of weeks, to keep things just as simple, you can decide to start adding another bright piece of the same colour as the one added in the first step but of different intensity, or another colour that is slightly similar to the base colour chosen. When you add more contrasting colours like yellow, red and a touch of green to the same outfit in the wrong proportions (we'll get to that in the third step), your outfit stands a high chance of giving off a rowdy aura which is the very thing you want to avoid. Tips on some colours that go together are brown coupled with maroon and blue worn with teal.</p>
                    </PostPhotoElaborate>
                    <PostPhoto id='differentintensity'></PostPhoto>
                </PostPhotoWrapContainer>

                <h3>3. Complement, Don't Match</h3>
                <PostPhotoWrapContainer>
                    <PostPhoto id='complementdontmatch'></PostPhoto>
                    <PostPhotoElaborate>
                        <p>Once you get used to wearing colours of different intensities, you'll feel confident enough to mix complementary colours. Examples of complementary colours are red and green, and blue and orange. However, for more complementary colours, have a look at the basic colour wheel below:</p>
                        <p>When opting for complementary colours, you must always remember to make one of the two pieces of outfits a duller shade than the other. For example, if you wear bright red and green outfits, except when you are attending a Christmas-themed party, you'll end up making a fool of yourself. In this instance, it'll be a better option for a forest-green pair of trousers or a dull red shirt.</p>
                        <p>With this guide from Gentlemen's Crib, in a couple of weeks, every gentleman should be able to add colour to their outfit independently and more importantly, confidently, and not stick with ‘safe’ colours anymore simply because they are worried about looking bad. </p>
                    </PostPhotoElaborate>
                </PostPhotoWrapContainer>
            </PostBody>
            <Footer/>
        </div>
    )
}

export default ColourToYourOutfit;