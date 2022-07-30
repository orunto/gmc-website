import { ReactComponent as CommunityIco } from '../images/CommunityIco.svg'
import { ReactComponent as TransactionsIco } from '../images/TransactionsIco.svg'
import { ReactComponent as CreatorsIco } from '../images/ConnectIco.svg'
import { ReactComponent as VerifiedIco } from '../images/VerifiedIco.svg'
import { ReactComponent as NigeriaIco } from '../images/NigeriaIco.svg'

import { Bubbles } from '../components';
import { NavBar, Footer, ProductSummary } from '../containers';

import '../css/Company.css';

const  Company = () => {
    return(
        <div className='Company'>
            <NavBar/>
            <div className='CompanyHeader' id="future">
                <h1>We are building the future of Men’s Fashion</h1>
            </div>
            
            <h4>Our mission is to make fashion easy for every man in our community</h4>

            <div className='CompanyHeader' id="ourgoal">
                <h1>Our Goal</h1>
            </div>

            <h4>We are looking to bring the next advancements in fashion technology to millions of men in a tight-knit community.</h4>

            <div className='Important'>
                <h2>What is important to us?</h2>

                <ProductSummary>
                    <div className='SummaryDescription'>
                        <h3>Ease</h3>
                        <div className='SummaryPhoto' id="ease"></div>
                        <p>No one likes to spend all their time on fashion and trying to look good. With the use of advanced technology tools such as Artificial Intelligence and Innovative hardware combined with the power of learning through communities, we want to make sure that you barely need to do any thinking to look brilliant.</p>
                    </div>
                    <div className='SummaryPhoto' id="ease"></div>
                </ProductSummary>

                <ProductSummary>
                    <div className='SummaryPhotoRight' id="fashionitems"></div>
                    <div className='SummaryDescription'>
                        <h3>Inclusion</h3>
                        <div className='SummaryPhotoRight' id="fashionitems"></div>
                        <p>Every single member of our community is important to us and we will treat everyone that way. Fashion influence has for far too long rested in the hands of selected members of society. We don’t like that. We are constantly working on expanding our operations to cross borders and continents such that every man has access to a quality fashion experience.</p>
                    </div>
                </ProductSummary>


                <ProductSummary>
                    <div className='SummaryDescription'>
                        <h3>Quality, always</h3>
                        <div className='SummaryPhoto' id="ease"></div>
                        <p>Quality assurance is important. Whether you’re spending $1,000 or $1 on a fashion item you should be getting your money’s worth. With the use of innovative technology we are eliminating fraud in fashion such as scam online stores and purchase of replicas. Our 3FA fashion service provider verification system ensures that all recommendations we make are the best you can get.</p>
                    </div>
                    <div className='SummaryPhoto' id="ease"></div>
                </ProductSummary>
            </div>

            <div className='Important'>
                <h2>What is important to us?</h2>

                <div className='NumbersContainer'>
                    <Bubbles>
                        <CommunityIco/>
                        <h5>3000+</h5>
                        <p>Community members</p>
                    </Bubbles>

                    <Bubbles id="stores-bubble">
                        <TransactionsIco/>
                        <h5>100+</h5>
                        <p>Transactions</p>
                    </Bubbles>

                    <Bubbles>
                        <CreatorsIco/>
                        <h5>17</h5>
                        <p>Local creators onboarded</p>
                    </Bubbles>

                    <Bubbles id="connect-bubble">
                        <VerifiedIco />
                        <h5>13</h5>
                        <p>Verified online store partners</p>
                    </Bubbles>

                    <Bubbles>
                        <NigeriaIco/>
                        <h5>1</h5>
                        <p>Operating country</p>
                    </Bubbles>
                </div>

                {/* OUR TEAM WILL GO HERE */}
            </div>
            <Footer/>
        </div>
    )
}

export default Company;