import { ProfileCard, ProfileExample } from "entities/Profile";
import {
  componentRenderOptions,
  TestProvider,
} from "shared/lib/tests/componentRender/ComponentRender";
describe("ProfileCard", () => {
  it("Render", () => {
    const options: componentRenderOptions = {
      initialState: {
        profile: {
          profileData: ProfileExample(),
        },
      },
    };
    cy.intercept("GET", "/profile", {
      fixture: "profile/profile.json",
    });
    cy.mount(<TestProvider options={options} children={<ProfileCard />} />);
  });
});
