import { useUserAuth } from "entities/User/model/hooks/useUserAuth";
import { Suspense, useEffect } from "react";
import "shared/config/i18n/i18n";
import { classNames } from "shared/lib/classNames/classNames";
import { useTheme } from "shared/lib/hooks/useTheme/useTheme";
import { Navbar } from "widgets/Navbar";
import { Sidebar } from "widgets/Sidebar/ui";
import { AppRouter } from "./providers/router";

const App = () => {
  const { theme } = useTheme();
  const { initAuthDataFromLocalStore } = useUserAuth();

  useEffect(() => {
    initAuthDataFromLocalStore();
  }, [initAuthDataFromLocalStore]);

  return (
    <div className={classNames("app", {}, [theme])}>
      <Suspense fallback={""}>
        <Navbar />
        <div className="content-page">
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  );
};

export default App;
