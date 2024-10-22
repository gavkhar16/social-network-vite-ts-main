type TUserElem = {
    userElemImg: string;
    mainText: string;
    secondaryText: string;
    badgeCount: number;
}

export const UserElem = ({userElemImg, mainText, secondaryText, badgeCount}:TUserElem) => {
    return (
        <div className="UserElem">
            <img src={`${userElemImg}`} alt="User" />
            <div className="user__description">
              <p className="main__text">{mainText}</p>
              <p className="secondary__text">{secondaryText}</p>
            </div>
            <span className="Badge">{badgeCount}</span>
          </div>
    )
}