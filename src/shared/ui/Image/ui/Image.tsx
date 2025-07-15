import { errorArticleImg } from "shared/const/plugFiles";
import { classNames } from "shared/lib/classNames/classNames";
import { Text, TextSize } from "shared/ui/Text";
import * as cls from "./Image.module.scss";

interface ImageProps {
  className?: string;
  src: string;
  title?: string;
}

export const Image = (props: ImageProps) => {
  const { className, src, title } = props;

  return (
    <div className={classNames(cls.Image, {}, [className])}>
      <img src={src} onError={(e) => (e.currentTarget.src = errorArticleImg)} />
      {title && <Text text={title} size={TextSize.XS} className={cls.title} />}
    </div>
  );
};
