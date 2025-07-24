import { DeepPartial } from "@reduxjs/toolkit";
import { render } from "@testing-library/react";
import { StateSchema, StoreProvider } from "app/providers/StoreProvider";
import { ReactNode } from "react";
import { I18nextProvider } from "react-i18next";
import { MemoryRouter } from "react-router-dom";
import { RoutePath } from "shared/const/router";
import i18nForTest from "../../../config/i18n/i18nForTest";

export interface componentRenderOptions {
  route?: string;
  initialState?: DeepPartial<StateSchema>;
}
export function ComponentRender(
  component: ReactNode,
  options: componentRenderOptions = {}
) {
  const { route = RoutePath.main, initialState } = options;

  return render(
    <MemoryRouter initialEntries={[route]}>
      <StoreProvider initialState={initialState as StateSchema}>
        <I18nextProvider i18n={i18nForTest}>{component}</I18nextProvider>
      </StoreProvider>
    </MemoryRouter>
  );
}
