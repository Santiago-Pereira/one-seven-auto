describe("check products link", () => {
  it("Checks if the products link takes you to that section", () => {
    cy.visit("https://foodiehub.com.my/");
    cy.get("#navi-bar > div > div > a").should("be.visible").wait(1500).click();
  });
});
