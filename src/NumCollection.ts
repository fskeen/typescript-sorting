import { Sortable } from "./Sorter";

export class NumCollection implements Sortable {
  data: number[];
  constructor(data: number[]) {
    this.data = data;
  }
  get length(): number {
    // this is the GET keyword! It lets us use this function to get the correct length of the data, but ALSO lets us say "thing.length" and refer to the returned value of this function. It's like thing.getLength(), but you refer to it like you would a property (thing.length)
    return this.data.length;
  }
  compare(leftIndex: number, rightIndex: number): boolean {
    // returns true/false if 2 elements next to each other need to be swapped
    return this.data[leftIndex] > this.data[rightIndex];
  }
  swap(leftIndex: number, rightIndex: number): void {
    const currentNum = this.data[leftIndex];
    this.data[leftIndex] = this.data[rightIndex];
    this.data[rightIndex] = currentNum;
  }
}
