/// <reference path="../interfaces.ts" />
/// <reference path="./utils.ts" />
/// <reference path="./read.ts" />

function performLoop(context: Context, iterations: number, from: number, to: number): string {
    let result = "";
    result += goTo(context.position, from - 1);
    result += setRuneState(context, from - 1, iterations);
    result += "[";
    context.position = from - 1;
    result += performRead(context, [[from, to]]);
    result += goTo(context.position, from - 1);
    result += "-]";
    context.position = from - 1;

    return result;
}
