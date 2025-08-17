import { useProfile } from "entities/Profile";
import { useUserAuth } from "entities/User/model/hooks/useUserAuth";
import { useEffect } from "react";
import "shared/config/i18n/i18n";
import { MainLayout } from "shared/layouts/MainLayout";
import { ToggleFeatures } from "shared/lib/features";
import { AppComponent } from "shared/ui/HelperComponents/AppComponent/AppComponent";
import { AppRedesignedComponent } from "shared/ui/HelperComponents/AppRedesignedComponent/AppRedesignedComponent";
import { ContentPageComponent } from "shared/ui/HelperComponents/ContentComponent/ContentComponent";
import { EmptySuspense } from "shared/ui/HelperComponents/EmptyFallback/EmptyFallback";
import { Loader } from "shared/ui/Loader/Loader";
import { Navbar } from "widgets/Navbar";
import { Sidebar } from "widgets/Sidebar/ui";
import { AppRouter } from "./providers/router";

const App = () => {
  const { initAuthDataFromLocalStore } = useUserAuth();
  const { profileData: profile, getProfileDataFromDB } = useProfile();
  const { authData, inited } = useUserAuth();

  useEffect(() => {
    if (!profile) {
      getProfileDataFromDB(authData?.id);
    }
  }, [profile, authData, getProfileDataFromDB]);

  useEffect(() => {
    initAuthDataFromLocalStore();
  }, [initAuthDataFromLocalStore]);

  if (!inited) return <Loader />;

  const appDeprecated = (
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

  const appRedesigned = (
    <AppRedesignedComponent>
      <EmptySuspense>
        <MainLayout
          header={<Navbar />}
          content={<AppRouter />}
          sidebar={<Sidebar />}
          toolbar={<div>toolbar</div>}
        />
      </EmptySuspense>
    </AppRedesignedComponent>
  );

  return (
    <ToggleFeatures
      name={"isAppRedesinged"}
      on={appRedesigned}
      off={appDeprecated}
    />
  );
};

export default App;
