/// <reference path="./interfaces.ts" />

function buildPattern(node: Node): Pattern[] {
    const result = [];
    while (node.parent) {
        result.unshift(node.value);
        node = node.parent;
    }
    return result;
}

function findPath(context: Context, tree: Node): Pattern[] {
    const stack = [...tree.children];
    while (stack.length) {
        const current = stack.shift();

        if (current.value.from + current.value.word.length * current.value.times == context.sentence.length) {
            return buildPattern(current);
        }

        stack.push(...current.children);
    }
    throw "cannot find pattern";
}
