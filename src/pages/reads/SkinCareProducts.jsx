import { Helmet } from 'react-helmet';
import { NavBar, Footer, PostHeader, PostBody, PostPhotoElaborate, PostPhotoWrapContainer, PostPhoto } from '../../containers';

import '../../css/Reads.css';

const SkinCareProducts = () => {
    return(
        <div>
            <Helmet>
                <title>Skincare products every man should have</title>
            </Helmet>
            <NavBar/>
            <PostHeader id='skincareproductsheader'>
                <h1>Skincare products every man should have</h1>
                <h4>By Fikayomi</h4>
            </PostHeader>
            <PostBody>
                <p>This could be a long write so get comfortable.</p>

                <p>If you are the man who believes that men should not invest in looks like skincare routines, please stop reading now. If you are not planning to spend a bit of money on your skin, we have also written <a href="https://reads.gentlemenscrib.com/skincaretips">an article that talks about the general habits that you can adopt to keep your skin looking clean for free.</a></p>

                <p>If you are still here, then this article will be talking about the products that you can use to improve your skin health and how to apply them.</p>

                
                <ul>
                    <li>
                        <h3>Face wash</h3>
                        <p>The skin on your face is more delicate than the skin on other parts of your body. Therefore, it is important that you use a special type of soap to wash your face if you need to wash. This is called face wash. Face washes are often foamy in a way that makes them deeply clean the pores of your skin. It is an important part of any skincare routine or product.</p>    
                    </li>

                    <li>
                        <h3>Cleanser</h3>
                        <p>A Cleanser is very similar to a face wash. Where a face wash is gentler than regular soap cleansers are usually even gentler than face wash and are more suitable for sensitive skin. Cleansers remove dirt, makeup residue, or excess oils from the skin’s surface. They also have more hydrating and moisturizing properties than a face wash. You can usually use face wash and cleanser together.</p>    
                    </li>

                    <li>
                        <h3>Toner</h3>
                        <p>Toners are fast penetrating liquids usually used after cleansers and face wash to restore the skin to its most natural state. Face wash, cleansers, and other products may disrupt the skin’s pH. Toners help to restore balance, hydrate the skin, remove dead skin cells and prepare for the use of serums and moisturizers.</p>    
                    </li>

                    <li>
                        <h3>Facial Scrub</h3>
                        <p>Facial scrubs are exfoliators. Exfoliators are crucial to any skin care regimen. Exfoliation is the process of removing dead skin cells from the surface of the skin. The chemical exfoliators used in scrubs break down and dissolve dead skin cells on the surface of the skin leaving a more youthful and radiant look.</p>    
                    </li>

                    <li>
                        <h3>Serum</h3>
                        <p>Serums are fast-acting chemical substances that could perform different functions. There are different kinds of serums, some serums help to brighten your skin or reduce blemishes, while others focus on boosting hydration or fighting the signs of aging.</p>    
                    </li>

                    <li>
                        <h3>Moisturiser</h3>
                        <p>This is a very important part of your skincare. You should not be using the same creams for every part of your body. Some parts of your body like your face, neck, elbows, knees and feet require special attention. Have you ever worn sandals or slippers and got distressed by how ugly your feet look? Different kinds of moisturizers come with different kinds of purposes.</p>    
                    </li>

                    <li>
                        <h3>Lip care products</h3>
                        <p>Your lip is a prominent feature of your face, and it can get ugly, real ugly, especially during hot weather, harmattan, or if you smoke. For most men, a simple lip balm or Vaseline would do but some folks require the special attention of exfoliators to get softer-looking lips.</p>    
                    </li>

                    <li>
                        <h3>Sunscreen</h3>
                        <PostPhotoWrapContainer>
                            <PostPhoto id='skincaregranny'></PostPhoto>
                            <PostPhotoElaborate>
                                <p>There’s a lot of argument as to whether sunscreen is important for darker-skinned men. But you know that the sun can get harsh, so it could be nice to protect your skin from the potential damage from the sun. Sunscreen can also protect your skin from aging faster.</p>    

                                <p>There’s this popular image of a 92 year old woman who used sunscreen on her face and not her neck and the results are remarkable.</p>

                                <p><i>Image Source: The Journal of the European Academy of Dermatology and Venereology</i></p>
                            </PostPhotoElaborate>
                        </PostPhotoWrapContainer>
                    </li>
                </ul>


                <p>If you need help starting a skin care regimen, we are here to help. We have provided free expert consultation services for all men to help you find the right skincare routine for your skin type and within your budget. <a href="https://www.gentlemenscrib.com/skincare" target="_blank">Visit our skincare page now to get started.</a></p>
            </PostBody>
            <Footer/>
        </div>
    )
}

export default SkinCareProducts;