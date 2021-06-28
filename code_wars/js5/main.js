function encode(text) {
   das=text.split('')
   for(let i=0;i<das.length;i++){
      das[i]=das[i].charCodeAt(0)
      das[i]=das[i].toString(2).padStart(8,0)
   }
   let  res = das.join('');
   let ras=res.split('')
   for(let k=0;k<ras.length;k++){
      if(ras[k]==='0'){
         ras[k]+="00"
      }
      if(ras[k]==='1'){
         ras[k]+="11"
      }
   }
   bits=ras.join('')
   return bits
 }
 function decode(bits) {
   saser=bits.match(/.{1,3}/g)
   for(let j=0;j<saser.length;j++){
      if(saser[j]==='000'){
         saser[j]="0"
      }
      if(saser[j]==='111'){
         saser[j]="1"
      }
   }
   tre=saser.join('')
   sdf=tre.match(/.{1,8}/g)
   for(let h=0;h<sdf.length;h++){
      sdf[h]=parseInt(sdf[h],2)
      sdf[h]=String.fromCharCode(sdf[h])
   }
   text= sdf.join('')
   return text
 }
console.log(encode("vladsinshluxi")) 
console.log(decode(bits))