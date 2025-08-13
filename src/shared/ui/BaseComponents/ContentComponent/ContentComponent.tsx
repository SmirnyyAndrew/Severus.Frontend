import { ReactNode } from "react";

interface ContentPageComponentProps {
  children: ReactNode;
}

export const ContentPageComponent = (props: ContentPageComponentProps) => {
  const { children } = props;

  return <div className="content-page">{children}</div>;
};
