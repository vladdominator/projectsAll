
exports.min = function min (array) {
   if(arguments.length === 0 || array.length === 0){
      return 0;
   }
  return Math.min(...array);
}

exports.max = function max (array) {
   if(arguments.length === 0 || array.length === 0){
      return 0;
   }
   return Math.max(...array);
}

exports.avg = function avg (array) {
   if(arguments.length === 0 || array.length === 0){
      return 0;
   }
  let length = array.length;
  let simple = array.reduce((acc, item) => acc + item, 0);
  return simple/length;
}
