type TPostMediaItem = {
    imgPost: string;
}

export const PostMediaItem = ({imgPost}:TPostMediaItem) => {
    return (
        <img
              className="media__item"
              src={imgPost}
              alt="Post Item"
            />
    )
}