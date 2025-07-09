import { useNavigate } from "react-router-dom";
import { RoutePath } from "shared/config/routerConfig/routerConfig";
import { Button } from "shared/ui/Button";

export const BackToArticlesButton = () => {
  const navigate = useNavigate();
  const onBackButtonClick = () => {
    navigate(RoutePath.articles);
  };

  return <Button onClick={onBackButtonClick}>Назад</Button>;
};
