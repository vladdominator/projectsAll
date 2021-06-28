const count = (list) => {
   if (list.length === 0) {
       return 0;
   }
   list.shift();
   return 1 + count(list);
}
console.log(count( [4, 6, 2,5]));
const factorial = (num) => {
   if (num===0 || num === 1) {
       return 1;
   }

   return num * factorial(num - 1);
}
console.log(factorial(4));
let array=[5,2,3,4,1]
const sum = (array) => {
   if(array.length<=1){
      return array[0]
   }
   return array.shift() + sum(array);
}
   console.log(sum(array))