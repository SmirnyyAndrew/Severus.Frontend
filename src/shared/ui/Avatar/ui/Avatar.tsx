import { USER_AVATAR_ERROR } from "shared/const/plugFiles";
import { classNames, Mods } from "shared/lib/classNames/classNames";
import * as cls from "./Avatar.module.scss";

export enum AvatarSize {
  XS = "size_xs",
  S = "size_s",
  L = "size_l",
  XL = "size_xl",
}

interface AvatarProps {
  className?: string;
  img?: string;
  alt?: string;
  size?: AvatarSize;
  isRound?: boolean;
}

export const Avatar = (props: AvatarProps) => {
  const { className, img, alt, isRound = false, size = AvatarSize.S } = props;

  const mods: Mods = {
    [cls.isRound]: isRound,
  };

  return (
    <img
      onError={(e) => (e.currentTarget.src = USER_AVATAR_ERROR)}
      src={img}
      alt={alt ?? ""}
      className={classNames(cls.Avatar, mods, [className, cls[size]])}
    />
  );
};
