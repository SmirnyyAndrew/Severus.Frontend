import { ReactNode } from "react";

export interface ListBoxItem {
  value: string;
  content: ReactNode;
  disabled?: boolean;
}
