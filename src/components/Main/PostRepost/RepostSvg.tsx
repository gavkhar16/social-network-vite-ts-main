type TRepostSvg = {
    className: string;
}

export const RepostSvg = ({className}:TRepostSvg) => {
    return (
        <svg
        className={`icon ${className}`}
            viewBox="0 0 25 5"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="more">
              <circle id="ellipse" cx="22.5" cy="2.5" r="2.5" />
              <circle id="ellipse_2" cx="12.5" cy="2.5" r="2.5" />
              <circle id="ellipse_3" cx="2.5" cy="2.5" r="2.5" />
            </g>
          </svg>
    )
}