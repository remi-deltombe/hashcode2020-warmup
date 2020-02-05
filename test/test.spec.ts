import * as assert from "assert";
import { getTestData } from "./test_data";

describe("hello", () => {
  it("world", () => {
    console.log(getTestData());
    assert(true);
  });
});
