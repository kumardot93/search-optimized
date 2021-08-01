type ComparatorType<type> = (a: type, b: type) => number;
export class SearchOptimiser<type> {
    private arr: Array<type> = [];

    public get value(): Array<type> {
        return this.value;
    }

    public set value(arr: Array<type>) {
        this.arr = arr;
        this.arr.sort(this.comparator);
    }

    public comparator: ComparatorType<type> = (a: type, b: type) => {
        if (a < b)
            return -1;
        else if (a == b)
            return 0;
        else
            return 1;
    };

    public constructor(arr: Array<type> = [], comparator: (a: type, b: type) => number) {
        if (comparator)
            this.comparator = comparator;
        this.value = arr;
    }

    public binarySearchIndex(l: number, r: number, value: type): number {
        if (l > r)
            return -1;
        const mid = l + (r - l) / 2;
        const comparisionResult = this.comparator(value, this.value[mid]);
        if (comparisionResult == 0)
            return mid;
        else if (comparisionResult < 0)
            return this.binarySearchIndex(l, mid - 1, value);
        else return this.binarySearchIndex(mid + 1, r, value);
    }

    public find(value: type) {
        const index = this.binarySearchIndex(0, this.value.length - 1, value);
        return this.value[index];
    }

};