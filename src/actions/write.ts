import { Action, Context } from "../interfaces";

function letterToNumber(letter:string) : number {
	return letter == ' ' ? 0 : letter.charCodeAt(0) - 64
} 

export function performWrite(context: Context, action: Action): string {
	let result = ''
	let [ word ] = action.args;
	let values = word.split('').map(letterToNumber)
	for(let i=0; i<values.length; ++i)
	{
		let da = values[i] - context.runes[context.position];
		let db = 27 - context.runes[context.position] - values[i] 
		console.log(context.runes[context.position] ,values[i] , da,db)
		if(da!==0 && db!==0)
		{
			if(da>db)
			{
				result += new Array(db).fill('-').join('')
			}
			else
			{
				result += new Array(da).fill('+').join('')
			}
			
		}
		result += '>'
		context.position = (context.position + 1) % 30;
	}

    return result.substring(0, result.length-1);
}
