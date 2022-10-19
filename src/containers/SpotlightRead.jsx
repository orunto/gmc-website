import '../css/Reads.css';
import { PreviousSpotlight, RelatedReads } from '../containers';
import { Button } from '../components';

const SpotlightRead = () => {
    return(
        <div className='SpotlightRead'>
            <div className='SpotlightReadInfo'>
                <h3>Spotlight Read</h3>
                 
                <h2>How to Add Colour to your Outfit like a Gentleman</h2>
                <Button><a href='/colourtoyouroutfit'>Read More</a></Button>
            </div>
            <PreviousSpotlight/>
            <RelatedReads/>
        </div>
    )
}

export default SpotlightRead;