const quickSort = (array) => {
   if (array.length < 2) {
       return array;
   }
   let length = 6;
   const pivot = array[length/2];
   let less = [];
   let greater = [];

   for (let i = 1; i < array.length; i += 1) {
       if (array[i] <= pivot) {
           less.push(array[i]);
       } else {
           greater.push(array[i]);
       }
   }

   return quickSort(less).concat(pivot, quickSort(greater));
}
let array = [1,5,-3,3,4,6,10];
console.log("Sequence: " + array);
console.log("Sorted: " + quickSort(array));