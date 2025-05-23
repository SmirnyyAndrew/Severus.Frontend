import { configureStore, ReducersMapObject } from "@reduxjs/toolkit";
import { StateSchema } from "app/providers/StoreProvider";
import { Provider } from "react-redux";

interface StoreProviderWrapperProps {
  reducers: Partial<ReducersMapObject<StateSchema>>;
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
