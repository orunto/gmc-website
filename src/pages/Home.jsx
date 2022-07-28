import { NavBar, ForMen, Fashion, Products, Socials, OurApp, Footer } from '../containers';

import '../css/Home.css';

const Home = () => {
    return(
        <div>
            <NavBar/>
            <ForMen/>
            <Fashion/>
            <Products/>
            <Socials/>
            <OurApp/>
            <Footer/>
        </div>
    )
}

export default Home;