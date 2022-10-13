import '../css/Reads.css';
import { PreviousSpotlight, RelatedReads } from '../containers';
import { Button } from '../components';

const SpotlightRead = () => {
    return(
        <div className='SpotlightRead'>
            <div className='SpotlightReadInfo'>
                <h3>Spotlight Read</h3>
                 
                <h2>Complete Men's Guide To Fragrances - How To Select A Cologne/Perfume</h2>
                <Button><a href='/guidetofragrances'>Read More</a></Button>
            </div>
            <PreviousSpotlight/>
            <RelatedReads/>
        </div>
    )
}

export default SpotlightRead;