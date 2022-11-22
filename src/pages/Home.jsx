import { Button } from '../components';
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
            {/* <div id="quickaction">
                <a href="#findastore"><Button>Find a Store Close to You</Button></a>
                <a href="#findacreator"><Button>Find a Local Creator</Button></a>
            </div> */}
        </div>
    )
}

// function findastore(){

// }

// function findacreator(){
    
// }

export default Home;