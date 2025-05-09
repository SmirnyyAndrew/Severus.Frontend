import { I18nextProvider } from "react-i18next";
import i18n from "shared/config/i18n/i18n";

export const I18nextDecorator = (Story: React.FC) => (
  <I18nextProvider i18n={i18n}>
    <Story />
  </I18nextProvider>
);
