import { StyledLinktext } from "./Linktext.style";

interface TLinkText {
  regularText?: string;
  linkText: string;
  onLinkClick?: () => void;
}

export const Linktext = ({ regularText, linkText, onLinkClick }: TLinkText) => {
  return (
    <StyledLinktext>
      <span>
        {regularText}<a onClick={onLinkClick} role="button" tabIndex={0}>
  {linkText}
</a>

      </span>
    </StyledLinktext>
  );
};
