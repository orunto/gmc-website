import '../css/Home.css';
import { ReactComponent as AnswersIco } from '../images/AnswersIco.svg';
import { ReactComponent as StoresIco } from '../images/StoresIco.svg';
import { ReactComponent as AIIco } from '../images/AIIco.svg';
import { ReactComponent as ConnectIco } from '../images/ConnectIco.svg';
import { ReactComponent as EasyIco } from '../images/EasyIco.svg';

import { Button, Bubbles } from '../components';

const Fashion = () => {
    return(
        <section className='Fashion'>
            <h2>Fashion should not be difficult</h2>
            <h4>...and we make it even simpler</h4>
            <div className='BubbleContainer'>
                <Bubbles>
                    <AnswersIco/>
                    <h5>Answers</h5>
                    <p>Find the information you need, answers to any questions</p>
                </Bubbles>
                
                <Bubbles id="stores-bubble">
                    <StoresIco/>
                    <h5>Stores</h5>
                    <p>Find the best stores to shop from</p>
                </Bubbles>

                <Bubbles>
                    <AIIco/>
                    <h5>AI</h5>
                    <p>Use our AI to build up your styles</p>
                </Bubbles>

                <Bubbles id="connect-bubble">
                    <ConnectIco/>
                    <h5>Connect</h5>
                    <p>Connect to the best of fashion talent in Nigeria</p>
                </Bubbles>

                <Bubbles>
                    <EasyIco/>
                    <h5>Easy</h5>
                    <p>Simple, automated wardrobe building plans.</p>
                </Bubbles>
            </div>

            <a href="/start"><Button>Let's Go!</Button></a>
        </section>
    )
}

export default Fashion;