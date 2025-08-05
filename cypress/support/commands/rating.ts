import { StarRate } from "shared/ui/StarRating/StarRating";

export const setRate = (rate: StarRate) => {
  cy.getByTestId(`StarRating_${rate}`).click();
  cy.getByTestId("RatingCard.FeedbackInput").type("Нормалёк");
  cy.getByTestId("RatingCard.SendFeedback").click();
};

declare global {
  namespace Cypress {
    interface Chainable {
      setRate(rate: StarRate): Chainable<void>;
    }
  }
}
