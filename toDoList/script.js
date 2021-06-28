let closeToDoList = document.querySelector('.to-do__clear');
let appendFor = document.querySelector('.to-do__sourse');
let toDoList = [];

/*
   click close all
*/

closeToDoList.addEventListener('click',()=>{
   localStorage.clear('todo');
   toDoList = [];
   let toDoLet=document.querySelectorAll('.to-do__let');
   for(item of toDoLet){
      item.style.display='none';
   }
})

/*
   -----
*/

/*
   Condition that in the localStorage has "todo"
*/

if(localStorage.getItem('todo')){
   toDoList = JSON.parse(localStorage.getItem('todo'));
   for(item of toDoList){
      addPoper(item.todo);
}
}

/*
   -----
*/

let addToDoList = document.querySelector('#button');

/*
   Add todoList
*/

addToDoList.addEventListener('click',(e)=>{
   // e.preventDefault();
   let add = document.querySelector('#add').value.trim();
   let inputToDoList = document.querySelector('#add');
   let newToDo={
      todo:add,
      cheked:false
   }
   if(add){
      addPoper(add);
      toDoList.push(newToDo);
      inputToDoList.value='';
   }
   else{
      alert('Ксюша введи что-нибудь')
   }
   localStorage.setItem('todo',JSON.stringify(toDoList));
})

/*
   -----
*/
 
/*
   Add toDoList after page refresh
*/

function addPoper(add){
   let poper = document.createElement('div');
   poper.classList.add('to-do__let');
   poper.insertAdjacentHTML('afterbegin',`
   <span id="text">${add}</span>
   <span id="yes"> 	&#9989;</span>
   <span id="close"> &#10006; </span>
   `);
   appendFor.appendChild(poper);
}

/*
   -----
*/ 

let close = document.querySelectorAll('#close');

/*
   Close toDoList
*/

     for(let i=0;i<close.length;i++){
      let toDoLet=document.querySelectorAll('.to-do__let')[i];
       close[i].addEventListener('click',()=>{         
               toDoList.splice(i,1);
               localStorage.setItem('todo',JSON.stringify(toDoList));
               toDoLet.style.display='none';
     })
   }

/*
   -----
*/ 

let addOpen = document.querySelectorAll('#yes');

/*
   Checking active toDoList
*/

   for(let i=0;i<addOpen.length;i++){
      let text = addOpen[i].previousElementSibling;
        addOpen[i].addEventListener('click',()=>{
            text.classList.toggle('active');
            for(let j=0;j<toDoList.length;j++){
               if(j==i){
                  toDoList[i].cheked=!toDoList[i].cheked;
                  localStorage.setItem('todo',JSON.stringify(toDoList));
               }
            }
   })
 }

/*
   -----
*/ 

/*
   Checking active toDoList after page refresh
*/
 for(let i=0;i<addOpen.length;i++){
   let text = addOpen[i].previousElementSibling;
         for(let j=0;j<toDoList.length;j++){
            if(toDoList[i].cheked && j==i){
             text.classList='active';
            }
         }
}

/*
   -----
*/ 
function delay(ms){
   return new Promise((resolve,reject)=>{
      setTimeout(()=>{
         let data={
            ler:44,
            name:'sddkd'
         }
         resolve(data)
      },ms)
   })
}
async function delayProperty(){
   let req = await delay(3000);
   console.log(req)
   let data = await fetch('https://jsonplaceholder.typicode.com/todos');
   let response = await data.json();
   console.log(response);
}
delayProperty();
function dataReseive(n){
   for(let i=0;i<n;i++){
    console.log(i);
   }
}
let dataProxy = new Proxy(dataReseive,{
   apply(target,context,args){
      console.log('continue..');
      return target.apply(context,args);
   }
})
let arr = [1,2,3,4,5];
const [one,two,...other]=arr;
function protypeSum(a,b,other){
   return a+b+other.reduce((previous, current) => previous+current, 0);
}
console.log(protypeSum(one,two,other));
function returnProperty(){
   return new Promise((resolve, reject)=>{
      fetch('https://jsonplaceholder.typicode.com/todos')
      .then((responseURL=>{
         resolve(responseURL.json())
      }))
   })
}