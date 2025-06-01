import { classNames } from "shared/lib/classNames/classNames";
import { Text, TextSize } from "shared/ui/Text";
import cls from "./Icon.module.scss";

export enum IconSize {
  S = "size_s",
  L = "size_l",
  XL = "size_xl",
}

interface IconProps {
  className?: string;
  Svg: React.VFC<React.SVGProps<SVGSVGElement>>;
  iconSize?: IconSize;
  textSize?: TextSize;
  text?: string;
}

export const Icon = (props: IconProps) => {
  const {
    className,
    Svg,
    text,
    textSize = TextSize.S,
    iconSize = IconSize.S,
  } = props;

  return (
    <div className={cls.IconWrapper}>
      {text && <Text text={text} size={textSize} isCenter />}
      <Svg className={classNames(cls.Icon, {}, [className, cls[iconSize]])} />
    </div>
  );
};
