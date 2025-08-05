import { BACKEND_URL } from "shared/const/connectionStrings";

export const updateProfile = (age: number) => {
  cy.getByTestId("EditModalAgeInput")
    .should("not.be.disabled")
    .and("not.have.value", "")
    .clear()
    .type(age.toString());
};

export const resetProfile = (profileId: string) => {
  return cy.request({
    method: "PUT",
    url: `${BACKEND_URL}/profile/${profileId}`,
    headers: {
      Authorization: "Bearer 123",
    },
    body: {
      id: profileId,
      username: "testuser",
      name: "user",
      location: "Germany",
      age: "25",
      gender: "male",
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRu91U1pA6XCQh3M65eynACLt22hooZei1M5w&s",
    },
  });
};

declare global {
  namespace Cypress {
    interface Chainable {
      updateProfile(age: number): Chainable<void>;
      resetProfile(profileId: string): Chainable<void>;
    }
  }
}
