import { add, subtract, multiply, divide } from "../calculator";

describe("calculator", () => {
  describe("add", () => {
    it("adds two positive numbers", () => {
      expect(add(2, 3)).toBe(5);
    });

    it("adds negative numbers", () => {
      expect(add(-1, -2)).toBe(-3);
    });

    it("adds zero", () => {
      expect(add(5, 0)).toBe(5);
    });
  });

  describe("subtract", () => {
    it("subtracts two numbers", () => {
      expect(subtract(10, 4)).toBe(6);
    });

    it("returns negative when result is negative", () => {
      expect(subtract(3, 7)).toBe(-4);
    });
  });

  describe("multiply", () => {
    it("multiplies two numbers", () => {
      expect(multiply(3, 4)).toBe(12);
    });

    it("multiplies by zero", () => {
      expect(multiply(5, 0)).toBe(0);
    });

    it("multiplies negative numbers", () => {
      expect(multiply(-2, 3)).toBe(-6);
    });
  });

  describe("divide", () => {
    it("divides two numbers", () => {
      expect(divide(10, 2)).toBe(5);
    });

    it("returns a decimal result", () => {
      expect(divide(1, 4)).toBe(0.25);
    });

    it("throws on division by zero", () => {
      expect(() => divide(5, 0)).toThrow("Division by zero");
    });
  });
});
