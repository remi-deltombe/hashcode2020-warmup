import { Action, Context } from "../interfaces";
import { setRuneState } from "./utils";

function letterToNumber(letter:string) : number {
	return letter == ' ' ? 0 : letter.charCodeAt(0) - 64
} 

export function performWrite(context: Context, action: Action): string {
	let result = ''
	let [ word ] = action.args;
	let values = word.split('').map(letterToNumber)
	for(let i=0; i<values.length; ++i)
	{
		let from = context.runes[context.position];
		let to = values[i];
		if(from !== to)
		{
    		result += setRuneState(context, from - 1, iterations);
    		context.runes[context.position] = to;
		}
		result += '>'
		context.position = (context.position + 1) % 30;
	}

    return result.substring(0, result.length-1);
}
