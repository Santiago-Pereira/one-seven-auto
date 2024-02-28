describe("log in", () => {
  it("Tries to log in with valid credentials", () => {
    cy.visit("https://foodiehub.com.my/");
    //Move mouse to the account icon in the top right part of the screen
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
  });
});
