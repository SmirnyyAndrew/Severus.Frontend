import { classNames } from "shared/lib/classNames/classNames";
import { TestProps } from "shared/types/tests/testProps";
import * as cls from "./Overlay.module.scss";

interface OverlayProps extends TestProps {
  className?: string;
  onClick?: () => void;
}

export const Overlay = (props: OverlayProps) => {
  const { className, onClick, "data-testid": testId = "Overlay" } = props;

  return (
    <div
      data-testid={testId}
      onClick={onClick}
      className={classNames(cls.Overlay, {}, [className])}
    />
  );
};
