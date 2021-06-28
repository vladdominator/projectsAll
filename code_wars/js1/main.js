function createPhoneNumber(numbers){
   numbers.unshift("(")
   numbers[3] += ") ";
   numbers[6] += "-";
   let  res = numbers.join('');
   return res
 }

 console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]))