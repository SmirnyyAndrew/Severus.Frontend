import { useUserAuth } from "entities/User/model/hooks/useUserAuth";
import { useEffect } from "react";
import "shared/config/i18n/i18n";
import { AppComponent } from "shared/ui/BaseComponents/AppComponent/AppComponent";
import { ContentPageComponent } from "shared/ui/BaseComponents/ContentComponent/ContentComponent";
import { EmptySuspense } from "shared/ui/BaseComponents/EmptyFallback/EmptyFallback";
import { Navbar } from "widgets/Navbar";
import { Sidebar } from "widgets/Sidebar/ui";
import { AppRouter } from "./providers/router";

const App = () => {
  const { initAuthDataFromLocalStore } = useUserAuth();

  useEffect(() => {
    initAuthDataFromLocalStore();
  }, [initAuthDataFromLocalStore]);

  return (
    <AppComponent>
      <EmptySuspense>
        <Navbar />
        <ContentPageComponent>
          <Sidebar />
          <AppRouter />
        </ContentPageComponent>
      </EmptySuspense>
    </AppComponent>
  );
};

export default App;
