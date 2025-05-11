import { useCallback, useState } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";
import { Button } from "shared/ui/Button";
import { ButtonTheme } from "shared/ui/Button/ui/Button";
import { Modal } from "shared/ui/Modal/Modal";
import cls from "./Navbar.module.scss";

interface NavbarProps {
  className?: string;
}

export const Navbar = ({}: NavbarProps) => {
  const { t } = useTranslation();
  const [isShownAuthModal, setIsShownAuthModal] = useState(false);

  const onToggleLogin = useCallback(() => {
    setIsShownAuthModal((prev) => !prev);
  }, []);

  return (
    <div className={classNames(cls.navbar)}>
      <div className={cls.links}>
        <AppLink to={"/"} linkTheme={AppLinkTheme.PRIMARY}>
          {t("nav_main_page")}
        </AppLink>
        <AppLink to={"/about"} linkTheme={AppLinkTheme.PRIMARY}>
          {t("nav_about_page")}
        </AppLink>
      </div>

      <Button
        className={cls.login}
        onClick={onToggleLogin}
        buttonTheme={ButtonTheme.OUTLINE_INVERTED}
      >
        {t("login")}
      </Button>

      <Modal isOpen={isShownAuthModal} onClose={onToggleLogin}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, nisi
        suscipit obcaecati voluptates, rerum explicabo laborum quo numquam modi
        quibusdam vitae perspiciatis rem in id minima qui unde. Soluta, quod!
      </Modal>
    </div>
  );
};
