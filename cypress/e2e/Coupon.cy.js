describe("checks the wpp button", () => {
  it("Checks if the wpp button works correctly", () => {
    cy.visit("https://foodiehub.com.my/");
    cy.get("#myaccount > div > div.dropdown-trigger > a > i")
      .should("be.visible")
      .trigger("mouseover");

    //Clicks the button and takes you to the log in section
    cy.get("#myaccount > div > div.dropdown-menu > div > a").click({
      force: true,
    });

    //It focuses on the input so it can write over it the username
    cy.get("#login > form > div.form-body > div:nth-child(1) > div > input")
      .focus()
      .type("t34716467@gmail.com");

    //It focuses over the password input so it can write over it the password
    cy.get(
      "#login > form > div.form-body > div:nth-child(2) > div > div.control.addon-fix > input"
    )
      .focus()
      .type("1111");

    //It clicks the button to sign in
    cy.get("#login > form > div.form-footer.field > input").click();

    /*  //copies the coupon code
    cy.get(
      " #main-content > div > div:nth-child(3) > div > div > div.coupon-list > div > div > div.coupon-code > div.use-coupon > i"
    ).click(); */

    //Clicks on the cooking paste menu inside the dropdown in the navbar
    cy.get("#navi-bar > div > div > div > a:nth-child(3)").click({
      force: true,
    });

    //Adds chicken curry to cart
    cy.get(
      " #main-content > div > div.box.module-product.product-listing.imageswap > div > div:nth-child(2) > div > div.item-info > div.floating-cart-button > div > span.btn-add-cart > input[type=button]"
    ).click({ force: true });

    //Focuses on the input where the code should be pasted
    cy.get("#coupon").click({ force: true });

    cy.get("#coupon").type("LITTLEORIGIN5%");

    //Clicks on apply button
    cy.get("#btn_apply_coupon").click({ force: true });
  });
});
