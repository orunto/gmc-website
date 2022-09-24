import '../css/Reads.css';
import { RelatedReadsItem } from '../components';

const RelatedReads = () => {
    return(
        <div className='RelatedReads'>
            <h3>Related</h3>
            <div className='RelatedReadsItemContainer'>
                <RelatedReadsItem>
                    <div className='RelatedReadsItemImage' id='howtocleanyoursneakers'>
                        <a href='/howtocleanyoursneakers'>How to clean your sneakers (The ultimate guide to sneaker care)</a>
                    </div>
                    <a href='/howtowearasuit'>How to clean your sneakers (The ultimate guide to sneaker care)</a>
                </RelatedReadsItem>

                <RelatedReadsItem>
                <div className='RelatedReadsItemImage' id='skincaretips'><a href='/skincaretips'></a></div>
                    <a href='/skincaretips'>Skin Care Tips For Men (Best Skin Care Routine For Men)</a>
                </RelatedReadsItem>
            </div>
        </div>
    )
}

export default RelatedReads;