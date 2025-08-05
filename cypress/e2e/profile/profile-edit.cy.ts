import { faker } from "@faker-js/faker";
import { User } from "entities/User";

let user: User = {};

describe("Страница профиля", () => {
  beforeEach(() => {
    cy.visit("/");

    cy.intercept("GET", "**/profile*", {
      fixture: "/profile/profile.json",
    }).as("getProfile");

    cy.login().then((data) => {
      cy.visit(`/profile/${data.id}`);
      user = data;
    });
  });

  afterEach(() => {
    cy.resetProfile(user.id ?? "4");
  });

  it("Редактирование профиля", () => {
    cy.getByTestId("ProfilePageEditProfileButton").should("exist").click();

    cy.wait("@getProfile");

    cy.updateProfile(faker.number.int({ min: 20, max: 45 }));

    cy.getByTestId("ModalEditProfileButton").click();
    cy.get("body").type("{esc}");
    cy.getByTestId("EditProfileDataForm").should("not.exist");
  });
});
