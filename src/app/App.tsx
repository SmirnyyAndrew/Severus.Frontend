import { userActions } from "entities/User";
import { useUserAuth } from "entities/User/model/hooks/useUserAuth";
import { Suspense, useEffect } from "react";
import { useDispatch } from "react-redux";
import "shared/config/i18n/i18n";
import { classNames } from "shared/lib/classNames/classNames";
import { Navbar } from "widgets/Navbar";
import { Sidebar } from "widgets/Sidebar/ui";
import { AppRouter } from "./providers/router";
import { useTheme } from "./providers/ThemeProvider";

const App = () => {
  const { theme } = useTheme();

  const dispatch = useDispatch();

  const { inited } = useUserAuth();

  useEffect(() => {
    dispatch(userActions.initAuthData());
  }, [dispatch]);

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
