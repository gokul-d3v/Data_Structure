// largest number in the Array

function largestNumber(items) {
  return items.reduce((acc, curr) => (curr > acc ? curr : acc));
}

// non-repeating elements in the array

function uniqueElem(items) {
  return items.filter(
    (value) => items.indexOf(value) == items.lastIndexOf(value)
  );
}

console.log(uniqueElem([23, 2, 2, 3]));
