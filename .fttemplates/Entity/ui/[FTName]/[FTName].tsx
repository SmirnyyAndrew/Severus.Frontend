import { use[FTName] } from "entities/Counter/model/hooks/use[FTName]";
import { classNames } from "shared/lib/classNames/classNames";
import { Button } from "shared/ui/Button";
import * as cls from "./[FTName].module.scss";
import { useTranslation } from "react-i18next";

interface [FTName]Props {
  className?: string;
}

export const [FTName] = (props: [FTName]Props) => {
  const { className } = props;
  const { action } = use[FTName]();
  const { t } = useTranslation();

  return (
    <div className={classNames(cls.[FTName], {}, [className])}>
      
    </div>
  );
};
