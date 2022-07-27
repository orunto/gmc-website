import { WaitlistForm } from '../components';
import '../css/Home.css';

const OurApp = () => {
    return(
        <section className='OurApp'>
            <h1>Our App is Coming</h1>
            <h4>Would you like us to notify you when it is ready?</h4>
            <WaitlistForm/>
        </section>
    )
}

export default OurApp;