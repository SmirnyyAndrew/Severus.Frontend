import { useCallback, useState } from "react";
import DoneIcon from "shared/assets/icons/shared/done-icon.svg";
import CopyIcon from "shared/assets/icons/theme/copy-icon.svg";
import { classNames } from "shared/lib/classNames/classNames";
import { TestProps } from "shared/types/tests/testProps";
import { Icon, IconFills, IconSize } from "shared/ui/Icon";
import * as cls from "./Code.module.scss";

interface CodeProps extends TestProps {
  className?: string;
  code: string;
}

export const Code = (props: CodeProps) => {
  const { className, code, "data-testid": testid = "Code" } = props;
  const [isCopied, setIsCopied] = useState(false);

  const onClickCopyIcon = useCallback(() => {
    navigator.clipboard.writeText(code);
    setIsCopied(true);
  }, [code]);

  const ToCopyIcon = (
    <Icon
      Svg={CopyIcon}
      iconSize={IconSize.L}
      iconFill={IconFills.NONE}
      className={classNames(cls.copyIcon, {}, [className])}
    />
  );

  const CopiedIcon = (
    <Icon
      Svg={DoneIcon}
      iconSize={IconSize.L}
      iconFill={IconFills.BACKGROUND}
      className={classNames(cls.doneIcon, {}, [className])}
    />
  );

  return (
    <pre data-testid={testid} className={classNames(cls.Code, {}, [className])}>
      <div onClick={onClickCopyIcon}>{isCopied ? CopiedIcon : ToCopyIcon}</div>
      <code>{code}</code>
    </pre>
  );
};
