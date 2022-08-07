import '../css/Reads.css';

const PostHeader = (props) => {
    return(
        <div className='PostHeader' id={props.id}>
            {props.children}
        </div>
    )
}

export default PostHeader;