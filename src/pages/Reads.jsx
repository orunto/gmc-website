import { Helmet } from 'react-helmet';
import { NavBar, Footer, SpotlightRead, OlderPosts } from '../containers';

import '../css/Reads.css';

const Reads = () => {
    return(
        <div>
            <Helmet>
                <title>Gentlemen's Crib | Reads</title>
            </Helmet>
            <NavBar/>
            <SpotlightRead/>
            <OlderPosts/>
            <Footer/>
        </div>
    )
}

export default Reads;