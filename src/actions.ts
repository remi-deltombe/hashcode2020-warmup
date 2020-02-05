/// <reference path="./interfaces.ts" />

import { performLoop } from 'actions/loop'
import { performRead } from 'actions/read'
import { performWrite } from 'actions/write'

export function getActions(context: Context, patterns:Pattern[]) : Action[]
{
	const result = [];
	for(const pattern of patterns)
	{
		if(pattern.times > 1)
		{
			result.push({type: ActionType.WRITE, args:[]});
			result.push({type: ActionType.LOOP, args:[]});
		}
		else
		{
			result.push({type: ActionType.WRITE, args:[]});
			result.push({type: ActionType.READ, args:[]});
		}
	}
}

export function act(context:Context, actions: Action[]) : string
{
	const result = '';
	for(const action of actions)
	{
		switch(action.type) 
		{
		    ActionType.READ:
		    	performRead(context, action);
		    	break;

		    ActionType.WRITE:
		    	performWrite(context, action);
		    	break;

		    ActionType.LOOP:
		    	performLoop(context, action);
		    	break;

		    ActionType.WRITEREAD:

		}
	}
}