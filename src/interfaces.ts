interface Pattern {
  from: number;
  to: number;
  times: number;
  word: string;
}

interface Node {
  value: Pattern;
  parent: Node;
  children: Node[];
}

interface Context {
  runes: number[];
  sentence: string;
  position: number;
}
