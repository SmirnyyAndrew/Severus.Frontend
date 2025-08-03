import { CSSProperties } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import { TestProps } from "shared/types/tests/testProps";
import * as cls from "./Skeleton.module.scss";

interface SkeletonProps extends TestProps {
  className?: string;
  height?: string | number;
  width?: string | number;
  border?: string;
}

export const Skeleton = (props: SkeletonProps) => {
  const {
    className,
    height,
    width,
    border,
    "data-testid": testId = "Skeleton",
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
