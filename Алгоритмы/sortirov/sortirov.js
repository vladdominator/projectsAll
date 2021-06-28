 function findSmallest(arr) {
   let smallest = arr[0];
   let smallestIndex = 0;

   for (let i = 0; i < arr.length; i += 1) {
       if (arr[i] < smallest) {
           smallest = arr[i];
           smallestIndex = i;
       }
   }

   return smallestIndex;
}
function sortirov(array) {
let size = array.length;
let newArr = [];
for (let i = 0; i < size; i += 1) {
    let smallest = findSmallest(array);
    newArr.push(array[smallest]);
    array.splice(smallest, 1);
}

return newArr;
}
console.log(sortirov([5,3,4,5,6,7]));

let arr = [1,2,3,4]
const [one,tell] = arr;

console.log(Math.max(...arr))