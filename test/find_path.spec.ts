import * as assert from 'assert'

/// <reference path="../src/interfaces.ts" />
import { findPath } from '../src/find_path' 

describe('findPath',() => {
    it('should find path with patterns only', () => {
    	const context : Context = {
			runes: [],
			sentence: 'aaaaaaaaaaaa',
			position: 0

    	}
    	const pattern : Pattern =  {from:0, to:0, times: 12, word:'a' };
    	const tree : Node = {
    		value: {from:0, to:0, times: 0, word:'' },
    		children: [
    			{
    				value :pattern,
    				children: []
    			}
    		]
    	}
    	tree.children[0].parent = tree;

    	const result = findPath(context, tree);
        assert(result.length === 1);
    })
})