declare module "*.module.scss" {
  interface IClassNames {
    [className: string]: string;
  }
  const classNames: IClassNames;
  export = classNames;
}

declare module "*.png";
declare module "*.jpg";
declare module "*.jpeg";

declare module "*.svg" {
  import { SVGProps } from "react";
  const ReactComponent: (props: SVGProps<SVGSVGElement>) => JSX.Element;
  export default ReactComponent;
}

declare const __IS_DEV__: boolean;
declare const __API__: string;
declare const __IS_STORYBOOK__: boolean;

type OptionalRecord<K extends keyof any, T> = { [P in K]?: T };

type DeepPartial<T> = T extends object
  ? {
      [P in keyof T]?: DeepPartial<T[P]>;
    }
  : T;
