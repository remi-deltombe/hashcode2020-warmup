import * as assert from 'assert'

/// <reference path="../src/interfaces.ts" />
import { Context, Pattern, Node, ActionType } from "../src/interfaces";
import { performWrite } from '../src/actions/write' 

describe('write',() => {
    it('should write', () => {
    	const context : Context = {
			runes: new Array(30).fill(26),
			sentence: 'abc',
			position: 0
    	}

    	const result = performWrite(context, { type: ActionType.WRITE, args: ['ZABCD']})
    	console.log('RESULT', result)
    })
})