import { describe, expect, test } from "@jest/globals";
import calc from "../src/calc";

describe("calculator", () => {
  test("imports a calculator object with appropriate methods", () => {
    expect(typeof calc).toBe("object");
    expect(typeof calc.add).toBe("function");
    expect(typeof calc.sub).toBe("function");
    expect(typeof calc.multiply).toBe("function");
    expect(typeof calc.divide).toBe("function");
  });
  test("add works properly", () => {
    expect(calc.add(1, 2)).toBe(3);
  });
  test("sub works properly", () => {
    expect(calc.sub(2, 1)).toBe(1);
  });
  test("multiply works properly", () => {
    expect(calc.multiply(3, 3)).toBe(9);
  });
  test("divide works properly", () => {
    expect(calc.divide(4, 2)).toBe(2);
  });
});
