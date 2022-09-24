import { Helmet } from 'react-helmet';
import { NavBar, Footer, PostHeader, PostBody, PostPhotoElaborate, PostPhotoWrapContainer, PostPhoto } from '../../containers';

import '../../css/Reads.css';

const GuideToMensBoots = () => {
    return(
        <div>
            <Helmet>
                <title>Guide To Men's Boots (7 Types of Boots For Every Man)</title>
            </Helmet>
            <NavBar/>
            <PostHeader id='guidetomensbootsheader'>
            <h1>Guide To Men's Boots (7 Types of Boots For Every Man)</h1>
            <h4>By Fikayomi</h4>
            </PostHeader>
            <PostBody>
                <p>The boot should be in every man's collection of footwear. It is a great footwear that perfectly blends function and aesthetics. A good pair of boot adds a "cool" rugged factor to any outfit. Think of a man wearing a suit with regular Oxfords, now think of that man in the same suit but replace the Oxfords with a pair of boots.</p>
                <p>If men's footwear were vehicles, boots will be SUVs. In this article, we will be looking at <b>7 types of boots for men.</b> This article should give you information so you know the options of boots available and what boot will suit your personal style and lifestyle.</p>

                <h2>7 Types of Boots For Men</h2>
                
                <p>This list will focus on style boots therefore specialty boots like rain boots, engineer boots and hiking boots won't be on this list.</p>

                <h3>1. Moc Toe Boots</h3>
                <PostPhotoWrapContainer>
                    <PostPhoto id='moctoeboots'></PostPhoto>
                    <PostPhotoElaborate>
                        <p>The Moc toe boot is a very casual boot so it will go well with casual outfits like a T-shirt and jeans but won't look good with smart trousers and an Oxford shirt. The toe of the shoe is modelled after the design of the moccasin, hence the name. The sole is usually flat and made of crepe rubber. Many people also use the boot for laborious tasks like site work because of its functional build.</p>
                    </PostPhotoElaborate>
                </PostPhotoWrapContainer>

                <h3>2. Chukka Boots/Desert Boots </h3>
                <PostPhotoWrapContainer>
                    <PostPhotoElaborate>
                        <p>The Chukka is an ankle high boot usually with two or three pairs of eyelets. Chukka boots are suitable for casual and business casual outfits. Suede chukka boots have a more casual appearance and are more suitable for casual outfits while chukka boots made of leather are more dressy.</p>
                        <p>The Desert boot is similar to the chukka with the major difference being that the desert boot has a soft suede upper and crepe sole.</p>
                    </PostPhotoElaborate>
                    <PostPhoto id="chukaboots" />
                </PostPhotoWrapContainer>

                <h3>3. Service Boots/Work Boots</h3>
                <PostPhotoWrapContainer>
                    <PostPhoto id='serviceboots'/>
                    <PostPhotoElaborate>
                        <p>These are leather Lace up boots. They are most suitable for casual outfits. These boots add a rugged and masculine vibe to any outfit. We don't recommend you wear them with a very formal outfit.</p>
                    </PostPhotoElaborate>
                </PostPhotoWrapContainer>

                <h3>4. Chelsea Boots</h3>
                <PostPhotoWrapContainer>
                    <PostPhotoElaborate>
                        <p>The Chelsea boot is a slip-on boot that has a gore made of elastic on both sides. The absence of laces gives it an elegant and sleek style. It has a lot to offer in terms of versatility because it can work with jeans and a T-shirt and also look good with a suit.</p>
                    </PostPhotoElaborate>
                    <PostPhoto id='chelseaboots' />
                </PostPhotoWrapContainer>

                <h3>5. Jodhpur Boots</h3>
                <PostPhotoWrapContainer>
                    <PostPhoto id='jodhpurboots'/>
                    <PostPhotoElaborate>
                        <p>The Jodhpur Boot is a boot without laces that has a buckle around the shaft to fasten it. It's a very versatile boot that can serve you well in a smart casual outfit and can also be dressed up with slacks. It is very common in suede and is also available in leather for a more elegant option.</p>
                    </PostPhotoElaborate>
                </PostPhotoWrapContainer>

                <h3>6. Derby Boots</h3>
                <PostPhotoWrapContainer>
                    <PostPhotoElaborate>
                        <p>The derby boot is a type of dress boot that has an open lacing system. Open lacing system means the quarters (back portion of the shoe) is sewn on top of the vamp (front portion of the shoe). As the name implies it's the boot version of a derby. Being a dress boot, it goes very well with business outfits and can be dressed down too.</p>
                    </PostPhotoElaborate>
                    <PostPhoto id='derbyboots' />
                </PostPhotoWrapContainer>

                <h3>7. Balmoral Boots</h3>
                <PostPhotoWrapContainer>
                    <PostPhoto id='balmoralboots' />
                    <PostPhotoElaborate>
                        <p>The Balmoral boot is an Oxford boot. That means that the boot has a closed lacing system, which means the vamp is sewn on top of the quarters. It is a dress boot like the derby boot and so looks great with business attire. Sometimes, the upper part of the boot is made of different material or colour and that gives the boot visual interest.</p>
                    </PostPhotoElaborate>
                </PostPhotoWrapContainer>


                <p>That's all for now. Now you have all the information you need to pick the perfect boot or boots to suit you and your lifestyle. You should share this with your friends so that they can level up their boot game as well. You can get more fashion tips on our <a href="https://twitter.com/gentlemenscrib">Twitter</a> and <a href="https://instagram.com/gentlemens.crib_?igshid=YmMyMTA2M2Y=">Instagram.</a></p>
            </PostBody>
            <Footer/>
        </div>
    )
}

export default GuideToMensBoots;