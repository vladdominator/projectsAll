 function leastLarger(numbers,lastName){
    sad=numbers[0]
  for(let i=lastName;i<numbers.length;i++){
     if(numbers[i]>numbers[lastName]){
        return i
  }
  if(numbers[i]<sad){
     sad=numbers[i]
  }
  if( lastName>numbers.length-1){
   return -1
}
 }
 if(sad=numbers[lastName]){
   return -1
}
}
 console.log(leastLarger( [4, 1, 3, 5, 6], 3 ))