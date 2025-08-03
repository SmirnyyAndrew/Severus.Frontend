import { memo, ReactNode, useCallback, useEffect } from "react";
import { DRAWER_ANIMATION_DURABILITY } from "shared/const/delays";
import { classNames, Mods } from "shared/lib/classNames/classNames";
import {
  AnimationProvider,
  useAnimationLibs,
} from "shared/lib/components/AnimationProvider";
import { useModal } from "shared/lib/hooks/useModal/useModal";
import { useTheme } from "shared/lib/hooks/useTheme/useTheme";
import { TestProps } from "shared/types/tests/testProps";
import { Overlay } from "../Overlay/Overlay";
import { Portal } from "../Portal/Portal";
import * as cls from "./Drawer.module.scss";

interface DrawerProps extends TestProps {
  className?: string;
  children: ReactNode;
  isOpen?: boolean;
  onClose?: () => void;
  lazy?: boolean;
}

const DrawerContent = memo((props: DrawerProps) => {
  const {
    className,
    children,
    isOpen,
    onClose,
    lazy = false,
    "data-testid": testid = "Drawer",
  } = props;
  const { Gesture, Spring } = useAnimationLibs();

  const {
    isClosing,
    isMounted,
    close: closeModal,
  } = useModal({
    animationDelay: DRAWER_ANIMATION_DURABILITY,
    isOpen,
    onClose,
  });
  const { theme } = useTheme();

  const height = window.innerHeight - 100;
  const [{ y }, api] = Spring.useSpring(() => ({ y: height }));

  // запуск анимации при запуске
  const openDrawer = useCallback(() => {
    api.start({ y: 0, immediate: false });
  }, [api]);

  useEffect(() => {
    if (isOpen) openDrawer();
  }, [api, openDrawer, isOpen]);

  // стоп анимации
  const closeDrawer = (velocity: number = 0) => {
    api.start({
      y: height,
      immediate: false,
      config: {
        ...Spring.config.stiff,
        velocity,
      },
      onResolve: onClose,
    });
  };

  const bind = Gesture.useDrag(
    ({ last, velocity: [, vy], direction: [, dy], offset: [, oy], cancel }) => {
      if (oy < -70) cancel();

      if (last) {
        oy > height * 0.5 || (vy > 0.5 && dy > 0)
          ? closeDrawer()
          : openDrawer();
      } else api.start({ y: oy, immediate: true });
    },
    {
      from: () => [0, y.get()],
      filterTaps: true,
      bounds: { top: 0 },
      rubberband: true,
    }
  );

  if (!isOpen) return null;

  const display = y.to((py) => (py < height ? "block" : "none"));

  const mods: Mods = {
    [cls.opened]: isOpen,
    [cls.isClosing]: isClosing,
  };

  if (lazy && !isMounted) return null;

  return (
    <Portal data-testid={testid}>
      <div
        className={classNames(cls.Drawer, mods, [
          className,
          theme,
          "app_drawer",
        ])}
      >
        <Overlay onClick={closeModal} />
        <Spring.a.div
          className={cls.sheet}
          {...bind()}
          style={{ display, bottom: `calc(-100vh + ${height - 100}px)`, y }}
        >
          <div className={cls.content}>{children}</div>
        </Spring.a.div>
      </div>
    </Portal>
  );
});

const DrawerAsync = memo((props: DrawerProps) => {
  const { isLoaded } = useAnimationLibs();

  if (!isLoaded) return null;

  return <DrawerContent {...props} />;
});

export const Drawer = memo((props: DrawerProps) => {
  return (
    <AnimationProvider>
      <DrawerAsync {...props} />
    </AnimationProvider>
  );
});
