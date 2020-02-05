/// <reference path="./interfaces.ts" />
function getPatterns(context) {
    const input = context.sentence;
    const result = [];
    for (let i = 0; i < input.length; i++) {
        for (let n = 2; n < input.length - i; n++) {
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
/// <reference path="./interfaces.ts" />
