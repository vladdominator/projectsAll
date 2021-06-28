const text=document.querySelector('input')
for(i=1;i<18;i++){
   if(i!=7){
   const butto=document.querySelectorAll('button')[i]
   butto.addEventListener('click',()=>{
   text.value+=butto.textContent
   text.focus()
   })
}
}
   const firstal=document.querySelectorAll('button')[0]
   firstal.addEventListener('click',()=>{
      text.value=''
   })  
   const dis=document.querySelectorAll('button')[18]
   dis.addEventListener('click',()=>{
        text.value=eval(text.value)
   })
   const fasd=document.querySelectorAll('button')[7]
   fasd.addEventListener('click',()=>{
      text.value+=fasd.value
      text.focus()
      }) 