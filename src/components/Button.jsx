import '../css/Components.css';

const Button = (props) => {
    return(
        <div className='Button'>
            {props.children}
        </div>
    )
}

export default Button;