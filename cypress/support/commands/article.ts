import { Article } from "entities/Article";
import { BACKEND_URL } from "shared/const/connectionStrings";
import {
  defaultMockArticle,
  mockArticleId,
} from "../../fixtures/defaultMockArticle";

export const createArticle = (article?: Article) => {
  return cy
    .request({
      method: "POST",
      url: `${BACKEND_URL}/articles`,
      headers: {
        Authorization: "Bearer 123",
      },
      body: article ?? defaultMockArticle,
    })
    .then((resp) => resp.body);
};

export const removeArticle = (articleId?: string) => {
  cy.request({
    method: "DELETE",
    url: `${BACKEND_URL}/articles/${articleId ?? mockArticleId}`,
    headers: {
      Authorization: "Bearer 123",
    },
  });
};

declare global {
  namespace Cypress {
    interface Chainable {
      createArticle(article?: Article): Chainable<Article>;
      removeArticle(articleId?: string): Chainable<void>;
    }
  }
}
