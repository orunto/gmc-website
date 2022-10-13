import '../css/Reads.css';
import { RelatedReadsItem } from '../components';

const RelatedReads = () => {
    return(
        <div className='RelatedReads'>
            <h3>Related</h3>
            <div className='RelatedReadsItemContainer'>
                <RelatedReadsItem>
                    <div className='RelatedReadsItemImage' id='nineaccessories'><a href='/nineaccessories'></a></div>
                    <a href='/nineaccessories'>9 Accessories Every Man Should Have</a>
                </RelatedReadsItem>

                <RelatedReadsItem>
                    <div className='RelatedReadsItemImage' id='appearmajestic'>
                        <a href='/appearmajestic'>7 Formal Accessories To Make You Appear Majestic</a>
                    </div>
                    <a href='/appearmajestic'>7 Formal Accessories To Make You Appear Majestic</a>
                </RelatedReadsItem>


            </div>
        </div>
    )
}

export default RelatedReads;