/// <reference path="./interfaces.ts" />

function buildPattern(node:Node) : Pattern[]
{
	return [];
}

function findPath(context:Context, tree:Node) : Pattern[]
{
	const stack = [...tree.children];
	while(stack.length)
	{
		const current = stack.shift();

		if(current.value.from + current.value.word.length * current.value.times == context.sentence.length)
		{
			return buildPattern(current);
		}
	}
	throw 'cannot find pattern';
}