import { StateSchema } from "app/providers/StoreProvider";
import {
  getScrollPositionByPath,
  ScrollSaveActions,
} from "features/ScrollSave";
import { memo, MutableRefObject, ReactNode, UIEvent, useRef } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { classNames } from "shared/lib/classNames/classNames";
import { useAppDispatch } from "shared/lib/hooks/useAppDispathcer/useAppDispatch";
import { useInfiniteScroll } from "shared/lib/hooks/useInfiniteScroll/useInfiniteScroll";
import { useInitialEffect } from "shared/lib/hooks/useInitialEffect/useInitialEffect";
import { useThrottle } from "shared/lib/hooks/useThrottle/useThrottle";
import cls from "./Page.module.scss";

interface PageProps {
  className?: string;
  children: ReactNode;
  isScrollable?: boolean;
  onScrollEnd?: () => void;
}

export const Page = memo((props: PageProps) => {
  const { className, children, isScrollable, onScrollEnd } = props;

  const dispatch = useAppDispatch();
  const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;
  const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;
  const { pathname } = useLocation();
  const position = useSelector((state: StateSchema) =>
    getScrollPositionByPath(state, pathname)
  );

  useInfiniteScroll({
    triggerRef,
    wrapperRef,
    callback: onScrollEnd,
  });

  useInitialEffect(() => {
    wrapperRef.current.scrollTop = position;
  });

  //Просчёт скролла раз в 500 мс
  const onScroll = useThrottle((e: UIEvent<HTMLDivElement>) => {
    let position = e.currentTarget.scrollTop;
    let path = pathname;
    dispatch(ScrollSaveActions.setPageScrollPosition({ path, position }));
  }, 500);

  return (
    <section
      ref={wrapperRef}
      onScroll={onScroll}
      className={classNames(cls.Page, {}, [className])}
    >
      {children}
      <div ref={triggerRef} style={{ height: 100, background: "red" }} />
    </section>
  );
});
