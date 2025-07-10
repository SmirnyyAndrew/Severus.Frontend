import { classNames } from "shared/lib/classNames/classNames";
import cls from "./[FTName].module.scss"; 

interface [FTName]Props {
  className?: string;
}

export const [FTName] = (props: [FTName]Props) => { 
  const {className} = props;

  return (
    <div className={classNames(cls.[FTName], {}, [className])}>
    </div>
  );
};