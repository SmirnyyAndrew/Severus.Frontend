import { useScrollSave } from "features/UIManagement/ScrollSave";
import { memo, MutableRefObject, ReactNode, UIEvent, useRef } from "react";
import { useLocation } from "react-router-dom";
import { classNames } from "shared/lib/classNames/classNames";
import { useInfiniteScroll } from "shared/lib/hooks/useInfiniteScroll/useInfiniteScroll";
import { useInitialEffect } from "shared/lib/hooks/useInitialEffect/useInitialEffect";
import { useThrottle } from "shared/lib/hooks/useThrottle/useThrottle";
import cls from "./Page.module.scss";

interface PageProps {
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

  //Просчёт скролла раз в 500 мс
  const onScroll = useThrottle((e: UIEvent<HTMLDivElement>) => {
    if (saveScrollPosition) {
      let position = e.currentTarget.scrollTop;
      let path = pathname;
      setPageScrollPosition(path, position);
      console.log("set to store position", position);
    }
  }, 500);

  return (
    <section
      ref={wrapperRef}
      onScroll={onScroll}
      className={classNames(cls.Page, {}, [className])}
    >
      {children}
      {onScrollEnd && (
        <div ref={triggerRef} style={{ height: 100, background: "grey" }} />
      )}
    </section>
  );
});
