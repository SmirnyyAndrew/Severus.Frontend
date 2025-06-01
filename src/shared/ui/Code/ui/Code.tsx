import { useCallback } from "react";
import CopyIcon from "shared/assets/icons/theme/copy-icon.svg";
import { classNames } from "shared/lib/classNames/classNames";
import { Icon, IconSize } from "shared/ui/Icon";
import cls from "./Code.module.scss";

interface CodeProps {
  className?: string;
  code: string;
}

export const Code = (props: CodeProps) => {
  const { className, code } = props;

  const onClickCopyIcon = useCallback(() => {
    navigator.clipboard.writeText(code);
  }, [code]);

  return (
    <pre className={classNames(cls.Code, {}, [className])}>
      <div onClick={onClickCopyIcon}>
        <Icon Svg={CopyIcon} iconSize={IconSize.L} className={cls.copyIcon} />
      </div>
      <code>{code}</code>
    </pre>
  );
};
