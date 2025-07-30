import { ARTICLE_IMAGE_ERROR } from "shared/const/plugFiles";
import { classNames } from "shared/lib/classNames/classNames";
import { Text, TextSize } from "shared/ui/Text";
import * as cls from "./Image.module.scss";

interface ImageProps {
  className?: string;
  src: string;
  title?: string;
  "data-testid"?: string;
}

export const Image = (props: ImageProps) => {
  const { className, src, title, "data-testid": testId = Image.name } = props;

  return (
    <div
      data-testid={testId}
      className={classNames(cls.Image, {}, [className])}
    >
      <img
        src={src}
        onError={(e) => (e.currentTarget.src = ARTICLE_IMAGE_ERROR)}
      />
      {title && <Text text={title} size={TextSize.XS} className={cls.title} />}
    </div>
  );
};
