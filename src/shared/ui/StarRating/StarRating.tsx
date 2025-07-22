import { useState } from "react";
import DoneIcon from "shared/assets/icons/shared/star-icon.svg";
import { classNames, Mods } from "shared/lib/classNames/classNames";
import { Icon, IconSize } from "../Icon";
import { Row } from "../Stack";
import * as cls from "./StarRating.module.scss";

export type StarRate = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;

interface StarRatingProps {
  starRate: StarRate;
  starsCount?: StarRate;
  forbiddenChange?: boolean;
  className?: string;
  onSelect?: (selectedStarsCount: StarRate) => void;
}

export const StarRating = (props: StarRatingProps) => {
  const {
    starRate,
    className,
    forbiddenChange = false,
    starsCount = 5,
    onSelect,
  } = props;
  const [selectedStar, setSelectedStar] = useState(starRate);
  const [enterStar, setEnterStar] = useState<StarRate | undefined>(undefined);

  const onStarClick = (index: number) => {
    if (forbiddenChange) return;

    const indexToStarRate = (index + 1) as StarRate;
    if (indexToStarRate !== selectedStar) setSelectedStar(indexToStarRate);

    setEnterStar(undefined);
    onSelect && onSelect(selectedStar);
  };

  const onStarEnter = (index: number) => {
    if (forbiddenChange) return;

    const indexToStarRate = (index + 1) as StarRate;
    setEnterStar(indexToStarRate);
  };

  const onStarsLeave = () => {
    if (forbiddenChange) return;

    setEnterStar(undefined);
  };

  const baseStarStyles = (index: number) => {
    if (enterStar) return index < enterStar ? cls.enter : "";

    return "";
  };

  const mods = (index: number): Mods => {
    return {
      [cls.selected]: index < selectedStar && !enterStar,
    };
  };

  const PrintStars = () => (
    <Row onMouseLeave={onStarsLeave} justifyContents="center">
      {Array.from({ length: starsCount }).map((_, i) => (
        <Icon
          key={i}
          Svg={DoneIcon}
          onClick={() => onStarClick(i)}
          iconSize={IconSize.L}
          className={classNames(baseStarStyles(i), mods(i), [className])}
          onMouseEnter={() => onStarEnter(i)}
        />
      ))}
    </Row>
  );

  return <div className={className}>{PrintStars()}</div>;
};
