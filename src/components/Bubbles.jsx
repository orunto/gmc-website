import '../css/Components.css';

const Bubbles = (props) => {
    return(
        <div className='Bubbles' id={props.id}>
            {props.children}
        </div>
    )
}

export default Bubbles;