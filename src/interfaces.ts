export interface Pattern {
  from: number;
  to: number;
  times: number;
  word: string;
}

export interface Node {
  value: Pattern;
  parent?: Node;
  children: Node[];
}

export interface Context {
  runes: number[];
  sentence: string;
  position: number;
}
