import { TestProps } from "shared/types/tests/testProps";
import * as cls from "./SidebarRedesigned.module.scss";

interface SidebarDeprecatedProps extends TestProps {
  className?: string;
}

export const SidebarRedesigned = (props: SidebarDeprecatedProps) => {
  const { className, "data-testid": testId = "Sidebar" } = props;

  return (
    <div className={cls.Sidebar}>
      <p> Lorem. </p>
      <p> Lorem. </p>
      <p> Lorem. </p>
      <p> Lorem. </p>
      <p> Lorem. </p>
      <p> Lorem. </p>
      <p> Lorem. </p>
    </div>
  );
};
