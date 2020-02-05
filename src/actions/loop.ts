import { Context } from "../interfaces";
import { goTo, setRuneState } from "./utils";
import { read } from "./read";

export function loop(context: Context, iterations: number, from: number, to: number): string {
    let result = "";
    result += goTo(context.position, from - 1);
    result += setRuneState(context, from - 1, iterations);
    result += "[";
    context.position = from - 1;
    result += read(context, [[from, to]]);
    result += goTo(context.position, from - 1);
    result += "-]";
    context.position = from - 1;

    return result;
}
