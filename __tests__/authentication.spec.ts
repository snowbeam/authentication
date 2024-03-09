export function sum(a: number, b: number): number {
  return a + b;
}

describe("sum function", () => {
  it("should add two numbers correctly", () => {
    expect(sum(2, 3)).toEqual(5);
  });

  it("should handle negative numbers", () => {
    expect(sum(-2, 3)).toEqual(1);
  });

  it("should return zero when adding zero to any number", () => {
    expect(sum(0, 5)).toEqual(5);
    expect(sum(-3, 0)).toEqual(-3);
    expect(sum(0, 0)).toEqual(0);
  });
});
