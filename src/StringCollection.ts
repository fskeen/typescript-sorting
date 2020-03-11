import { Sortable } from "./Sorter";

export class StringCollection implements Sortable {
  data: string;
  array: string[];

  constructor(data: string) {
    this.data = data;
    this.array = [...this.data];
  }
  get length(): number {
    return this.array.length;
  }
  compare(leftIndex: number, rightIndex: number): boolean {
    return (
      this.array[leftIndex].toLowerCase() > this.array[rightIndex].toLowerCase()
    );
  }
  swap(leftIndex: number, rightIndex: number): void {
    const currentChar = this.array[leftIndex];
    this.array[leftIndex] = this.array[rightIndex];
    this.array[rightIndex] = currentChar;
    this.data = this.array.join("");
  }
}
