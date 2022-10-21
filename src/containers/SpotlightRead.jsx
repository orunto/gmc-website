import '../css/Reads.css';
import { PreviousSpotlight, RelatedReads } from '../containers';
import { Button } from '../components';

const SpotlightRead = () => {
    return(
        <div className='SpotlightRead'>
            <div className='SpotlightReadInfo'>
                <h3>Spotlight Read</h3>
                 
                <h2>Guide To Thrift Shopping In Nigeria (5 Tips For Thrifting)</h2>
                <Button><a href='/tipsforthrifting'>Read More</a></Button>
            </div>
            <PreviousSpotlight/>
            <RelatedReads/>
        </div>
    )
}

export default SpotlightRead;