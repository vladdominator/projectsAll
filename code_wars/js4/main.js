function solve(stones) {
   const das=stones.split('')
   let count=0
   for(i=0;i<das.length;i++){
      if(das[i]===das[i+1]){
         count++
      }
   }
   return count
}
console.log(solve("RRRRGGGGBBBB"))