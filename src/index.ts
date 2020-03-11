import { Sorter } from "./Sorter";
import { NumCollection } from "./NumCollection";
import { StringCollection } from "./StringCollection";

// Bubble sort!

const numbers = new NumCollection([10, 3, -5, 0]);
const sortA = new Sorter(numbers);
sortA.sort();
console.log(numbers.data);

const string = new StringCollection("hoWdy");
const sortB = new Sorter(string);
sortB.sort();
console.log(string.data);
