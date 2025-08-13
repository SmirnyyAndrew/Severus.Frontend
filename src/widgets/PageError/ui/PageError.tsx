import { memo } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import { TestProps } from "shared/types/tests/testProps";
import { Button } from "shared/ui/Button";
import * as cls from "./PageError.module.scss";

interface PageErrorProps extends TestProps {
  className?: string;
}

export const PageError = memo((props: PageErrorProps) => {
  const { className, "data-testid": testId = "PageError" } = props;
  const { t } = useTranslation();

  const reloadPage = () => {
    location.reload();
  };

  return (
    <div data-testid={testId} className={classNames(cls.PageError)}>
      <h1>{t("page_error")}</h1>
      <Button onClick={reloadPage}>{t("update_page")}</Button>
    </div>
  );
});
