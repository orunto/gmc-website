import '../css/Reads.css';

const OlderPostsItem = (props) => {
    return(
        <div className='OlderPostsItem'>
            {props.children}
        </div>
    )
}

export default OlderPostsItem;