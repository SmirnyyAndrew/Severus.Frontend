import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { ReducersList } from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";

interface StoreProviderWrapperProps {
  reducers: ReducersList;
}

export const StoreProviderWrapper = (props: StoreProviderWrapperProps) => {
  const { reducers } = props;
  const store = configureStore({
    reducer: reducers,
  });

  return ({ children }: { children: React.ReactNode }) => (
    <Provider store={store}>{children}</Provider>
  );
};
