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
import { Column, Row } from "shared/ui/Stack";
import { TextSize } from "shared/ui/Text/model/types/TextSize";
import { TextThemes } from "shared/ui/Text/model/types/TextThemes";
import { Text } from "shared/ui/Text/ui/Text";
import { loginReducer, useLogin } from "../..";
import * as cls from "./LoginForm.module.scss";

export interface LoginFormProps {
  className?: string;
  onSuccess: () => void;
}

const initialReducers: ReducersList = {
  login: loginReducer,
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

  const onChangeUsername = useCallback(
    (username: string) => {
      setUsername(username);
    },
    [setUsername]
  );

  const onChangePassword = useCallback(
    (password: string) => {
      setPassword(password);
    },
    [setPassword]
  );

  const onLoginClick = useCallback(async () => {
    const result = await loginByUsername();

    if (result.meta.requestStatus === "fulfilled") onSuccess();
  }, [loginByUsername, onSuccess]);

  return (
    <DynamicModuleLoader reducers={initialReducers} removeAfterUnmount={false}>
      <Column
        alignItems="start"
        className={classNames(cls.LoginForm, {}, [className])}
      >
        {error && (
          <Text text={t("check_auth_data")} textTheme={TextThemes.ERROR} />
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
        <Row alignItems="center" justifyContents="end">
          <Input
            type="checkbox"
            id="is_show_password"
            checked={isShowPassword}
            onChange={onToggleShowPassword}
          />
          <Text
            onClick={onToggleShowPassword}
            size={TextSize.XS}
            position="end"
            text={t("show_password")}
          />
        </Row>
        <Button
          buttonTheme={ButtonTheme.OUTLINE}
          onClick={onLoginClick}
          className={cls.loginBtn}
          disabled={isLoading}
        >
          {t("login")}
        </Button>
      </Column>
    </DynamicModuleLoader>
  );
});

export default LoginForm;
