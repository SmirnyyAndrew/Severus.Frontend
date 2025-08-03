import { ReactNode } from "react";
import { MODAL_ANIMATION_DURABILITY } from "shared/const/delays";
import { classNames, Mods } from "shared/lib/classNames/classNames";
import { useModal } from "shared/lib/hooks/useModal/useModal";
import { useTheme } from "shared/lib/hooks/useTheme/useTheme";
import { Overlay } from "../Overlay/Overlay";
import { Portal } from "../Portal/Portal";
import * as cls from "./Modal.module.scss";

interface ModalProps {
  className?: string;
  children?: ReactNode;
  isOpen?: boolean;
  onClose?: () => void;
  lazy?: boolean;
  "data-testid"?: string;
}

export const Modal = (props: ModalProps) => {
  const {
    className,
    children,
    isOpen,
    onClose,
    lazy,
    "data-testid": testId = "Modal",
  } = props;
  const { isClosing, isMounted, close } = useModal({
    animationDelay: MODAL_ANIMATION_DURABILITY,
    isOpen,
    onClose,
  });
  const { theme } = useTheme();

  const mods: Mods = {
    [cls.opened]: isOpen,
    [cls.isClosing]: isClosing,
  };

  if (lazy && !isMounted) return null;

  return (
    <Portal data-testid={testId}>
      <div
        className={classNames(cls.Modal, mods, [className, theme, "app_modal"])}
      >
        <Overlay onClick={close} />
        <div className={cls.content}>{children}</div>
      </div>
    </Portal>
  );
};
