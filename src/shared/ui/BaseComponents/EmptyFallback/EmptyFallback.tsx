import { ReactNode, Suspense } from "react";

interface EmptySuspenseProps {
  children: ReactNode;
}

export const EmptySuspense = (props: EmptySuspenseProps) => {
  const { children } = props;

  return <Suspense fallback={""}>{children}</Suspense>;
};
