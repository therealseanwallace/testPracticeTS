import { describe, expect, test } from "@jest/globals";
import analyzeArray from "../src/analyzeArray";

describe("analyze array", () => {
  test("returns an object with the desired properties", () => {
    expect(typeof analyzeArray([1,8,3,4,2,6])).toBe("object");
    expect(typeof analyzeArray([1,8,3,4,2,6]).average).toBe("number");
    expect(typeof analyzeArray([1,8,3,4,2,6]).min).toBe("number");
    expect(typeof analyzeArray([1,8,3,4,2,6]).max).toBe("number");
    expect(typeof analyzeArray([1,8,3,4,2,6]).length).toBe("number");
  });

  test("returns correct values for average, min, max, and length", () => {
    expect(analyzeArray([1,8,3,4,2,6]).average).toBe(4);
    expect(analyzeArray([1,8,3,4,2,6]).min).toBe(1);
    expect(analyzeArray([1,8,3,4,2,6]).max).toBe(8);
    expect(analyzeArray([1,8,3,4,2,6]).length).toBe(6);
  })
})