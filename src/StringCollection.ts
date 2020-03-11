export class StringCollection {
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
    return this.array[leftIndex] > this.array[rightIndex];
  }
  swap(leftIndex: number, rightIndex: number): void {
    const currentNum = this.array[leftIndex];
    this.array[leftIndex] = this.array[rightIndex];
    this.array[rightIndex] = currentNum;
    this.data = this.array.join("");
  }
}
