import { classNames } from "shared/lib/classNames/classNames";
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

interface IconProps {
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
  } = props;

  const fillStyles: Record<IconFills, string> = {
    [IconFills.BACKGROUND]: "backgroundFill",
    [IconFills.INVERTED_BACKGROUND]: "invertedBackgroundFill",
    [IconFills.MAIN]: "mainFill",
    [IconFills.NONE]: "noneFill",
  };

  return (
    <div className={cls.IconWrapper} onClick={onClick}>
      {text && <Text text={text} size={textSize} />}
      <Svg
        className={classNames(cls[fillStyles[iconFill]], {}, [
          className,
          cls[iconSize],
        ])}
      />
    </div>
  );
};
