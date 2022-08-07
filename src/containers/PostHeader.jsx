import '../css/Reads.css';

const PostHeader = (props) => {
    return(
        <div className='PostHeader'>
            {props.children}
        </div>
    )
}

export default PostHeader;