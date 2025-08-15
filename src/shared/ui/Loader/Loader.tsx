import { TestProps } from "shared/types/tests/testProps";
import * as cls from "./Loader.module.scss";

interface LoaderProps extends TestProps {
  className?: string;
}

export const Loader = (props: LoaderProps) => {
  const { "data-testid": testId = "Loader" } = props;
  return (
    <div data-testid={testId} className={cls["lds-ring"]}>
      <div />
      <div />
      <div />
      <div />
    </div>
  );
};
