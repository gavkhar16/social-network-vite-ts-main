import { StylePostSettings } from "./PostSetting.style";

interface PostSettingProps {
  onEditClick?: () => void;
  onDeleteClick?: () => void;
}

export const PostSetting = ({onEditClick, onDeleteClick}: PostSettingProps) => {
  return (
    <StylePostSettings>
      <span onClick={onEditClick} className="settingBtn">
        Изменить
      </span>
      <span onClick={onDeleteClick} className="settingBtn">
        Удалить
      </span>
    </StylePostSettings>
  );
};
