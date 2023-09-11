const Cart = require("./cart");

describe("cart", () => {
  describe("addItem", () => {
    test("items add to cart", () => {
      const cart = new Cart();
      cart.addItem({ name: "laptop", price: 1000 });
      expect(cart.items.length).toBe(1);
      expect(cart.items[0].name).toBe("laptop");
    });
  });

  describe("getTotalPrice", () => {
    test("total price of items in cart", () => {
      const cart = new Cart();
      cart.addItem({ name: "laptop", price: 1000 });
      cart.addItem({ name: "smartphone", price: 500 });
      expect(cart.getTotalPrice()).toBe(1500);
    });
  });
});
