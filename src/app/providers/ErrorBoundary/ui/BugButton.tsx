import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "shared/ui/Button";

interface BugButtonProps {
  className?: string;
}

export const BugButton = ({ className }: BugButtonProps) => {
  const [isError, setError] = useState<boolean>(false);
  const toggleButton = () => {
    setError(true);
  };

  useEffect(() => {
    if (isError) throw new Error("It's test error from comp BugButton");
  }, [isError]);

  const { t } = useTranslation();

  return (
    <div>
      <Button onClick={toggleButton}>{t("bug_button")}</Button>
    </div>
  );
};
