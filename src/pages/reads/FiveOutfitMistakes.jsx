import { Helmet } from 'react-helmet';
import { NavBar, Footer, PostHeader, PostBody, PostPhotoElaborate, PostPhotoWrapContainer, PostPhoto } from '../../containers';

import '../../css/Reads.css';

const FiveOutfitMistakes = () => {
    return(
        <div>
            <Helmet>
                <title>5 outfit mistakes you make</title>
            </Helmet>
            <NavBar/>
            <PostHeader id="fiveoutfitmistakesheader">
                <h1>5 outfit mistakes you make</h1>
                <h4>By Fikayomi</h4>
            </PostHeader>
            <PostBody>
                <p>You have finally decided to take your style seriously and make some improvements. You have started buying new clothes, maybe you are following some Instagram or Pinterest pages for style/outfit inspiration. </p>
                
                <p>Now the clothes have arrived and you have started putting outfits together but you encounter a problem, something seems off, the clothes don't look great on you. Well, today you'll learn why clothes may not look good on you, how to get past those issues and look better in your clothes.</p>

                <h3>The clothes don't fit properly</h3>
                <p>Ever heard the saying "fit is king"? Well, it is. A two hundred naira suit that fits well will always look better than a two million naira suit that doesn't fit you properly. Getting clothes is one thing but nailing the fit is another. Clothes you buy off the rack (especially pants) will likely not fit you properly, fortunately, you have the option of tailoring them to get the best fit. Tailoring your clothes might be very cheap or expensive depending on where you live and what you want to adjust but the benefits are worth it.</p>

                <h3>Your shoes are not up to the standard of your clothes</h3>
                <p>Your footwear is a very important part of your outfit. If your shoes don't go well with your outfit, then you won't look your best. You don't have to break the bank if you don't have the money yet. You can start by taking care of the ones you have and then save up for better. You should consider your closet when buying new shoes, think of how well the shoes will suit your lifestyle as well as your lifestyle. If you work in a corporate environment, a nice pair of dress shoes will work well for you and if you are a student, sneakers might be your best option. Consider your lifestyle before you buy the shoes. While you're investing in your clothing don't forget your shoes.</p>

                <h3>You don't use accessories</h3>
                <p>Think of accessories like the paint on a building. Your outfit may be basic but when you add accessories, it takes it to the next level. Your outfit may be a four but when you slap on a watch, a necklace and maybe a few rings, your outfit easily becomes an eight. The good thing about accessories is that there is something to suit everyone and every occasion. The best place to start is a simple watch, then you can go into bracelets, rings and necklaces from there.</p>

                <h3>You are looking at the wrong inspiration</h3>
                <p>Finally and possibly the most important is the source of your inspiration. Many people get outfit inspiration from people that are different from them, It could be height, physic, complexion, occupation and more. Take for example if you are a 5’7 doctor that wants to upgrade your style and you follow the style of a 6’ fashion model (without knowledgeable alterations), his style may not work well for you. That doesn’t mean you can’t be inspired by people different from you, it just means you should be mindful of these differences and adjust them to suit you properly. Check out Gentlemen's Crib on <a href=''>Twitter</a>, <a href=''>Instagram</a>, <a href=''>Facebook</a> and <a href=''>LinkedIn</a> or <a href=''>WhatsApp</a> for your source of inspiration</p>
            </PostBody>
            <Footer/>
        </div>
    )
}

export default FiveOutfitMistakes;