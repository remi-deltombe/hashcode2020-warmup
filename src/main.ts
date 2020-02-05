
const magicPhrase = readline();

const context = {
    position: 0,
    runes: [],
    sentence: magicPhrase
}
const patterns = getPatterns(context);
const tree = buildTree(context, patterns );
const path = findPath(context, tree );
const actions = getActions(context, path);
act(context, actions);
