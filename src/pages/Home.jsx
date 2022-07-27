import { NavBar, ForMen, Fashion, Products, Socials, OurApp } from '../containers';

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
        </div>
    )
}

export default Home;