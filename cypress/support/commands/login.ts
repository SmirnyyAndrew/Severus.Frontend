import { DataTestIdFormatter } from "cypress/helpers/DataTestIdFormatter";
import { User } from "entities/User";
import { BACKEND_URL } from "shared/const/connectionStrings";
import { USER_LOCALSTORAGE_KEY } from "shared/const/localstorage";

export const login = (
  username: string = "testuser",
  password: string = "123"
) => {
  cy.request({
    method: "POST",
    url: `${BACKEND_URL}/login`,
    body: {
      username,
      password,
    },
  }).then(({ body }) => {
    window.localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(body));
    return body;
  });
};

export const getByTestId = (testId: string) => {
  return cy.get(DataTestIdFormatter(testId));
};

declare global {
  namespace Cypress {
    interface Chainable {
      login(email?: string, password?: string): Chainable<User>;
      getByTestId(testId: string): ReturnType<typeof cy.get>;
    }
  }
}
