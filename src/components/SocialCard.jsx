import '../css/Components.css';

const SocialCard = (props) => {
    return(
        <div className='SocialCard' id={props.id}>
        {props.children}
        </div>
    )
}

export default SocialCard;