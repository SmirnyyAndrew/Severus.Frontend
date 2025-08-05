import { mockArticleId } from "cypress/fixtures/defaultMockArticle";

describe("Страница со списком статьёй", () => {
  beforeEach(() => {
    cy.login();
    cy.createArticle();
    cy.intercept("GET", "/comments*").as("getComments");
    cy.visit(`/articles/${mockArticleId}`);
  });

  afterEach(() => {
    cy.removeArticle();
  });

  it("Отрисовка статьи", () => {
    cy.getByTestId("ArticleDetailsPage").should("exist");
  });

  it("Отрисовка рекомендаций", () => {
    cy.getByTestId("ArticleDetailsRecommenations").should("exist");
  });

  it("Оценка статьи", () => {
    cy.getByTestId("ArticleDetailsPage").should("exist");
    cy.getByTestId("AddNewCommentForm").scrollIntoView();
    cy.setRate(3);
  });

  it("Отправка комментария", () => {
    cy.wait("@getComments");

    cy.getByTestId("ArticleDetailsPage").should("be.visible");
    cy.sendComment();
    cy.getByTestId("CommentCard").should("exist");
  });
});
