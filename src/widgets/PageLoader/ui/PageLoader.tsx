import { classNames } from "shared/lib/classNames/classNames";
import { TestProps } from "shared/types/tests/testProps";
import { Loader } from "shared/ui/Loader/Loader";
import * as cls from "./PageLoader.module.scss";

interface PageLoaderProps extends TestProps {
  className?: string;
}

export const PageLoader = (props: PageLoaderProps) => {
  const { className, "data-testid": testId = "PageLoader" } = props;
  return (
    <div
      data-testid={testId}
      className={classNames(cls.PageLoader, {}, [className])}
    >
      <Loader />
    </div>
  );
};
