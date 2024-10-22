type TCommentDescription = {
    owner: string;
    text: string;
    reply: string;
}

export const CommentDescription = ({owner, text, reply}:TCommentDescription) => {
    return (
        <div className="comment__description">
              <a href="#" className="comment__owner">
                {owner}
              </a>
              <p className="comment__text">{text}</p>
              <a href="#" className="reply">
                {reply}
              </a>
            </div>
    )
}