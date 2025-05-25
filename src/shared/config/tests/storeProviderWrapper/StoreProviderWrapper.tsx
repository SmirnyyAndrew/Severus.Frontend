import { configureStore } from "@reduxjs/toolkit";
import { StoreProvider } from "app/providers/StoreProvider";
import { MemoryRouter } from "react-router-dom";
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
    <MemoryRouter>
      <StoreProvider>{children}</StoreProvider>
    </MemoryRouter>
  );
};
