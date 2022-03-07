let numbers = [3, 4, 2, 5, 1, 20, 46, 373, 37, 22, 49],
  fruits = ["Apple", "Strawberry", "Orange", "Banana"];

const sort = (arr, callback, compare) => {
  let sortedArr = [...arr];
  callback(sortedArr, compare);
  return sortedArr;
};

const compare = (firstVal, secondVal) => {
  let res = 0;
  if (firstVal > secondVal) {
    res = 1;
  } else if (firstVal < secondVal) {
    res = -1;
  }
  return res;
};


const bubbleSort = (arr, compare) => {
  for (let firstIndex = 0; firstIndex < arr.length; firstIndex++) {
    for (
      let secondIndex = firstIndex;
      secondIndex < arr.length;
      secondIndex++
    ) {
      if (1 == compare(arr[firstIndex], arr[secondIndex])) {
        swap(arr, firstIndex, secondIndex);
      }
    }
  }
};

const swap = (arr, firstIndex, secondIndex) => {
  let temp = arr[firstIndex];
  arr[firstIndex] = arr[secondIndex];
  arr[secondIndex] = temp;
};

console.log("arrays before sort");
console.log("numbers", numbers);
console.log("fruits", fruits);

let sortedNumbers = sort(numbers, bubbleSort, compare);
let sortedFruits = sort(fruits, bubbleSort, compare);

console.log("arrays after sort");
console.log("sorted numbers", sortedNumbers);
console.log("sorted fruits", sortedFruits);
console.log("************************");

// ***************************************************

const map = (arr, callback) => {
  let resultArray = [];
  for (let key in arr) {
    resultArray.push(callback(arr[key]));
  }
  return resultArray;
};

const multiplyBy2 = (val) => val * 2;

console.log("numbers before map", numbers);
numbers = map(numbers, multiplyBy2);
console.log("numbers after map ", numbers);
console.log("************************");

// ***************************************************
numbers = [3, 4, 2, 5, 1, 20, 46, 373, 37, 22, 49];

const filter = (arr, callback) => {
  let resultArray = [];
  for (let key in arr) {
    if (!callback(arr[key])) {
      resultArray.push(arr[key]);
    }
  }
  return resultArray;
};

const isDivideBy2 = (val) => val % 2;

console.log("numbers before filter", numbers);
const NumbersAfterFilter = filter(numbers, isDivideBy2);
console.log("numbers after filter", NumbersAfterFilter);
console.log("************************");

// ******************************************************
const reduce = (arr, callback, InitialValue) => {
  let total = InitialValue ?? arr[0];
  let index = InitialValue != null || InitialValue != undefined ? 0 : 1;
  for (; index < arr.length; index++) {
    total = callback(total, arr[index]);
  }
  return total;
};

const sumArray = (total, val) => total + val;

console.log("numbers before reduce", numbers);
const total = reduce(numbers, sumArray);
console.log("numbers after reduce", total);

// ******************************************************
