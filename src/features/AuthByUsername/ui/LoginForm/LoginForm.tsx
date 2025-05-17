import { HTMLInputTypeAttribute, useState } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import { Button } from "shared/ui/Button";
import { ButtonTheme } from "shared/ui/Button/ui/Button";
import { Input } from "shared/ui/Input/Input";
import cls from "./LoginForm.module.scss";

interface LoginFormProps {
  className?: string;
}

export const LoginForm = ({ className }: LoginFormProps) => {
  const { t } = useTranslation();
  const [isShowPassword, setIsShowPassword] = useState(true);
  const [passwordType, setPasswordType] =
    useState<HTMLInputTypeAttribute>("text");

  const onToggleShowPassword = () => {
    setPasswordType(passwordType === "text" ? "password" : "text");
    setIsShowPassword((prev) => !prev);
  };

  return (
    <div className={classNames(cls.LoginForm, {}, [className])}>
      <Input
        autofocus
        placeholder={t("enter_username")}
        type="text"
        className={cls.input}
      />
      <Input
        placeholder={t("enter_password")}
        type={passwordType}
        className={cls.input}
      />
      <label className={cls.showPassword}>
        {t("show_password")}
        <input
          type="checkbox"
          id="is_show_password"
          checked={isShowPassword}
          onChange={onToggleShowPassword}
        />
      </label>
      <Button buttonTheme={ButtonTheme.OUTLINE} className={cls.loginBtn}>
        {t("login")}
      </Button>
    </div>
  );
};
