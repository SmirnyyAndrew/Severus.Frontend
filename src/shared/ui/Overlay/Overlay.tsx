import { classNames } from "shared/lib/classNames/classNames";
import * as cls from "./Overlay.module.scss";

interface OverlayProps {
  className?: string;
  onClick?: () => void;
  "data-testid"?: string;
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
