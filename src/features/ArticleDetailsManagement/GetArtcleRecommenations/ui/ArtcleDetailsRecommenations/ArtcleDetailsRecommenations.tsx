import { classNames } from "shared/lib/classNames/classNames";
import { Text, TextSize } from "shared/ui/Text";
import cls from "./ArtcleDetailsRecommenations.module.scss";

interface ArtcleDetailsRecommenationsProps {
  className?: string;
}

export const ArtcleDetailsRecommenations = (
  props: ArtcleDetailsRecommenationsProps
) => {
  const { className } = props;

  return (
    <div
      className={classNames(cls.ArtcleDetailsRecommenations, {}, [className])}
    >
      <Text isCenter size={TextSize.L} text={"Рекомендуем"}></Text>
    </div>
  );
};
