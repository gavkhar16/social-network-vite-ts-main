type TPostIconWrapper = {
    iconWrap?: string;
    whatCount?: string;
    count?: number;
    className: string;
    viewBox: string;
    pathData: string;
    color?: string;
}

export const PostIconWrapper = ({iconWrap, whatCount, count, className, viewBox, pathData, color}:TPostIconWrapper) => {
    return (
        <div className={`icon-wrapper ${iconWrap}`}>
              <span className={`count ${whatCount}`}>{count}</span>
              <svg
                className={`icon ${className}`}
                viewBox={viewBox}
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  id="comment"
                  d={pathData}
                fill={color}
                />
              </svg>
            </div>
    )
}