import { Helmet } from 'react-helmet';
import { NavBar, Footer, PostHeader, PostBody, PostPhotoElaborate, PostPhotoWrapContainer, PostPhoto } from '../../containers';

import '../../css/Reads.css';

const HowToWearASuit = () => {
    return(
        <div>
            <Helmet>
                <title>How to wear a suit (6 suit rules every man must follow)</title>
            </Helmet>
            <NavBar/>
            <PostHeader>
            <h1>How to wear a suit (6 suit rules every man must follow)</h1>
                <h4>By Fikayomi</h4>
            </PostHeader>
            <PostBody>
                <p>A suit is as classy and as elegant as a man's attire can get. It is an attire that sends the message of power and competence if worn properly. We at gentlemen's crib believe that every man should own at least one suit and should have the knowledge on how to wear it properly. In this article, we will be giving you that knowledge, we will be sharing <b>6 rules every man must follow when wearing a suit.</b></p>

                <h2>6 Rules every man must follow when wearing a suit</h2>
                <p>This routine has a few uncomplicated steps so it's a very easy habit to pick up and you don't waste your time with a 70 step routine. Consider this as the foundation of your skin care on which you build and add steps as suited for you.</p>

                <h3>1. Your Suit should fit properly </h3>
                <PostPhotoWrapContainer>
                    <PostPhoto id='suitfit'/>
                    <PostPhotoElaborate>
                        <p>Fit is the most important part of a suit. A well fitting cheap suit will always look better than an expensive designer suit that doesn't fit well. Here are a few pointers on how to nail the fit of your suit;</p>

                        <ul>
                            <li>The collar of your jacket should rest on the collar of your shirt without any gap.</li>
                            <li>The shoulder seam of the jacket should end exactly where your shoulder ends.</li>
                            <li>About a quarter to half an inch of your shirt cuff should be visible under your jacket sleeve.</li>
                            <li>For your jacket length, your suit jacket should be long enough to cover your buttocks and should stop around your knuckles.</li>
                            <li>Your trousers should sit on or slightly above your waist. It shouldn't be too tight or loose at the hip or thighs.</li>
                            <li>For most men a quarter break or no break is the right length for your trousers. Taller men can have a full break. (A break in your trousers is the fold of fabric at the bottom of your pants that rests on your shoes).</li>
                        </ul>
                    </PostPhotoElaborate>
                </PostPhotoWrapContainer>

                <h3>2. Jacket Buttons</h3>
                <PostPhotoWrapContainer>
                    <PostPhotoElaborate>
                        <p>If your jacket has a single button then obviously, that button should be fastened but in cases where you have a two-button or three-button jacket, <b>do not fasten the bottom button.</b> The top button on a three-button jacket is optional, you can choose to fasten it or not. If you have a three-piece suit, the bottom button of your waistcoat should also be left undone.</p>

                        <p>When sitted, you should unbutton your jacket to help it stay well on you and not damage the structure.</p>
                    </PostPhotoElaborate>
                    <PostPhoto id='suitbuttons'/>
                </PostPhotoWrapContainer>

                <h3>3. Remove Tags and Stitching</h3>
                <PostPhotoWrapContainer>
                    <PostPhoto id='suitstitch'/>
                        <PostPhotoElaborate>
                            <p>When you get a new suit you will usually find that the pockets and vents are stitched, you are supposed to cut the stitching from those vents and pockets.</p>

                            <p>You will also find some tags and the brand label on the sleeve. While it may be tempting not to remove these things so that everyone can know what brand of suit you have on, you should remove them. It is a suit, not a jersey.</p>

                            <p>(A vent is a slit that extends upwards from the the bottom at the backside of a suit jacket)</p>
                        </PostPhotoElaborate>
                </PostPhotoWrapContainer>


                <h3>4. Match Your Leathers and Metals</h3>
                <PostPhotoWrapContainer>
                    <PostPhotoElaborate>
                        <p>It's as simple as it sounds, the leather on your shoes match your belt and watch strap and the metal on your belt buckle should match your watch. This is to prevent clashes in your outfit. There may be some cases where this rule may not apply like if you are wearing white leather sneakers. It's mainly applicable if you're going for a classic menswear look with dress shoes and a dress watch.</p>
                        <p></p>
                    </PostPhotoElaborate>
                    <PostPhoto id='suitleather'/>
                </PostPhotoWrapContainer>

                <h3>5. Manage Your Accessories</h3>
                <PostPhotoWrapContainer>
                    <PostPhoto id='suitaccessories'/>
                    <PostPhotoElaborate>
                    <p>When wearing a suit you should be thoughtful about your accessories. Don't wear sports watches like a G-Shock or smart watches. Stick to a minimal dress watch with a leather or metal strap. Keep other accessories as minimal as possible. You shouldn't try to wear all the suit accessories you can lay your hands on all at once. <b>Less is more.</b> A pocket square, a tie bar and your watch are good enough. You can add one ring if you have to. Not wearing a pocket square, lapel pin and a Boutonnière all at once.</p>

                    </PostPhotoElaborate>
                </PostPhotoWrapContainer>

                <h3>6. Don't Stuff Your Pockets</h3>
                <p>Not all those extra pockets on your suit are supposed to be packed full. If possible, keep all the pockets on the outer part of your suit empty (except for your pocket square of course). You can put your phone and wallet in the pocket inside your suit jacket.</p>

                <p>That's all for now. By applying these rules you will greatly improve how you look in your suits. You should share this article with your friends to help them improve their suit game as well. You can get more fashion tips on our <a href="https://twitter.com/gentlemenscrib">Twitter</a> and <a href="https://instagram.com/gentlemens.crib_?igshid=YmMyMTA2M2Y=">Instagram.</a></p>
            </PostBody>
            <Footer/>
        </div>
    )
}

export default HowToWearASuit;