# search-optmized

> Optmized regular repeated array searches

[![npm version](https://badge.fury.io/js/search-optimized.svg)](https://badge.fury.io/js/search-optimized)
![npm bundle size](https://img.shields.io/bundlephobia/minzip/search-optimized)
![NPM](https://img.shields.io/npm/l/search-optimized)

## Install

```bash
npm i search-optimized
```

## Usage

In js/ts we constanty use Array.prototype.find() which is a liner search. Many times we need to find some data form a array. When the application scales and the list starts to grow we will start seeing some lag. 

These search optimisers can reduce the search times drastically if you need to find multiple object form the list over time. Under the hood it user Binary Search or a dictionary to reduce the repeated search time.

```ts
//sample interface for data
interface Student{
    id: number;
    name: string;
    class: string;
    section: string;
    ...
}
```

### Binary Search(TS)
```ts
import SearchOptimiserBinary from 'search-optimized';

const arr: Array<Student> = getStudentDataArray(); // data that require regular searching
const comparator = (a: Student, b: Student)=> return a.id - b.id;   // [< 0: a < b]; [0: a == b]; [>0: a < b] 

const arrSearchOptimiser = new SearchOptimiserBinary<Student>(arr, comparator);  // initilization

// searching
const result: Student = arrSearchOptimiser.find({id: 12}); // argument is a value that is compatable with the comparator function 
```

### Object Optimized Search(TS)
```ts
import SearchOptimiserDict from 'search-optimized';

const arr: Array<Student> = getStudentDataArray(); // data that require regular searching
const keyName = 'id'

const arrSearchOptimiser = new SearchOptimiserDict<Student>(arr, keyName);  // initilization

// searching
const result: Student = arrSearchOptimiser.find({id: 12}); // argument is a object that contains keyName
```

### Binary Search(JS)
```js
const { SearchOptimiserBinary } = require( 'search-optimized' );

const arr = getStudentDataArray(); // data that require regular searching
const comparator = (a, b)=> return a.id - b.id;   // [< 0: a < b]; [0: a == b]; [>0: a < b] 

const arrSearchOptimiser = new SearchOptimiserBinary(arr, comparator);  // initilization

// searching
const result = arrSearchOptimiser.find({id: 12});
```


### Object Optimized Search(JS)
```ts
const { SearchOptimiserDict } = require( 'search-optimized' );

const arr = getStudentDataArray(); // data that require regular searching
const keyName = 'id'

const arrSearchOptimiser = new SearchOptimiserDict(arr, keyName);  // initilization

// searching
const result = arrSearchOptimiser.find({id: 12}); // argument is a object that contains keyName
```


## License

[MIT](https://github.com/kumardot93/search-optimized/blob/master/LICENSE) © Aditya Kumar

