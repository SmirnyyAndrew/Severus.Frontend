import { useUserAuth } from "entities/User/model/hooks/useUserAuth";
import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import { Button } from "shared/ui/Button";
import { ButtonTheme } from "shared/ui/Button/ui/Button";
import cls from "./EditProfileDataButton.module.scss";

interface EditProfileDataButtonProps {
  className?: string;
  id: string | undefined;
  onEditClick: () => void;
}

export const EditProfileDataButton = (props: EditProfileDataButtonProps) => {
  const { className, id, onEditClick } = props;
  const { authData } = useUserAuth();
  const { t } = useTranslation("profile");

  return (
    <div className={classNames(cls.EditProfileDataButton, {}, [className])}>
      {authData?.id === id && (
        <Button
          buttonTheme={ButtonTheme.BACKGROUND_INVERTED}
          onClick={onEditClick}
        >
          {t("profile_data_editor_btn_to_edit")}
        </Button>
      )}
    </div>
  );
};
