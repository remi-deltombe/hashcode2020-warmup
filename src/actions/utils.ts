import { Context } from "../interfaces";

export function goTo(from: number, to: number): string {
    if (to === from) {
        return "";
    }
    const distance = Math.abs(from - to);
    if (from > to) {
        return "<".repeat(distance);
    } else {
        return ">".repeat(distance);
    }
}

export function setRuneState(context: Context, index: number, targetValue: number): string {
    const distance = Math.abs(context.runes[index] - targetValue);
    if (context.runes[index] > targetValue) {
        return "-".repeat(distance);
    } else {
        return "+".repeat(distance);
    }
}
