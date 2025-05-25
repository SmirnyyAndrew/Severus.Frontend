import { StoryFn } from "@storybook/react/*";
import { StoreProvider } from "app/providers/StoreProvider";
import { loginReducer } from "features/AuthByUsername/model/slice/loginSlice";
import { ReducersList } from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";

const defaultAsyncReducers: ReducersList = {
  login: loginReducer,
};

export const ReduxDecorator = (Story: StoryFn) => (
  <StoreProvider asyncReducers={defaultAsyncReducers}>
    <Story />
  </StoreProvider>
);
