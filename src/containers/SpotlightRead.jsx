import '../css/Reads.css';
import { PreviousSpotlight, RelatedReads } from '../containers';
import { Button } from '../components';

const SpotlightRead = () => {
    return(
        <div className='SpotlightRead'>
            <div className='SpotlightReadInfo'>
                <h3>Spotlight Read</h3>
                 
                <h2>10 Clothing Items to Elevate Your Wardrobe for Work</h2>
                <Button><a href='/clothingitemstoelevateyourwardrobe'>Read More</a></Button>
            </div>
            <PreviousSpotlight/>
            <RelatedReads/>
        </div>
    )
}

export default SpotlightRead;