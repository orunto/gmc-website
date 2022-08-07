import '../css/Reads.css';
import { OlderPostsItem } from '../containers';

const OlderPosts = () => {
    return(
        <div className='OlderPosts'>
            <hr className='ThinLine'/>
            <hr className='ThickLine'/>
            <h2>OLDER POSTS</h2>
            <div className='OlderPostsItemContainer'>
                <a href='/nineaccessories'>
                    <OlderPostsItem>
                        <div className='OlderPostsItemImage' id='nineaccessories'></div>
                        <h3>9 Accessories Every Man Should Have</h3>
                        <p>In this article, we will be sharing with you the 9 accessories every man should have regardless of their age, occupation and lifestyle</p>
                        <h5>By Fikayomi</h5>
                    </OlderPostsItem>
                </a>

                <OlderPostsItem>
                    <div className='OlderPostsItemImage' id='howtowearasuit'></div>
                    <h3>How to wear a suit (6 suit rules every man must follow)</h3>
                    <p>We at gentlemen's crib believe that every man should own at least one suit and should have the knowledge on how to wear it properly.</p>
                    <h5>By Fikayomi</h5>
                </OlderPostsItem>

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


                <OlderPostsItem>
                    <div className='OlderPostsItemImage' id='howtocleanyoursneakers'></div>
                    <h3>How to clean your sneakers (The ultimate guide to sneaker care)</h3>
                    <p>In this article, I'll share with you all you need to know concerning the care and maintenance of your sneakers to keep them looking good for a long time.</p>
                    <h5>By Fikayomi</h5>
                </OlderPostsItem>

                <OlderPostsItem>
                    <div className='OlderPostsItemImage' id='fiveamazingcasualoutfits'></div>
                    <h3>5 Amazing Casual Outfits for Gentlemen</h3>
                    <p>In this article, I'll be sharing with you, five casual outfits you should consider adding to your style portfolio today. </p>
                    <h5>By Fikayomi</h5>
                </OlderPostsItem>

                <OlderPostsItem>
                    <div className='OlderPostsItemImage' id='blackfriday'></div>
                    <h3>Black Friday Sales - Scam or Not</h3>
                    <p>Is it a scam. These and many more are the questions that shall be answered in this article.</p>
                    <h5>By Fikayomi</h5>
                </OlderPostsItem>
            </div>
        </div>
    )
}

export default OlderPosts;