import { NavBar, ForMen, Fashion, Products } from '../containers';

import '../css/Home.css';

const Home = () => {
    return(
        <div>
            <NavBar/>
            <ForMen/>
            <Fashion/>
            <Products/>
        </div>
    )
}

export default Home;