import { Context } from "../src/interfaces";
import { Pattern } from "./interfaces";

export function getPatterns(context: Context): Pattern[] {
    const input = context.sentence;
    const result: Pattern[] = [];

    for (let i = 0; i < input.length; i++) {
        for (let n = i + 2; n < input.length; n++) {
            result.push({
                from: i,
                times: 1,
                to: n,
                word: input.substring(i, n)
            });
        }
    }

    return result;
}
