import { Context } from "../src/interfaces";
import { Pattern } from "./interfaces";

export function getPatterns(context: Context): Pattern[] {
    const input = context.sentence;
    const result: Pattern[] = [];

    for (let i = 0; i < input.length; i++) {
        const toBeSkipped = new Set();
        for (let n = i + 1; n < input.length; n++) {
            const segment = input.substring(i, n);
            if (toBeSkipped.has(segment)) {
                continue;
            }
            const repeats = findRepeats(input.substring(n), segment, n);
            for (let x = 1; x < repeats; x++) {
                toBeSkipped.add(segment.repeat(x));
            }

            if (repeats !== 0) {
                result.push({
                    from: i,
                    times: 1 + repeats,
                    to: (n - i) * repeats,
                    word: input.substring(i, n)
                });
            }
        }
    }

    return result;
}

function findRepeats(input: string, segment: string, startIndex: number): number {
    if (input.startsWith(segment)) {
        return 1 + findRepeats(input.substring(segment.length), segment, startIndex + segment.length);
    } else {
        return 0;
    }
}
