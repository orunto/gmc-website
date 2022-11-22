import '../css/Components.css';

const ProductSummary = (props) => {
    return(
        <div className='ProductSummary' id={props.id}>
            {props.children}
        </div>
    )
}

export default ProductSummary;