import * as cls from "./Loader.module.scss";

interface LoaderProps {
  className?: string;
  "data-testid"?: string;
}

export const Loader = (props: LoaderProps) => {
  const { className, "data-testid": testId = Loader.name } = props;
  return (
    <div data-testid={testId} className={cls["lds-ring"]}>
      <div />
      <div />
      <div />
      <div />
    </div>
  );
};
