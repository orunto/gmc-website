import '../css/Reads.css';
import { RelatedReadsItem } from '../components';

const RelatedReads = () => {
    return(
        <div className='RelatedReads'>
            <h3>Related</h3>
            <div className='RelatedReadsItemContainer'>
                <RelatedReadsItem>
                    <div className='RelatedReadsItemImage' id='howtowearasuit'>
                        <a href='/'>How to wear a suit (6 suit rules every man must follow)</a>
                    </div>
                    <a href='/'>How to wear a suit (6 suit rules every man must follow)</a>
                </RelatedReadsItem>

                <RelatedReadsItem>
                    <div className='RelatedReadsItemImage' id='buildingaversatile'></div>
                    <a href='/'>Building a versatile and stylish men's wardrobe (Men's style essentials).</a>
                </RelatedReadsItem>
            </div>
        </div>
    )
}

export default RelatedReads;