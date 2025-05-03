import { Link } from "react-router-dom";
import { classNames } from "shared/lib/classNames/classNames";
import { AppRouter } from "./providers/router";
import { useTheme } from "./providers/ThemeProvider";
import "./styles/index.scss";

const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <Link to={"/"}>Главная страница</Link>
      <Link to={"/about"}>О сайте</Link>
      <AppRouter />

      {/* <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<MainPage />} />
        </Routes>
      </Suspense> */}
      <button onClick={toggleTheme}>Toggle theme</button>
    </div>
  );
};

export default App;
