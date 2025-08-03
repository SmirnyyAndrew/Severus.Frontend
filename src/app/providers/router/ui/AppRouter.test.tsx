import { screen } from "@testing-library/react";
import { UserRole } from "entities/User";
import { act } from "react";
import { Routes } from "shared/const/router";
import { ComponentRender } from "shared/lib/tests/componentRender/ComponentRender";
import { AppRouter } from "./AppRouter";

describe("AppRouter", () => {
  test("Рендер страницы", async () => {
    ComponentRender(<AppRouter />, {
      route: Routes.MainPages.About(),
    });

    // используем findByTestId, а не getByTestId, потому что
    // страница грузится лениво
    const page = await screen.findByTestId("AboutPage");
    expect(page).toBeInTheDocument();
  });

  test("Страница не найдена", async () => {
    ComponentRender(<AppRouter />, {
      route: "/gl4359klfgkdgjsloioer02kcxzlpadflfueqwskp",
    });

    const page = await screen.findByTestId("NotFoundPage");
    expect(page).toBeInTheDocument();
  });

  test("Редирект неавторизованного пользователя (authOnly without roles)", async () => {
    await act(() => {
      ComponentRender(<AppRouter />, {
        route: Routes.Profile.Info("1"),
      });
    });

    const page = await screen.findByTestId("MainPage");
    expect(page).toBeInTheDocument();
  });

  test("Редирект неавторизованного пользователя (roles)", async () => {
    await act(() => {
      ComponentRender(<AppRouter />, {
        route: Routes.Admin.Panel(),
      });
    });

    const page = await screen.findByTestId("ForbiddenPage");
    expect(page).toBeInTheDocument();
  });

  test("Доступ к странице авторизованного пользователя", async () => {
    await act(() => {
      ComponentRender(<AppRouter />, {
        route: Routes.Profile.Info("1"),
        initialState: {
          user: {
            _inited: true,
            authData: {
              id: "1",
              username: "username",
            },
          },
        },
      });
    });

    const page = await screen.findByTestId("ProfilePage");
    expect(page).toBeInTheDocument();
  });

  test("Доступ к странице админа (админ)", async () => {
    await act(() => {
      ComponentRender(<AppRouter />, {
        route: Routes.Admin.Panel(),
        initialState: {
          user: {
            _inited: true,
            authData: {
              roles: [UserRole.ADMIN],
            },
          },
        },
      });
    });

    const page = await screen.findByTestId("AdminPanelPage");
    expect(page).toBeInTheDocument();
  });

  test("Доступ к странице админа (менеджер)", async () => {
    await act(() => {
      ComponentRender(<AppRouter />, {
        route: Routes.Admin.Panel(),
        initialState: {
          user: {
            _inited: true,
            authData: {
              roles: [UserRole.MANAGER],
            },
          },
        },
      });
    });

    const page = await screen.findByTestId("AdminPanelPage");
    expect(page).toBeInTheDocument();
  });
});
