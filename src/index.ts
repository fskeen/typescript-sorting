console.log("hi there!");

const logThing = () => {
  console.log("hey hey");
};

// Bubble sort!

class Sorter {
  constructor(public collection: number[] | string) {}
  sort(items: any): void {
    const { length } = this.collection;
    const array = [...items];
    for (let i = 0; i < length; i++) {
      for (let x = 0; x < length - i - 1; x++) {
        // an example type guard:
        // if (this.collection instanceof Array) {}
        if (array[x] > array[x + 1]) {
          const currentNum = array[x];
          array[x] = array[x + 1];
          array[x + 1] = currentNum;
        }
      }
    }
    // console.log(...this.collection);
  }
}

const sorter = new Sorter([10, 3, -5, 0]);
const sorter2 = new Sorter("hello");
console.log(sorter.collection);
console.log(sorter2.collection);

// function sort (...args: number[]): number[] {
//     return;
// }
