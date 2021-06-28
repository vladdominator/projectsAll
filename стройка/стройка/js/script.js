const button=document.querySelector('.img__button')
const close=document.querySelector('.btn-close')
let i=0
function fanc(){
   if(i%2==0){
   button.style.display='none'
   close.style.display='flex'
   }
   else{
      button.style.display='flex'
      close.style.display='none'
      }
      i++
} 
let j=0
let k=0
let f=0
let g=0
const vir1=document.querySelector('.button__svg1')
const vir2=document.querySelector('.button__svg2')
const vir3=document.querySelector('.button__svg3')
const vir4=document.querySelector('.button__svg4')
function fanc1(){
   if(j%2==0){
     vir1.style.transform='rotate(90deg)'
      }
      else{
         vir1.style.transform='rotate(180deg)'
         }
         j++
}
function fanc2(){
   if(k%2==0){
     vir2.style.transform='rotate(90deg)'
      }
      else{
         vir2.style.transform='rotate(180deg)'
         }
         k++
}
function fanc3(){
   if(f%2==0){
     vir3.style.transform='rotate(90deg)'
      }
      else{
         vir3.style.transform='rotate(180deg)'
         }
         f++
}
function fanc4(){
   if(g%2==0){
     vir4.style.transform='rotate(90deg)'
      }
      else{
         vir4.style.transform='rotate(180deg)'
         }
         g++
}