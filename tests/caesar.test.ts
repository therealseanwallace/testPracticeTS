import { describe, expect, test } from "@jest/globals";
import caesar from "../src/caesar";

describe("caesar cipher", () => {
  test("encodes a string of the same case correctly", () => {
    expect(caesar("abcde", 1)).toBe("bcdef");
  });

  test("encodes a string with different cases correctly", () => {
    expect(caesar("AbCdE", 1)).toBe("BcDeF")
  })

  test("works with strings including punctuation", () => {
    expect(caesar("ABCDE!.?()", 1)).toBe("BCDEF!.?()")
  })

  test("wrapping from z to a works", () => {
    expect(caesar("yz", 2)).toBe("ab");
    expect(caesar("z", 1)).toBe("a");
  })
});