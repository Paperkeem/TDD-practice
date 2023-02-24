const fetchProduct = require("../async.js");

describe("async", () => {
  it("async", () => {
    fetchProduct().then((res) =>
      expect(res).toEqual({ item: "Milk", price: 200 })
    );
  });
});
