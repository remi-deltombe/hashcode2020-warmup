/// <reference path="../interfaces.ts" />

function goTo(from: number, to: number): string {
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

function setRuneState(context: Context, index: number, targetValue: number): string {
    const distance = Math.abs(context.runes[index] - targetValue);
    if (context.runes[index] > targetValue) {
        return "-".repeat(distance);
    } else {
        return "+".repeat(distance);
    }
}
