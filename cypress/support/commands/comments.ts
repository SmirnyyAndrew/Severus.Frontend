export const sendComment = (text?: string) => {
  cy.getByTestId("AddNewCommentForm.CommentInput")
    .scrollIntoView()
    .and("not.be.disabled")
    .and("be.visible")
    .type(text ?? "e2e comment");

  cy.getByTestId("AddNewCommentForm.SendCommentButton")
    .and("not.be.disabled")
    .and("be.visible")
    .click();
};

declare global {
  namespace Cypress {
    interface Chainable {
      sendComment(text?: string): Chainable<void>;
    }
  }
}
