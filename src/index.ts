import { Sorter } from "./Sorter";
import { NumCollection } from "./NumCollection";

// Bubble sort!

const numbers = new NumCollection([10, 3, -5, 0]);
const sortA = new Sorter(numbers);
sortA.sort();
console.log(numbers.data);
