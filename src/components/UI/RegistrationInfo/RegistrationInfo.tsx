import { StyleRegistrationInfo } from "./RegistrationInfo.style";

interface RegistrationInfoProps {
  Infotext?: string;
  registrationText?: string;
  linkText?: string;
  onLinkClick?: () => void;
}

export const RegistrationInfo = ({
  Infotext,
  registrationText,
  onLinkClick,
  linkText,
}: RegistrationInfoProps) => {
  return (
    <StyleRegistrationInfo>
      <span>
        {registrationText} <a onClick={onLinkClick}>{linkText}</a>
      </span>
      <p>{Infotext}</p>
      <div className="icons-wrapper">
        <a className="reg__link google-link" href="#">
          <img src="./img/icons/google.svg" alt="Google" />
        </a>
        <a className="reg__link google-plus-link" href="#">
          <img src="./img/icons/google-plus.svg" alt="Google Plus" />
        </a>
        <a className="reg__link yandex-link" href="#">
          <img src="./img/icons/yandex.svg" alt="Yandex" />
        </a>
        <a className="reg__link mail-ru-link" href="#">
          <img src="./img/icons/mail-ru.svg" alt="Mail.ru" />
        </a>
      </div>
    </StyleRegistrationInfo>
  );
};
