import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import cls from "./UserProfileDataEditor.module.scss";

interface UserProfileDataEditorProps {
  className?: string;
}

export const UserProfileDataEditor = (props: UserProfileDataEditorProps) => {
  const { className } = props;
  const { t } = useTranslation("profile");

  return (
    <div
      className={classNames(cls.UserProfileDataEditor, {}, [className])}
    ></div>
  );
};
