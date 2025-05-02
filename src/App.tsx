import { Suspense } from "react";
import { Link, Route, Routes } from "react-router-dom";
import { AboutPageAsync } from "./pages/AboutPage/AboutPage.Async";
import { MainPageAsync } from "./pages/MainPage/MainPage.Async";
import "./styles/index.scss";
import { useTheme } from "./theme/useTheme";

const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={`app ${theme}`}>
      <Link to={"/"}>Главная страница</Link>
      <Link to={"/about"}>О сайте</Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/about" element={<AboutPageAsync />} />
          <Route path="/" element={<MainPageAsync />} />
        </Routes>
      </Suspense>
      <button onClick={toggleTheme}>Toggle theme</button>
    </div>
  );
};

export default App;
