describe("Страница со списком статей", () => {
  beforeEach(() => {
    cy.login();

    cy.intercept("GET", "/articles?*", {
      fixture: "/article/article-list.json",
    });

    cy.visit("/articles");
  });

  it("Успешный переход на страницу", () => {
    cy.getByTestId("ArticlesPage").should("exist");
    cy.getByTestId("ListButtonSwitcher").click();
    cy.getByTestId("ListArticlesList").should("have.length.greaterThan", 0);

    cy.getByTestId("GridButtonSwitcher").click();
    cy.getByTestId("GridArticlesList").should("have.length.greaterThan", 0);
  });
});
