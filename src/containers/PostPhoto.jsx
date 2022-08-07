import '../css/Reads.css';

const PostPhoto = (props) => {
    return(
        <div className='PostPhoto' id={props.id}>
            {props.children}
        </div>
    )
}

export default PostPhoto;