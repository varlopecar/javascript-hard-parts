function copyArrayAndManipulate(arr, callback) {
  var newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(callback(arr[i]));
  }
  return newArr;
}

const result = copyArrayAndManipulate([1, 2, 3, 4, 5], num => num * 2);

console.log(result);
