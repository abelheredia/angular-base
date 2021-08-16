export interface Result {
  count: number;
  next: string;
  previous: string;
  results: Array<Pokemon>;
}

export interface Pokemon {
  name: string;
  url: string;
}
