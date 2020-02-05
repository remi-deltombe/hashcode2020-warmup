import { Context, Pattern, Action, ActionType } from "./interfaces";
import { performLoop } from "./actions/loop";
import { performRead } from "./actions/read";
import { performWrite } from "./actions/write";

export function getActions(context: Context, patterns: Pattern[]): Action[] {
    const result = [];
    for (const pattern of patterns) {
        if (pattern.times > 1) {
            result.push({ type: ActionType.WRITE, args: [pattern.word] });
            result.push({ type: ActionType.LOOP, args: [] });
        } else {
            result.push({ type: ActionType.WRITE, args: [pattern.word] });
            result.push({ type: ActionType.READ, args: [] });
        }
    }
    return result;
}

export function act(context: Context, actions: Action[]): string {
    let result = "";
    for (const action of actions) {
        switch (action.type) {
            case ActionType.READ:
                //@ts-ignore
                result += performRead(context, ...action.args);
                break;

            case ActionType.WRITE:
                result += performWrite(context, action);
                break;

            case ActionType.LOOP:
                //@ts-ignore
                result += performLoop(context, ...action.args);
                break;

            case ActionType.WRITEREAD:
                break;
        }
    }
    return result;
}
