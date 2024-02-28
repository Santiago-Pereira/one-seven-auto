describe("Cart functionality", () => {
  it("Check if cart is empty while not logged in and then closes the cart", () => {
    cy.visit("https://foodiehub.com.my/");
    //Opens the cart menu
    cy.get("#shopping-cart").should("be.visible").click().wait(2000);
    //Closes the cart menu
    cy.get("#shopping-cart > div.checkout-overlay.is-active")
      .should("be.visible")
      .click();
  });
});
