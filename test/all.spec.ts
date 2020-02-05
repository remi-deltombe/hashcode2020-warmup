import * as assert from 'assert'

/// <reference path="../src/interfaces.ts" />
import { Context, Pattern, Node } from "../src/interfaces";
import { getPatterns } from "../src/get_patterns";
import { buildTree } from '../src/build_tree' 
import { findPath } from '../src/find_path' 

function printTree(node?:Node, tab:string = '')
{
	if(node)
	{
		console.log(tab + '->' + node.value.word + ' x ' + node.value.times)
		tab += '  ';
		node.children.forEach(node=>printTree(node, tab))
	}
}


describe('buildTree',() => {
    it('should build tree without pattern', () => {
    	const context = {
            position: 0,
            runes: [],
            sentence: 'abcabcabcaaaaabcabcabc'
        }
    	const patterns = getPatterns(context);
    	console.log(patterns);
    	const tree = buildTree(context, patterns );
    	printTree(tree);
    	const path = findPath(context, tree );
    	console.log(path);
    })
})