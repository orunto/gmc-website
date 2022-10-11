import '../css/Reads.css';
import { RelatedReadsItem } from '../components';

const RelatedReads = () => {
    return(
        <div className='RelatedReads'>
            <h3>Related</h3>
            <div className='RelatedReadsItemContainer'>
                <RelatedReadsItem>
                    <div className='RelatedReadsItemImage' id='buildingaversatile'><a href='/buildingaversatile'></a></div>
                    <a href='/buildingaversatilewardrobe'>Building a versatile and stylish men's wardrobe (Men's style essentials).</a>
                </RelatedReadsItem>

                <RelatedReadsItem>
                    <div className='RelatedReadsItemImage' id='businesscasuals'>
                        <a href='/businesscasuals'>The Complete Guide on Business Casuals for the Modern Man</a>
                    </div>
                    <a href='/businesscasuals'>The Complete Guide on Business Casuals for the Modern Man</a>
                </RelatedReadsItem>


            </div>
        </div>
    )
}

export default RelatedReads;