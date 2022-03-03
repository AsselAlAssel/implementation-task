let numbers = [3, 4, 2, 5, 1, 20, 46, 373, 37, 22, 49],
  fruits = ["Apple", "Strawberry", "Orange", "Banana"];

const sort = (arr, callBackFun) => {
  callBackFun(arr);
};

const bubbleSort = (arr) => {
  for (let firstIndex = 0; firstIndex < arr.length; firstIndex++) {
    for (
      let secondIndex = firstIndex;
      secondIndex < arr.length;
      secondIndex++
    ) {
      if (arr[firstIndex] > arr[secondIndex]) {
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

sort(numbers, bubbleSort);
sort(fruits, bubbleSort);

console.log("arrays after sort");
console.log("numbers", numbers);
console.log("fruits", fruits);
console.log("************************");

// ***************************************************

const map = (arr, callBackFun) => {
  let resultArray = [];
  for (let key in arr) {
    resultArray.push(callBackFun(arr[key]));
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

const filter = (arr, callBackFun) => {
  let resultArray = [];
  for (let key in arr) {
    if (!callBackFun(arr[key])) {
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
const reduce = (arr, callBackFun, InitialValue) => {
  let total = InitialValue ?? arr[0];
  let index = InitialValue != null || InitialValue != undefined ? 0 : 1;
  for (; index < arr.length; index++) {
    total = callBackFun(total, arr[index]);
  }
  return total;
};

const sumArray = (total, val) => total + val;

console.log("numbers before reduce", numbers);
const total = reduce(numbers, sumArray);
console.log("numbers after reduce", total);

// ******************************************************
