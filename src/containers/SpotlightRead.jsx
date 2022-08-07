import '../css/Reads.css';
import { PreviousSpotlight, RelatedReads } from '../containers';
import { Button } from '../components';

const SpotlightRead = () => {
    return(
        <div className='SpotlightRead'>
            <div className='SpotlightReadInfo'>
                <h3>Spotlight Read</h3>
                <h2>GUIDE TO MEN’S BOOTS 
                    <br/>
                (7 TYPES OF BOOTS FOR EVERY MAN)</h2>
                <Button><a href='/guidetomensboots'>Read More</a></Button>
            </div>
            <PreviousSpotlight/>
            <RelatedReads/>
        </div>
    )
}

export default SpotlightRead;