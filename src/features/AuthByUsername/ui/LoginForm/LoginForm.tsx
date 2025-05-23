import { profileReducer } from "entities/Profile";
import { useLogin } from "features/AuthByUsername/model/hooks/useLogin";
import { loginReducer } from "features/AuthByUsername/model/slice/loginSlice";
import { HTMLInputTypeAttribute, memo, useCallback, useState } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import {
  DynamicModuleLoader,
  ReducersList,
} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { Button } from "shared/ui/Button";
import { ButtonTheme } from "shared/ui/Button/ui/Button";
import { Input } from "shared/ui/Input/Input";
import { Text, TextThemes } from "shared/ui/Text/Text";
import cls from "./LoginForm.module.scss";

export interface LoginFormProps {
  className?: string;
  onSuccess: () => void;
}

const initialReducers: ReducersList = {
  login: loginReducer,
  profile: profileReducer,
};

const LoginForm = memo(({ className, onSuccess }: LoginFormProps) => {
  const { t } = useTranslation();

  const {
    username,
    setUsername,
    password,
    setPassword,
    isLoading,
    error,
    loginByUsername,
  } = useLogin();

  const [isShowPassword, setIsShowPassword] = useState(true);
  const [passwordType, setPasswordType] =
    useState<HTMLInputTypeAttribute>("text");

  const onToggleShowPassword = () => {
    setPasswordType(passwordType === "text" ? "password" : "text");
    setIsShowPassword((prev) => !prev);
  };

  const onChangeUsername = useCallback((username: string) => {
    setUsername(username);
  }, []);

  const onChangePassword = useCallback((password: string) => {
    setPassword(password);
  }, []);

  const onLoginClick = useCallback(async () => {
    const result = await loginByUsername();

    if (result.meta.requestStatus === "fulfilled") onSuccess();
  }, [password, username]);

  return (
    <DynamicModuleLoader reducers={initialReducers}>
      <div className={classNames(cls.LoginForm, {}, [className])}>
        {error && (
          <Text isCenter textTheme={TextThemes.ERROR}>
            {t("check_auth_data")}
          </Text>
        )}
        <Input
          autofocus
          placeholder={t("enter_username")}
          value={username}
          onChange={onChangeUsername}
          type="text"
          className={cls.input}
        />
        <Input
          placeholder={t("enter_password")}
          value={password}
          onChange={onChangePassword}
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
        <Button
          buttonTheme={ButtonTheme.OUTLINE}
          onClick={onLoginClick}
          className={cls.loginBtn}
          disabled={isLoading}
        >
          {t("login")}
        </Button>
      </div>
    </DynamicModuleLoader>
  );
});

export default LoginForm;
