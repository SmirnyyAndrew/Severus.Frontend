import { InputHTMLAttributes, memo } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import { TestProps } from "shared/types/tests/testProps";
import * as cls from "./Input.module.scss";

type HTMLInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "value" | "onChange"
>;

interface InputProps extends HTMLInputProps, TestProps {
  className?: string;
  value?: string;
  onChange?: (value: string) => void;
  autofocus?: boolean;
}

export const Input = memo((props: InputProps) => {
  const {
    className,
    value,
    type = "text",
    onChange,
    placeholder,
    autofocus,
    "data-testid": testId = "Input",
    ...otherProps
  } = props;

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
  };
  return (
    <div className={classNames(cls.InputWrapper, {}, [className])}>
      {placeholder && (
        <div className={cls.placeholder}>{`${placeholder}>`}</div>
      )}
      <input
        {...otherProps}
        value={value}
        data-testid={testId}
        type={type}
        autoFocus={autofocus}
        onChange={onChangeHandler}
        className={cls.input}
      />
    </div>
  );
});
