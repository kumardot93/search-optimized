type ComparatorType<type> = (a: Partial<type>, b: Partial<type>) => number;
export class SearchOptimiserBinary<type> {
    private arr: Array<type> = [];

    public get value(): Array<type> {
        return this.arr;
    }

    public set value(arr: Array<type>) {
        this.arr = arr;
        this.arr.sort(this.comparator);
    }

    public comparator: ComparatorType<type> = (a: Partial<type>, b: Partial<type>) => {
        if (a < b)
            return -1;
        else if (a == b)
            return 0;
        else
            return 1;
    };

    public constructor(arr: Array<type> = [], comparator: (a: Partial<type>, b: Partial<type>) => number) {
        if (comparator)
            this.comparator = comparator;
        this.value = arr;
    }

    public binarySearchIndex(l: number, r: number, value: Partial<type>): number {
        if (l > r)
            return -1;
        const mid = l + Math.floor((r - l) / 2);
        const comparisionResult = this.comparator(value, this.value[mid]);
        if (comparisionResult == 0)
            return mid;
        else if (comparisionResult < 0)
            return this.binarySearchIndex(l, mid - 1, value);
        else return this.binarySearchIndex(mid + 1, r, value);
    }

    public find(value: Partial<type>): type {
        const index = this.binarySearchIndex(0, this.value.length - 1, value);
        return this.value[index];
    }

};

type optimizedDictType<type> = { [key: string]: type; };

export class SearchOptimiserDict<type> {
    private dict: optimizedDictType<type> = {};
    private keyName: string | number;


    public constructor(arr: Array<type> = [], keyName: string | number) {
        this.keyName = keyName;
        arr.forEach((item: any) => {
            const key = item[this.keyName].toString();
            this.dict[key] = item;
        });
    }

    public find(value: any): type {
        const key = value[this.keyName].toString();
        return this.dict[key];
    }

};