describe("checks the wpp button", () => {
  it("Checks if the wpp button works correctly", () => {
    cy.visit("https://foodiehub.com.my/");
    cy.get("#wrapper > div:nth-child(4) > a > i")
      .should("be.visible")
      .wait(1500)
      .click();
  });
});
