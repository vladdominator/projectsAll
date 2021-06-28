module.exports = function reverse (n) {
   if(n > 0){
      let stringArray = String(n).split('').reverse().join('');
      let numberValue = Number(stringArray);
      return numberValue;
   }
   else{
      let stringArray = String(-n).split('').reverse().join('');
      let numberValue = Number(stringArray);
      return numberValue;
   }
}
