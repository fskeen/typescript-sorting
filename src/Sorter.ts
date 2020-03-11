export interface Sortable {
  length: number;
  compare(leftIndex: number, rightIndex: number): boolean;
  swap(leftIndex: number, rightIndex: number): void;
}

export class Sorter {
  constructor(public collection: Sortable) {}
  sort(): void {
    const length = this.collection.length;
    for (let i = 0; i < length; i++) {
      for (let x = 0; x < length - i - 1; x++) {
        if (this.collection.compare(x, x + 1)) {
          this.collection.swap(x, x + 1);
        }
      }
    }
  }
}
