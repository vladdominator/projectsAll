module.exports = function toReadable (number) {
   let numberCount = ['zero','one','two','three','four','five','six','seven','eight','nine','ten'];
   let numberTwo = ['eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'];
   let numberTens = ['twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety'];
   if(number >= 0 && number <= 10){
      for(let i = 0; i < numberCount.length; i++){
         if(number === i){
            return numberCount[i];
         }
      }
   }
   if(number > 10 && number < 20){
      for(let i = 0; i < numberTwo.length; i++){
         if(number % 10 === i + 1){
            return numberTwo[i];
         }
      }
   }
   if(number >= 20 && number < 100){
      let strElements;
      let strDecimals;
      let element = number % 10;
      if(Number.isInteger(number / 10)){
         strElements = '';
      }
      else{
         for(let i = 0; i < numberCount.length; i++){
            if(element === i){
               strElements = numberCount[i];
            }
         }
      }
      for(let i = 0; i < numberTens.length; i++){
         if(Math.floor(number / 10) === i + 2){
            strDecimals = numberTens[i];
         }
      }
      if(strElements){
         return strDecimals + " " + strElements;
      }
      else{
         return strDecimals;
      }
   }
   if(number >= 100 && number < 1000){
      let strHundreds = 'hundred';
      let hundreds = Math.floor(number / 100);
      let values = number % 100;
      for(let i = 0; i < numberCount.length; i++){
         if(hundreds === i && Number.isInteger(number / 100)){
            return numberCount[i] + " " + strHundreds;
         }
         else if(hundreds === i){
            if(values > 10 && values < 20){
               for(let j = 0; j < numberTwo.length; j++){
                  if(values % 10 === j + 1){
                     return numberCount[i] + " " + strHundreds + " " + numberTwo[j];
                  }
               }
            }
            else if(values > 0 && values <= 10){
               for(let j = 0; j < numberCount.length; j++){
                  if(values === j){
                     return numberCount[i] + " " + strHundreds + " " + numberCount[j];
                  }
               }
            }
            else if(values >= 20 && values < 100){
               let strElements;
               let strDecimals;
               let element = values % 10;
               if(Number.isInteger(values / 10)){
                  strElements = '';
               }
               else{
                  for(let j = 0; j < numberCount.length; j++){
                     if(element === j){
                        strElements = numberCount[j];
                     }
                  }
               }
               for(let j = 0; j < numberTens.length; j++){
                  if(Math.floor(values / 10) === j + 2){
                     strDecimals = numberTens[j];
                  }
               }
               if(strElements){
                  return numberCount[i] + " " + strHundreds + " " + strDecimals + " " + strElements;
               }
               else{
                  return numberCount[i] + " " + strHundreds + " " + strDecimals;
               }
            }
         }
      }
   }
}
