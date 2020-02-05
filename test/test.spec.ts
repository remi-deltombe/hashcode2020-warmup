import * as assert from "assert";
import { getTestData } from "./test_words";

describe("hello", () => {
  it("world", () => {
    console.log(getTestData());
    assert(true);
  });
});
