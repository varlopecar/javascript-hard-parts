// function createFunction() {
//   function multiplyBy2(num) {
//     return num * 2;
//   }
//   return multiplyBy2;
// }
// const generatedFunc = createFunction();
// const result = generatedFunc(3);

// function outer() {
//   let counter = 0;
//   function incrementCounter() {
//     counter++;
//   }
//   incrementCounter();
//   console.log(counter);
// }
// outer();

function outer() {
  let counter = 0;
  function incrementCounter() {
    counter++;
    console.log(counter);
  }
  return incrementCounter;
}
const myNewFunction = outer();
myNewFunction();
myNewFunction();
