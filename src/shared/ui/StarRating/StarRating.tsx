import { useState } from "react";
import DoneIcon from "shared/assets/icons/shared/star-icon.svg";
import { classNames, Mods } from "shared/lib/classNames/classNames";
import { TestProps } from "shared/types/tests/testProps";
import { Icon, IconSize } from "../Icon";
import { Row } from "../Stack";
import * as cls from "./StarRating.module.scss";

export type StarRate = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;

export interface StarRatingProps extends TestProps {
  starRate: StarRate | undefined;
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
    starsCount,
    onSelect,
    "data-testid": testId = "StarRating",
  } = props;
  const [selectedStar, setSelectedStar] = useState<StarRate | undefined>(
    starRate
  );

  const [enterStar, setEnterStar] = useState<StarRate | undefined>(undefined);

  const onStarClick = (index: number) => {
    if (forbiddenChange) return;

    const indexToStarRate = (index + 1) as StarRate;

    if (indexToStarRate !== selectedStar) setSelectedStar(indexToStarRate);

    setEnterStar(undefined);
    onSelect && onSelect(indexToStarRate);
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
    if (enterStar) return index < enterStar ? cls.enter : cls.star;

    return cls.star;
  };

  const mods = (index: number): Mods => {
    if (!selectedStar) return {};

    return {
      [cls.selected]: index < selectedStar && !enterStar,
    };
  };

  const PrintStars = (
    <Row onMouseLeave={onStarsLeave} justifyContents="center">
      {Array.from({ length: starsCount ?? 5 }).map((_, i) => (
        <Icon
          key={i}
          data-testid={`StarRating_${i + 1}`}
          Svg={DoneIcon}
          onClick={() => onStarClick(i)}
          iconSize={IconSize.L}
          className={classNames(baseStarStyles(i), mods(i), [className])}
          onMouseEnter={() => onStarEnter(i)}
        />
      ))}
    </Row>
  );

  return (
    <div data-testid={testId} className={className}>
      {PrintStars}
    </div>
  );
};
