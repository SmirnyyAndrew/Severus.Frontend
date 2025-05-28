import { configureStore } from "@reduxjs/toolkit";
import { StateSchema } from "app/providers/StoreProvider";
import { ReactNode } from "react";
import { Provider } from "react-redux";
import { ReducersList } from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";

interface StoreProviderWrapperProps {
  children: ReactNode;
  reducers: ReducersList;
  preloadedState?: Partial<StateSchema>;
}

export const StoreProviderWrapper = ({
  children,
  reducers,
  preloadedState,
}: StoreProviderWrapperProps) => {
  const store = configureStore({
    reducer: reducers,
    preloadedState, // ✅ передаём state
  });

  return <Provider store={store}>{children}</Provider>;
};
