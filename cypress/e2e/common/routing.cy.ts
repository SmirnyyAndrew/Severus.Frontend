describe("template spec", () => {
  describe("Пользователь НЕ авторизован", () => {
    it("Переход на главную страницу", () => {
      cy.visit("/");
      cy.getByTestId("MainPage").should("exist");
    });
    it("Попытка перехода на страницу пользователя (редирект на главную страницу)", () => {
      cy.visit("/profile/1");
      cy.getByTestId("MainPage").should("exist");
    });
    it("Переход на несуществующую страницу", () => {
      cy.visit("/kldfgkdie34983kdsd/sdsd2120q9sq/12saclvo");
      cy.getByTestId("NotFoundPage").should("exist");
    });
  });

  describe("Пользователь авторизован", () => {
    beforeEach(() => {
      cy.login("admin", "123");
    });
    it("Переход на страницу пользователя", () => {
      cy.visit("/profile/1");
      cy.getByTestId("ProfilePage").should("exist");
    });

    it("Переход на страницу со списком статей", () => {
      cy.visit("/articles");
      cy.getByTestId("ArticlesPage").should("exist");
    });
  });
});
