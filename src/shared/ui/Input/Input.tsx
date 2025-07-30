import { InputHTMLAttributes, memo } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import * as cls from "./Input.module.scss";

type HTMLInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "value" | "onChange"
>;

interface InputProps extends HTMLInputProps {
  className?: string;
  value?: string;
  onChange?: (value: string) => void;
  autofocus?: boolean;
  "data-testid"?: string;
}

export const Input = memo((props: InputProps) => {
  const {
    className,
    value,
    type = "text",
    onChange,
    placeholder,
    autofocus,
    "data-testid": testId = Input.name,
    ...otherProps
  } = props;

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
  };
  return (
    <div
      data-testid={testId}
      className={classNames(cls.InputWrapper, {}, [className])}
    >
      {placeholder && (
        <div className={cls.placeholder}>{`${placeholder}>`}</div>
      )}
      <input
        {...otherProps}
        value={value}
        type={type}
        autoFocus={autofocus}
        onChange={onChangeHandler}
        className={cls.input}
      />
    </div>
  );
});
