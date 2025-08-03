import { classNames } from "shared/lib/classNames/classNames";
import { TestProps } from "shared/types/tests/testProps";
import { Text, TextSize } from "shared/ui/Text";
import * as cls from "./Icon.module.scss";

export enum IconSize {
  S = "size_s",
  L = "size_l",
  XL = "size_xl",
}

export enum IconFills {
  BACKGROUND = "background",
  INVERTED_BACKGROUND = "inverted_background",
  MAIN = "main",
  NONE = "none",
}

interface IconProps extends React.SVGProps<SVGSVGElement>, TestProps {
  className?: string;
  Svg: React.VFC<React.SVGProps<SVGSVGElement>>;
  iconSize?: IconSize;
  textSize?: TextSize;
  text?: string;
  iconFill?: IconFills;
  onClick?: () => void;
}

export const Icon = (props: IconProps) => {
  const {
    className,
    Svg,
    text,
    onClick,
    textSize = TextSize.S,
    iconSize = IconSize.S,
    iconFill = IconFills.NONE,
    "data-testid": testId = "Icon",
    ...otherProps
  } = props;

  const fillStyles: Record<IconFills, string> = {
    [IconFills.BACKGROUND]: "backgroundFill",
    [IconFills.INVERTED_BACKGROUND]: "invertedBackgroundFill",
    [IconFills.MAIN]: "mainFill",
    [IconFills.NONE]: "noneFill",
  };

  return (
    <div data-testid={testId} className={cls.IconWrapper} onClick={onClick}>
      {text && <Text text={text} size={textSize} />}
      <Svg
        className={classNames(cls[fillStyles[iconFill]], {}, [
          className,
          cls[iconSize],
        ])}
        {...otherProps}
      />
    </div>
  );
};
