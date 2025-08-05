import { DeepPartial } from "@reduxjs/toolkit";
import { render } from "@testing-library/react";
import { StateSchema, StoreProvider } from "app/providers/StoreProvider";
import { Theme, ThemeProvider } from "app/providers/ThemeProvider";
import "app/styles/index.scss";
import { ReactNode } from "react";
import { I18nextProvider } from "react-i18next";
import { MemoryRouter } from "react-router-dom";
import { Routes } from "shared/const/router";
import i18nForTest from "../../../config/i18n/i18nForTest";

export interface componentRenderOptions {
  route?: string;
  initialState?: DeepPartial<StateSchema>;
  theme?: Theme;
}

interface TestProviderProps {
  children: ReactNode;
  options?: componentRenderOptions;
}

export function TestProvider(props: TestProviderProps) {
  const { children, options = {} } = props;
  const {
    route = Routes.MainPages.Main(),
    theme = Theme.LIGHT,
    initialState,
  } = options;

  return (
    <MemoryRouter initialEntries={[route]}>
      <StoreProvider initialState={initialState as StateSchema}>
        <I18nextProvider i18n={i18nForTest}>
          <ThemeProvider initialTheme={theme}>
            <div className={`app ${theme}`}>{children}</div>
          </ThemeProvider>
        </I18nextProvider>
      </StoreProvider>
    </MemoryRouter>
  );
}

export function ComponentRender(
  component: ReactNode,
  options?: componentRenderOptions
) {
  return render(<TestProvider options={options} children={component} />);
}
