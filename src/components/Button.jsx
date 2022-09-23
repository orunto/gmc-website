import '../css/Components.css';

const Button = (props) => {
    return(
        <button className='Button' id={props.id} type={props.type}>
            {props.children}
        </button>
    )
}

export default Button;