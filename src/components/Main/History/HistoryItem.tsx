type THistoryItem = {
    historyPoster: string;
    userImg: string;
    ownerName: string;
}

export const HistoryItem = ({historyPoster, userImg, ownerName}:THistoryItem) => {
    return (
        <div className="History__item">
              <img src={historyPoster} alt="History Poster" />
              <div className="History__owner">
                <img
                  className="owner__img"
                  src={userImg}
                  alt="History Owner"
                />
                <span className="owner__name">{ownerName}</span>
              </div>
            </div>
    )
}