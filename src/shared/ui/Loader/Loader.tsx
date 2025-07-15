import * as cls from "./Loader.module.scss";

interface LoaderProps {
  className?: string;
}

export const Loader = ({ className }: LoaderProps) => {
  return (
    <div className={cls["lds-ring"]}>
      <div />
      <div />
      <div />
      <div />
    </div>
  );
};
