import { NavBar, ForMen, Fashion, Products, Socials } from '../containers';

import '../css/Home.css';

const Home = () => {
    return(
        <div>
            <NavBar/>
            <ForMen/>
            <Fashion/>
            <Products/>
            <Socials/>
        </div>
    )
}

export default Home;