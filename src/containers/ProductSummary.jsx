import '../css/Home.css';

const ProductSummary = (props) => {
    return(
        <div className='ProductSummary'>
            {props.children}
        </div>
    )
}

export default ProductSummary;