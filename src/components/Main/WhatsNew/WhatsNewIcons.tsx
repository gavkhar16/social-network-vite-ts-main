type TWhatsNewIcons = {
    iconType: string;
    viewBoxNum?: number;
    pathData: string;
}

export const WhatsNewIcons = ({iconType, viewBoxNum=24, pathData}:TWhatsNewIcons) => {
    return (
        <svg
              className={`icon ${iconType}`}
              viewBox={`0 0 ${viewBoxNum} 24`}
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                id="Vector"
                d={pathData}              
                />
            </svg>
    )
}