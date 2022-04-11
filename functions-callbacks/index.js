function copyArrayAndManipulate(arr, callback) {
  var newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(callback(arr[i]));
  }
  return newArr;
}

const arr = [1, 2, 3, 4, 5];
function multiplyBy2(num) {
  return num * 2;
}
const result = copyArrayAndManipulate(arr, multiplyBy2);
console.log(result);
