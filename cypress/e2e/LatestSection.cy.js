describe("checks the latest section text", () => {
  it("Checks if there is a text call Latest in home", () => {
    cy.visit("https://foodiehub.com.my/");
    cy.get("#module-latest > div.title")
      .should("be.visible")
      .should("contain.text", "Latest");
  });
});
