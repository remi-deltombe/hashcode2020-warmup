/// <reference path="./interfaces.ts" />

function patternForPosition(context: Context, position: number): Pattern {
    return {
        from: position,
        to: position + 1,
        times: 1,
        word: context.sentence[position]
    };
}

function buildNode(context: Context, pattern: Pattern, patterns: Pattern[], parent?: Node): Node {
    const node = {
        parent,
        value: pattern,
        children: []
    };
    const target = pattern.from + pattern.word.length * pattern.times;
    node.children = [patternForPosition(context, target), ...patterns]
        .filter(p => target === p.from)
        .filter(p => p.from < context.sentence.length)
        .map(p => buildNode(context, p, patterns, node));

    return node;
}

function buildTree(context: Context, patterns: Pattern[]): Node {
    return buildNode(context, { from: 0, to: 0, times: 0, word: "" }, patterns);
}
