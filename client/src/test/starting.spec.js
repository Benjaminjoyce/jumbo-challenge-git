import { expect } from "chai";

const isEven = num => {
  return num % 2 === 0;
};

describe("unit tests", () => {
  it("should return true when the number is even", () => {
    expect(isEven(4)).to.equal(true);
  });
});
