import * as assert from "assert";
import { getTestData } from "./test_data";
import { getPatterns } from "../src/get_patterns";
import { performRead } from "../src/actions/read";

describe("read", () => {
    it("read", () => {
        console.log(
            performRead(
                {
                    position: 0,
                    runes: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    sentence: ""
                },
                [[10, 14]]
            )
        );
    });
});
