import '../css/Reads.css';
import { RelatedReadsItem } from '../components';

const RelatedReads = () => {
    return(
        <div className='RelatedReads'>
            <h3>Related</h3>
            <div className='RelatedReadsItemContainer'>
                <RelatedReadsItem>
                    <div className='RelatedReadsItemImage' id='skincaretips'><a href='/skincaretips'></a></div>
                    <a href='/skincaretips'>Skin Care Tips For Men (Best Skin Care Routine For Men)</a>
                </RelatedReadsItem>

                <RelatedReadsItem>
                    <div className='RelatedReadsItemImage' id='nineaccessories'>
                        <a href='/nineaccessories'>9 Accessories Every Man Should Have</a>
                    </div>
                    <a href='/nineaccessories'>9 Accessories Every Man Should Have</a>
                </RelatedReadsItem>


            </div>
        </div>
    )
}

export default RelatedReads;