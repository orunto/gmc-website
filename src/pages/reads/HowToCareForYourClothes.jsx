import { Helmet } from 'react-helmet';
import { NavBar, Footer, PostHeader, PostBody, PostPhotoElaborate, PostPhotoWrapContainer, PostPhoto } from '../../containers';

import '../../css/Reads.css';

const HowToCareForYourClothes = () => {
    return(
        <div>
            <Helmet>
                <title>How To Care For Your Clothes - A Basic Guide to Clothing Maintenance</title>
            </Helmet>
            <NavBar/>
            <PostHeader id='howtocareforyourclothesheader'>
                <h1>How To Care For Your Clothes - A Basic Guide to Clothing Maintenance</h1>
                <h4>By Fikayomi</h4>
            </PostHeader>
            <PostBody>
                <p>We at Gentlemen’s crib have made it our mission to help you take your style to the next level. We have taught you what to wear, where to get them and how to get them but we will be doing you a disservice if we don’t also teach you how to take care of your clothes. Being clean is an essential (but often not mentioned) part of looking good. You might have the best garments and know how to style them but if you do not care for them, they won't last.</p>

                <p>In this article, we will be sharing with you <b>how to take care of your clothes.</b> This will be a guide to help you keep your clothes looking great for a long time.</p>

                <h2>How to care for your clothes</h2>
                <p>This guide will contain information on how to clean your clothes properly, store them well and also treat some basic stains.</p>

                <h3>Washing your clothes</h3>

                <h4>Wash Less</h4>
                <PostPhotoWrapContainer>
                    <PostPhoto id='washingmachine'></PostPhoto>
                    <PostPhotoElaborate>
                        <p>Some clothes are better with less frequent washes. Clothes like your denim, some jackets and coats are not meant to be washed as frequently as other items like your tee shirts. This will preserve the integrity of the fabric and keep the item(s) for longer.</p>
                        
                    </PostPhotoElaborate>
                </PostPhotoWrapContainer>

                <h4>Read Care Labels</h4>
                <p>Make sure that you read the care label of your garments to know the best way to handle the garment. Think of it as a user's manual for your clothes.</p>

                <h4>Separate Before you Wash</h4>
                <PostPhotoWrapContainer>
                    <PostPhotoElaborate>
                        <p>Not all clothes are created equally and so shouldn't be treated equally. You can separate clothes based on colour (like whites, lights, darks and blacks) and also wash intensity (like gentle, normal and strong). This will ensure that each item gets the care it deserves and is not ruined by other clothes.</p>
                    </PostPhotoElaborate>
                    <PostPhoto id='separatebeforeyouwash'></PostPhoto>
                </PostPhotoWrapContainer>

                <h4>Treat Stains and Repair Damages Before Washing</h4>
                <p>Before you toss your clothes in the washer. Ensure that all major stains are treated and all repairs are done. This will ensure that the stains aren't forgotten and the damages don't get worse. There is a guide on removing common stains below.</p>
                

                <h3>Store your Clothes Properly</h3>
                <PostPhotoWrapContainer>
                    <PostPhoto  id='storeyourclothesproperly'></PostPhoto>
                    <PostPhotoElaborate>
                        <p>While you may be cleaning your clothes properly, how you store them also plays a large role in the life span of the clothes.</p>
                
                        <p>Here are some tips on how to store some everyday clothing items:</p>

                        <ul>
                            <li>Store your jackets on hangers. For your suit jackets and blazers, make use of hangers with wide shoulders so that the jacket shoulder will remain intact.</li>
                            <li>Knitwear and heavy sweaters should not be stored on hangers. The weight of the garment will cause the shoulder of the garment to be ruined. It is better to store them folded.</li>
                            <li>Trousers can be stored hung or folded. </li>
                            <li>Tee shirts are best stored folded but hanging them with good hangers is fine.</li>
                            <li>Button-up shirts can be stored with hangers but ensure that the first few buttons are always fastened, this will maintain the collar and placket shape.</li>
                            <li>Garments that you don't wear often e.g. suits can be stored in a garment bag.</li>
                            <li>Ensure that clothes are stored in a dry place.</li>
                        </ul>
                    </PostPhotoElaborate>
                </PostPhotoWrapContainer>

                <h3>How to Treat 7 Common Stains</h3>
                <PostPhotoWrapContainer>
                    <PostPhotoElaborate>
                        <p>Your clothes getting stained is usually not in your control. You could be going about your day carefully and still end up with stains. Knowing how to treat stains will help you save a lot of your garments from permanent damage.</p>
                
                        <p>When you notice a stain on your garment, it is very important to act fast. Acting fast will reduce the chances of the stain setting on the fabric. A quick way to prevent setting is to treat the cloth with water and avoid pressure and direct heat. If you are in a place where the stain can be treated immediately then you can go straight to cleaning it.</p>
                    </PostPhotoElaborate>
                    <PostPhoto  id='howtotreatstains'></PostPhoto>
                </PostPhotoWrapContainer>

                <p>Here are some common stains and how to remove them:</p>

                <h4>Ink</h4>
                <p>Blot with a microfiber cloth. Place the stained area on a paper towel and apply alcohol or cleaning agents. Rinse thoroughly and then wash normally.</p>

                <h4>Blood</h4>
                <p>Soak or rinse immediately with <b>cold water.</b> Immerse in room temperature water and detergent and let it soak for 10-15 minutes. Wash separately from other clothes.</p>

                <h4>Grease</h4>
                <PostPhotoWrapContainer>
                    <PostPhoto  id='grease'></PostPhoto>
                    <PostPhotoElaborate>
                        <p>Treat with some water and then rub the stain with some grease-cutting detergent. Rinse and repeat as necessary and then wash normally.</p>
                    </PostPhotoElaborate>
                </PostPhotoWrapContainer>

                <h4>Lipstick</h4>
                <p>Rinse with water and place face down on a paper towel. Rub lightly with some detergent and wash out with warm water. Repeat as necessary.</p>

                <h4>Coffee</h4>
                <PostPhotoWrapContainer>
                    <PostPhotoElaborate>
                        <p>Rinse in cold water to remove as much stain as possible then cover the stain in some detergent. Wash with the hottest setting possible for the fabric.</p>
                    </PostPhotoElaborate>
                    <PostPhoto  id='coffee'></PostPhoto>
                </PostPhotoWrapContainer>

                <h4>Ketchup/Sauce</h4>
                <PostPhotoWrapContainer>
                    <PostPhoto  id='ketchup'></PostPhoto>
                    <PostPhotoElaborate>
                        <p>Remove as much as you can from the garment, and avoid rubbing it into the fabric. Run some cold water through the back of the stain. Rub the stain with some liquid detergent using a toothbrush. Soak the stain for some time.</p>
                    </PostPhotoElaborate>
                </PostPhotoWrapContainer>

                <h4>Wine</h4>
                <p>Treat immediately with warm water and cover the stain with salt. Dab gently with detergent rinse and repeat as necessary. Wash normally but avoid using bar soaps.</p>
                <p>These seven tips will come in handy when encountering some "unwanted designs" on your clothes.</p>
                <p>We hope that you have gotten value from this guide. Be sure to share this article with your friends. You can also check out some of our other articles that aim to <a href='https://reads.gentlemenscrib.com'>help men dress better.</a></p>
            </PostBody>
            <Footer/>
        </div>
    )
}

export default HowToCareForYourClothes;