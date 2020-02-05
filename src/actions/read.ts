/// <reference path="../interfaces.ts" />
/// <reference path="./utils.ts" />

function performRead(context: Context, ranges: Array<[number, number]>): string {
    let result = "";
    let pos = context.position;
    for (const range of ranges) {
        for (let i = range[0]; i < range[1]; i++) {
            result += goTo(pos, i);
            pos = i;
            result += ".";
        }
    }

    context.position = pos;
    return result;
}
