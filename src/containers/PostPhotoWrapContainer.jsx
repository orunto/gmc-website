import '../css/Reads.css';

const PostPhotoWrapContainer = (props) => {
    return(
        <div className='PostPhotoWrapContainer'>
            {props.children}
        </div>
    )
}

export default PostPhotoWrapContainer;