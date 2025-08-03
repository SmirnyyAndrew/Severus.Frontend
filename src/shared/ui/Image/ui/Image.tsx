import { ARTICLE_IMAGE_ERROR } from "shared/const/plugFiles";
import { classNames } from "shared/lib/classNames/classNames";
import { TestProps } from "shared/types/tests/testProps";
import { Text, TextSize } from "shared/ui/Text";
import * as cls from "./Image.module.scss";

interface ImageProps extends TestProps {
  className?: string;
  src: string;
  title?: string;
}

export const Image = (props: ImageProps) => {
  const { className, src, title, "data-testid": testId = "Image" } = props;

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
