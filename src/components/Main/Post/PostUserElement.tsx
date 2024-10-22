type TPostUserElem = {
    userElemImg: string;
    mainText: string;
    secondaryText?: string;
}

export const PostUserElem = ({userElemImg, mainText, secondaryText}:TPostUserElem) => {
    return (
        <div className="UserElem">
            <img src={`${userElemImg}`} alt="User" />
            <div className="user__description">
              <p className="main__text">{mainText}</p>
              <p className="secondary__text">{secondaryText}</p>
            </div>
          </div>
    )
}