type TPostText = {
    postText: string;
}

export const PostText = ({postText}:TPostText) => {
    return <p className="Post__text">{postText}</p>
}