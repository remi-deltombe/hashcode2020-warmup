import * as assert from 'assert'

/// <reference path="../src/interfaces.ts" />
import { buildTree } from '../src/build_tree' 

function printTree(node?:Node, tab:string = '')
{
	if(node)
	{
		console.log(tab + '->' + node.value.word + ' x ' + node.value.times)
		tab += '  ';
		node.children.forEach(node=>printTree(node, tab))
	}
}

function xor(a,b):boolean {
	return (a && !b) ||(!a && b)
}

function compareTree(a?:Node,b?:Node) : boolean {
	if(xor(a,b)) return false;
	if(a.value.word !== b.value.word) return false;
	if(a.children.length !== b.children.length) return false;

	for(const c in a.children)
	{
		if(!compareTree(a.children[c],b.children[c]))
		{
			return false;
		}
	}

	return true;
}

describe('buildTree',() => {
    it('should build tree without pattern', () => {
    	const context : Context = {
			runes: [],
			sentence: 'abc',
			position: 0

    	}
//    	const tree = buildTree(context, []);
//    	printTree(tree)
    })
})