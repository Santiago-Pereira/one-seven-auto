describe("Adding item to cart", () => {
  it("It selects and add one item to cart", () => {
    cy.visit("https://www.foodiehub.com.my/special?sg_type_pg=all_products");

    //Selects the item and adds it to cart
    cy.get(
      "#main-content > div > div.module-container > div.box.module-product.product-listing.imageswap > div > div:nth-child(3) > div > div.item-info > div.floating-cart-button > div > span.btn-add-cart > input[type=button]"
    ).click({ force: true });

    //Increases the quantity of the product by 1
    cy.get(" #quantity_0_plus > i").click({ force: true });

    //Proceeds to checkout
    cy.get(
      " #shopping-cart > div.shopping-cart-frame > div.shopping-cart-total > div:nth-child(2) > div > a > input"
    ).click();

    //Removes the items from cart
    cy.get(
      "#my-checkout-list > div.my-checkout-listing > div > div.column.is-10 > div > div.column.is-4.product-quantity > div.product-delete > a"
    ).click();
  });
});
