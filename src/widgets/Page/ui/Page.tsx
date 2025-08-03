import { useScrollSave } from "features/UIManagement/ScrollSave";
import { memo, MutableRefObject, ReactNode, UIEvent, useRef } from "react";
import { useLocation } from "react-router-dom";
import { THROTTLE_SCROLL_DELAY } from "shared/const/delays";
import { classNames } from "shared/lib/classNames/classNames";
import { useInfiniteScroll } from "shared/lib/hooks/useInfiniteScroll/useInfiniteScroll";
import { useInitialEffect } from "shared/lib/hooks/useInitialEffect/useInitialEffect";
import { useThrottle } from "shared/lib/hooks/useThrottle/useThrottle";
import { TestProps } from "shared/types/tests/testProps";
import * as cls from "./Page.module.scss";

interface PageProps extends TestProps {
  className?: string;
  children: ReactNode;
  saveScrollPosition?: boolean;
  onScrollEnd?: () => void;
}

export const Page = memo((props: PageProps) => {
  const {
    className,
    children,
    saveScrollPosition = false,
    onScrollEnd,
    "data-testid": testId = "Page",
  } = props;

  const { pathname } = useLocation();
  const { position, setPageScrollPosition } = useScrollSave(pathname);

  const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;
  const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;

  useInfiniteScroll({
    triggerRef,
    wrapperRef,
    callback: onScrollEnd,
  });

  useInitialEffect(() => {
    wrapperRef.current.scrollTop = position;
    console.log("set to page position", position);
  });

  //Просчёт скролла раз в ThrottleScrollDelay мс
  const onScroll = useThrottle((e: UIEvent<HTMLDivElement>) => {
    if (saveScrollPosition) {
      let position = e.currentTarget.scrollTop;
      let path = pathname;
      setPageScrollPosition(path, position);
      console.log("set to store position", position);
    }
  }, THROTTLE_SCROLL_DELAY);

  return (
    <section
      data-testid={testId}
      ref={wrapperRef}
      onScroll={onScroll}
      className={classNames(cls.Page, {}, [className])}
    >
      {children}
      {onScrollEnd && <div ref={triggerRef} style={{ height: 10 }} />}
    </section>
  );
});
