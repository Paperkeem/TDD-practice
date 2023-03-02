const Calculator = require("../calculator.js");

// 단위 테스트를 작성함으로써 문서화할 수 있다는 장점이 있다.

// 모든 코드들은 repository에 merge되기 전에 테스트 과정을 거쳐야 한다. 이는 내 코드에 대한 신뢰도를 높혀 팀원들을 설득할 수 있는 증거가 된다.
// 리팩토링을 하며 테스트를 작성하면, 테스트를 통과했다는 자신감을 얻을 수 있다.
// 테스트 코드를 작성하는 이유는 내가 작성한 코드가 내가 예상한 대로 잘 동작하고 있다는 검증을 하기 위함이다.

// 관련있는 테스트는 describe를 통해 그룹으로 묶어준 뒤 테스트를 작성한다.

describe("calculator", () => {
  // 코드 중복을 줄이기 위해 모든 각각의 테스트 전에 실행되는 beforeEach 메소드를 이용할 수 있다.

  // 각각의 테스트는 독립적으로 이루어져야 한다. 각 오브젝트가 초기화 될 수 있도록 인스턴스를 항상 새로 생성할 수 있도록 beforeEach 메소드를 이용.
  let cal;
  beforeEach(() => {
    cal = new Calculator();
  });

  it("init with 0", () => {
    expect(cal.value).toBe(0);
  });

  it("sets", () => {
    cal.set(2);
    expect(cal.value).toBe(2);
  });

  it("clear", () => {
    cal.set(2);
    cal.clear();
    expect(cal.value).toBe(0);
  });

  it("add", () => {
    cal.set(1);
    cal.add(3);
    expect(cal.value).toBe(4);
  });

  it("add should throw an error", () => {
    expect(() => {
      cal.add(101);
    }).toThrow(Error);
  });

  it("subtract", () => {
    cal.set(1);
    cal.subtract(3);
    expect(cal.value).toBe(-2);
  });

  it("multiply", () => {
    cal.set(2);
    cal.multiply(3);
    expect(cal.value).toBe(6);
  });

  describe("divided", () => {
    it("0 / 0 === NaN", () => {
      cal.divide(0);
      expect(cal.value).toBe(NaN);
    });
    it("1 / 0 === Infinity", () => {
      cal.set(1);
      cal.divide(0);
      expect(cal.value).toBe(Infinity);
    });
    it("4 / 4 === 1", () => {
      cal.set(4);
      cal.divide(4);
      expect(cal.value).toBe(1);
    });
  });
});
