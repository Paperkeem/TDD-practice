const fetchProduct = require("../async.js");

describe("async", () => {
  // 비동기적인 함수를 테스트할 때는 done이라는 인자를 받아와서 함수가 끝난 뒤 호출해 준다.
  it("async-done", (done) => {
    fetchProduct().then((res) =>
      expect(res).toEqual({ item: "Milk", price: 200 })
    );
    done();
  });

  // 테스트 코드를 return 하면 done callback을 사용하지 않더라도 깔끔하게 테스트 할 수 있다.
  it("async-return", () => {
    return fetchProduct().then((res) =>
      expect(res).toEqual({ item: "Milk", price: 200 })
    );
  });

  it("async-await", async () => {
    const product = await fetchProduct();
    expect(product).toEqual({ item: "Milk", price: 200 });
  });

  it("async-resolve", () => {
    return expect(fetchProduct()).resolves.toEqual({
      item: "Milk",
      price: 200,
    });
  });

  it("async-reject", () => {
    return expect(fetchProduct("error")).rejects.toBe("network error");
  });
});
