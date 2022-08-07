import { Helmet } from 'react-helmet';
import { NavBar, Footer } from '../../containers';

import '../../css/Reads.css';

const SkinCareTips = () => {
    return(
        <div>
            <Helmet>
                <title>9 Accessories Every Man Should Have</title>
            </Helmet>
            <NavBar/>
            <div className='PostHeader'>
                <h1>9 Accessories Every Man Should Have</h1>
                <h4>By Fikayomi</h4>
            </div>
            <div className='PostBody'>
                <p>There are certain accessories every man should have no matter how old or young he is and regardless of his occupation and lifestyle. Some of these accessories might be used as scarcely as once in three months, however, when the need to use them arrives, he will not need to worry and will only need to slide into them.</p>

                <p>Below are accessories every man should have in his possession.</p>

                <h3>1. Cufflinks</h3>
                <div className='PostPhotoWrapContainer'>
                    <div className='PostPhoto'></div>
                    <div className='PostPhotoElaborate'>
                        <p>Cufflinks are one of the classiest accessories you should own.</p>

                        <p>A pair of cufflinks can transform your casual dressing into a professional one, and also leave the statement on everyone you cross paths with that you groom yourself down to the littlest details. Cufflinks also add to your gentleman's aura and can be worn on a date to get your lady melting. These cuffs come in different styles. They could be silver-plated, gold-coloured, glittery or conservative. Going for one you're comfortable in is very important as it will either boost or mar your level of confidence. Cufflinks are used on both plain and striped shirts as well as tailored suits which you should grab a hold of if you don't already own.</p>
                    </div>
                </div>

                <h3>2. A wristwatch</h3>
                <p>A wristwatch is an essential accessory you must own as a man. This timepiece works beyond letting you know the time of the day. It is also a fashion statement that gives off the vibe that you are mature, accountable, confident and respect the importance of (your) time.  Wristwatches can be either leather or metal and come in different colours and styles. Rather than having multiple cheap ones, invest in a classy watch worthy of being around your wrist. </p>

                <h3>3. Belt</h3>
                <p>Another accessory the modern man must own are belts. There are belts which fit casual dressings and situations such as strolling in a park and paying a visit to your friend(s). These belts tend to be either multicoloured or brightly coloured. There are also professional belts which more often than not, are conservative in colour such as different shades of brown, and black. They go well with suits, and tuxedos and should be worn during meetings, dinner dates and so on. Every gentleman should possess at least two casual and business belts of great quality to smoothen his fashion experience.</p>

                <h3>4. A wallet</h3>
                <p>A gentleman should own a wallet of high quality preferably of a neutral colour because they match the colour of roughly all outfits. Wallets are a way of expressing your fashion taste as well as keeping your personal belongings such as money and documents safe and organised. If your wallet has lost its shape or/and aesthetics, you should change it as this accessory can have a lasting impact on people's perception of you.</p>

                <h3>5. Sunglasses</h3>
                <div className='PostPhotoWrapContainer'>
                    <div className='PostPhoto' id='sunglasses'></div>
                    <div className='PostPhotoElaborate'>
                        <p>Although sunglasses are great for protecting your eyes from excess (sun) light, they also add a touch of mystery to your persona and make whoever you engage curious.</p>
                        
                        <p>They also conceal imperfections and make your face appear more symmetrical which means that an average individual will find you more physically attractive with sunglasses on than not. They can also affect how you behave, making you more calm, cool and masculine. However, there are many scenes where putting one on will be uncalled for such as wearing one all through a date, during a business meeting or hours after the sun sets.</p>
                    </div>
                </div>

                <h3>6. Perfume</h3>
                <p>A nice perfume perks up your level of attractiveness and presents you as a sharp man who has his things put together.   They make you feel fresher, go well with all other accessories and transform impressions people have of you into long-lasting memories. Perfumes also boost your confidence, increase your sex appeal and make you come across as a well-groomed professional in your place of work. When choosing a fragrance to adopt as yours, it is advised that you go for lighter scents with long-lasting effects because this increases how personal it becomes. </p>

                <h3>7. Jewellery</h3>
                <p>When it comes to pieces of jewellery, you do not have to think about it. A small ring on a finger of your choice, a bracelet around either or both wrists or/and necklaces communicate your style or sentimental symbols to everyone that needs to know. </p>

                <h3>8. Ties</h3>
                <p>Ties have always been a symbol of honour and nobility, hence, it'll do you more good than not to adopt the style of wearing one, especially as a part of your professional outfit. Ties also signify capability which although you might be unaware of, tells those you engage with that you are confident of your abilities to execute that which is expected of you flawlessly. If you are considering beginning your necktie collection but you are unsure on the colours to start with, solid black and navy ties cannot harm your dress. </p>

                <h3>9. Suspenders</h3>
                <div className='PostPhotoWrapContainer'>
                    <div className='PostPhoto' id='suspenders'></div>
                    <div className='PostPhotoElaborate'>
                        <p>Although suspenders are gradually becoming outdated since the introduction of belt to hold your trousers/shorts to your waist, its rareness has made it identified with formalities. However, they can be used casually, for humour and to stand out.</p>
                
                        <p>All these accessories are ones every man is expected to have. If however, you find yourself uncomfortable with using a few of these accessories, don't. Of all accessories, your originality is the greatest of all.</p>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default SkinCareTips;