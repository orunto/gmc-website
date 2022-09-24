import '../css/Reads.css';
import { OlderPostsItem } from '../containers';

const OlderPosts = () => {
    return(
        <div className='OlderPosts'>
            <hr className='ThinLine'/>
            <hr className='ThickLine'/>
            <h2>OLDER POSTS</h2>
            <div className='OlderPostsItemContainer'>
                <a href='/guidetomensboots'>
                    <OlderPostsItem>
                        <div className='OlderPostsItemImage' id='guidetomensboots'></div>
                        <h3>Guide To Men's Boots (7 Types of Boots For Every Man)</h3>
                        <p>This article should give you information so you know the options of boots available and what boot will suit your personal style and lifestyle.</p>
                        <h5>By Fikayomi</h5>
                    </OlderPostsItem>
                </a>

                <a href='/appearmajestic'>
                    <OlderPostsItem>
                        <div className='OlderPostsItemImage' id='appearmajestic'></div>
                        <h3>7 Formal Accessories To Make You Appear Majestic</h3>
                        <p>One of the ways by which you can look your best in a suit is to add one or two accessories that elevate your style and break up the monotony of your office attire.</p>\
                        <h5>By Stephen</h5>
                    </OlderPostsItem>
                </a>

                <a href='/nineaccessories'>
                    <OlderPostsItem>
                        <div className='OlderPostsItemImage' id='nineaccessories'></div>
                        <h3>9 Accessories Every Man Should Have</h3>
                        <p>In this article, we will be sharing with you the 9 accessories every man should have regardless of their age, occupation and lifestyle</p>
                        <h5>By Stephen</h5>
                    </OlderPostsItem>
                </a>

                <a href='/howtowearasuit'>
                    <OlderPostsItem>
                        <div className='OlderPostsItemImage' id='howtowearasuit'></div>
                        <h3>How to wear a suit (6 suit rules every man must follow)</h3>
                        <p>We at gentlemen's crib believe that every man should own at least one suit and should have the knowledge on how to wear it properly.</p>
                        <h5>By Fikayomi</h5>
                    </OlderPostsItem>
                </a>

                <a href='/skincaretips'>
                    <OlderPostsItem>
                        <div className='OlderPostsItemImage' id='skincaretips'></div>
                        <h3>Skin Care Tips For Men (Best Skincare Routine For Men).</h3>
                        <p>In this article I'll be sharing with you a very simple skincare routine as well as some tips that will help you to improve and maintain great skin.</p>
                        <h5>By Fikayomi</h5>
                    </OlderPostsItem>
                </a>

                <a href='/fiveoutfitmistakes'>
                    <OlderPostsItem>
                        <div className='OlderPostsItemImage' id='fiveoutfitmistakes'></div>
                        <h3>5 Outfit Mistakes You Make</h3>
                        <p>Today you'll learn why clothes may not look good on you, how to get past those issues and look better in your clothes.</p>
                        <h5>By Fikayomi</h5>
                    </OlderPostsItem>
                </a>

                <a href='/buildingaversatlewardrobe'>
                    <OlderPostsItem>
                        <div className='OlderPostsItemImage' id='buildingaversatile'></div>
                        <h3>Building a versatile and stylish men's wardrobe. Men's style essentials</h3>
                        <p>In this article, you will learn all the basics you need to build a wardrobe that will serve you well and greatly improve your style.</p>
                        <h5>By Fikayomi</h5>
                    </OlderPostsItem>
                </a>

                <a href='howtocleanyoursneakers'>
                    <OlderPostsItem>
                        <div className='OlderPostsItemImage' id='howtocleanyoursneakers'></div>
                        <h3>How to clean your sneakers (The ultimate guide to sneaker care)</h3>
                        <p>In this article, I'll share with you all you need to know concerning the care and maintenance of your sneakers to keep them looking good for a long time.</p>
                        <h5>By Fikayomi</h5>
                    </OlderPostsItem>
                </a>

                <a href='fiveamazingcasualoutfits'>
                    <OlderPostsItem>
                        <div className='OlderPostsItemImage' id='fiveamazingcasualoutfits'></div>
                        <h3>5 Amazing Casual Outfits for Gentlemen</h3>
                        <p>In this article, I'll be sharing with you, five casual outfits you should consider adding to your style portfolio today. </p>
                        <h5>By Fikayomi</h5>
                    </OlderPostsItem>
                </a>

                <a href='blackfriday'>
                    <OlderPostsItem>
                        <div className='OlderPostsItemImage' id='blackfriday'></div>
                        <h3>Black Friday Sales - Scam or Not</h3>
                        <p>Is it a scam. These and many more are the questions that shall be answered in this article.</p>
                        <h5>By Fikayomi</h5>
                    </OlderPostsItem>
                </a>
            </div>
        </div>
    )
}

export default OlderPosts;