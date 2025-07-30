import { CSSProperties } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import * as cls from "./Skeleton.module.scss";

interface SkeletonProps {
  className?: string;
  height?: string | number;
  width?: string | number;
  border?: string;
  "data-testid"?: string;
}

export const Skeleton = (props: SkeletonProps) => {
  const {
    className,
    height,
    width,
    border,
    "data-testid": testId = Skeleton.name,
  } = props;

  const styles: CSSProperties = {
    width,
    height,
    borderRadius: border,
  };

  return (
    <div
      data-testid={testId}
      style={styles}
      className={classNames(cls.Skeleton, {}, [className])}
    ></div>
  );
};
