export interface Sortable {
  length: number;
  compare(leftIndex: number, rightIndex: number): boolean;
  swap(leftIndex: number, rightIndex: number): void;
}

export abstract class Sorter {
  abstract compare(leftIndex: number, rightIndex: number): boolean;
  abstract swap(leftIndex: number, rightIndex: number): void;
  abstract length: number;
  // abstract can be used for parent classes that do not necessarily have the data or properties they implement in their methods, but that WILL have them when they are used in child classes. See Sorter => NumCollection extends Sorter. TECHNICALLY with this, the Sortable interface is unnecessary.

  sort(): void {
    const length = this.length;
    for (let i = 0; i < length; i++) {
      for (let x = 0; x < length - i - 1; x++) {
        if (this.compare(x, x + 1)) {
          this.swap(x, x + 1);
        }
      }
    }
  }
}
