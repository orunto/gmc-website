import { Helmet } from 'react-helmet';
import { NavBar, Footer, PostPhotoElaborate, PostPhoto, PostBody, PostHeader, PostPhotoWrapContainer } from '../../containers';

import '../../css/Reads.css';

const TipsForThrifting = () => {
    return(
        <div>
            <Helmet>
                <title>Guide To Thrift Shopping In Nigeria (5 Tips For Thrifting)</title>
            </Helmet>
            <NavBar/>
            <PostHeader id='tipsforthriftingheader'>
                <h1>Guide To Thrift Shopping In Nigeria (5 Tips For Thrifting)</h1>
                <h4>By Fikayomi</h4>
            </PostHeader>
            <PostBody>
                <p>In recent years, thrift shopping has gained more popularity. What used to be looked down on as something people without money do has become embraced by a lot more people.</p>
                <p>Unfortunately, while it may have gained popularity, a lot of people don't know how to thrift shop well and end up wasting a lot of money getting things they don't need. In this article, you will learn why you should consider thrift shopping (if you don't already) and some tips to make your thrifting trips more pleasant and end in some wonderful purchases.</p>

                <h2>Guide to Thrift Shopping</h2>
                <p>Before we dive into the tips let us understand what thrift shopping is and why you should consider this means of acquiring clothing.</p>

                <h3>What is Thrift Shopping</h3>
                <PostPhotoWrapContainer>
                    <PostPhoto id='whatisthriftshopping'></PostPhoto>
                    <PostPhotoElaborate>
                        <p>Thrift shopping is purchasing used items at a discounted price. Thrift stores (physical and online), garage sales, and flea markets are some thrift Shopping locations. If you are someone that hasn't considered thrift shopping, let me give you <b>some reasons why you should consider thrifting:</b></p>
                    </PostPhotoElaborate>
                </PostPhotoWrapContainer>
                        <ul>
                            <li>The most obvious reason is that it saves money. Thrift shopping is a great way of acquiring fantastic clothing pieces without breaking the bank. If you are on a budget you can still expand your clothing with thrift pieces.</li>
                            <li>If you are interested in unique clothes, thrifting also offers that. Most of the items in a thrift store are usually one of one or limited, unlike a store of new mass-produced clothes. The pieces you get from thrifting will be unique and add variety to your wardrobe.</li>
                            <li>The clothing industry usually impacts the environment negatively as a result of waste. More people have become more conscious of the environment and sustainability. A great way to play your part is by extending the life of clothing by thrifting.</li>
                            <li>Finally, thrift shopping usually offers quality pieces. These used clothes have served their previous owners and are still in good condition. This is an easy way to evaluate the quality of the items.</li>
                        </ul>

                <h2>5 Tips For Thrift Shopping</h2>

                <h3>1. Take Your Time</h3>
                <PostPhotoWrapContainer>
                    <PostPhotoElaborate>
                        <p>Thrift shopping is not an activity that you should rush. It's not like regular shopping where you just run into the store, pick what you want and rush out. You are literally hunting for clothing so don't rush. Being hasty won't help your decision making and you might end up with something you don't like.</p>
                    </PostPhotoElaborate>
                    <PostPhoto id='takeyourtime'></PostPhoto>
                </PostPhotoWrapContainer>

                <h3>2. Know What You Want (But Keep Your Mind Open)</h3>
                <p>You should have a plan when going to the thrift shop. What are you looking for? How much do you intend to spend? These are the kinds of questions you should answer. Having a plan will save you time and prevent you from making impulsive decisions. </p>
                <p>Shop with an open mind as well. You don't have to be rigid with your plan. You might come across something you didn't consider but will be a great addition. You might find an alternative to what you had planned. Have a plan but keep an open mind.</p>

                <h3>3. Timing is Important</h3>
                <p>The time you go thrifting plays an important role in how efficient and effective your trip will be. It is best to go when the crowd is low and when there is new stock. Weekdays and during working hours are advisable. Monday and Wednesday have been found to be the best days.</p>

                <h3>4. Inspect Closely</h3>
                <PostPhotoWrapContainer>
                    <PostPhoto id='inspectclosely'></PostPhoto>
                    <PostPhotoElaborate>
                        <p>As you know, thrift stores contain clothes that have been used and while the clothes are inspected before they are put up for sale, there is a chance that some damaged garments may not have been noticed. You should inspect all the clothes you want to buy for stains or damage so you don't waste money on clothes you can't wear.</p>
                    </PostPhotoElaborate>
                </PostPhotoWrapContainer>
                
                <h3>5. Get Familiar With The Seller</h3>
                <PostPhotoWrapContainer>
                    <PostPhotoElaborate>
                        <p>Getting familiar with the seller doesn't mean you have to be best buds, but if you get familiar with them, they can make your thrifting a lot easier. They can inform when there is new stock, help you search for things you'd like and keep some pieces for you. Also, being familiar with them can help when you want to bargain for a lower price.</p>
                    </PostPhotoElaborate>
                    <PostPhoto id='drinkwater'></PostPhoto>
                </PostPhotoWrapContainer>
                
                <p>There you have it. The basic things you need to know about thrift shopping and tips to make your experience better.</p>
                <p>We hope that you have gotten value from this guide. Be sure to share this article with your friends. You can also check out some of our other articles that aim to help men dress better. Follow us on our <a href='https://twitter.com/gentlemenscrib' target='_blank' rel="noreferrer">Twitter</a> and <a href='https://instagram.com/gentlemens.crib_?igshid=YmMyMTA2M2Y=' target='_blank' rel="noreferrer">Instagram</a>.</p>
            </PostBody>
            <Footer/>
        </div>
    )
}

export default TipsForThrifting;