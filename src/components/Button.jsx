import '../css/Components.css';

const Button = (props) => {
    return(
        <div className='Button' id={props.id}>
            {props.children}
        </div>
    )
}

export default Button;