import {describe, expect, test} from '@jest/globals';
import reverseString from "../src/reverseString";

test('reverses a given string', () => {
  expect(reverseString("henlo")).toBe("olneh")
})

