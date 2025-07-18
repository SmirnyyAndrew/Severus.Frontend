import { useCallback, useState } from "react";
import DoneIcon from "shared/assets/icons/shared/done-icon.svg";
import CopyIcon from "shared/assets/icons/theme/copy-icon.svg";
import { classNames } from "shared/lib/classNames/classNames";
import { Icon, IconSize } from "shared/ui/Icon";
import * as cls from "./Code.module.scss";

interface CodeProps {
  className?: string;
  code: string;
}

export const Code = (props: CodeProps) => {
  const { className, code } = props;
  const [isCopied, setIsCopied] = useState(false);

  const onClickCopyIcon = useCallback(() => {
    navigator.clipboard.writeText(code);
    setIsCopied(true);
  }, [code]);

  const copyIcon = isCopied ? DoneIcon : CopyIcon;

  return (
    <pre className={classNames(cls.Code, {}, [className])}>
      <div onClick={onClickCopyIcon}>
        <Icon
          Svg={copyIcon}
          iconSize={IconSize.L}
          className={classNames(isCopied ? cls.doneIcon : cls.copyIcon, {}, [
            className,
          ])}
        />
      </div>
      <code>{code}</code>
    </pre>
  );
};
