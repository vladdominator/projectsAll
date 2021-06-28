let video = document.getElementById('video');
let videoTwo = document.querySelector('.planning__video');
let videoOpen = document.getElementById('popup');
let videoLink = document.getElementById('my-video');
let videoLife = document.querySelector('.popup__content');
let videoBody = document.querySelector('.popup__body');
const body = document.querySelector('body');
let videoClose=document.querySelector('.popup__close');
const lockPadding = window.innerWidth-document.querySelector('article').offsetWidth + 'px';
for(let i=0;i<3;i++){
let video = document.querySelectorAll('#video')[i];
video.addEventListener('click',()=>{
  videoOpen.style.opacity='1';
  videoOpen.style.visibility='visible';
  videoLife.style.opacity='1';
  body.style.overflow='hidden';
  videoLife.style.transform='translate(0px,0%)';
  body.style.paddingRight=lockPadding;
}) 
}
videoTwo.addEventListener('click',()=>{
   videoOpen.style.opacity='1';
   videoOpen.style.visibility='visible';
   videoLife.style.opacity='1';
   body.style.overflow='hidden';
   videoLife.style.transform='translate(0px,0%)';
   body.style.paddingRight=lockPadding;
   videoLink.play();
 }) 
videoClose.addEventListener('click',()=>{
   videoOpen.style.opacity='0';
   videoOpen.style.visibility='hidden';
   videoLink.pause();
   body.style.overflow='visible';
   body.style.paddingRight='0';
   videoLife.style.transform='translate(0px,-100%)';
})
videoBody.addEventListener('click',(e)=>{
   if(!e.target.closest('.popup__content')){
   videoOpen.style.opacity='0';
   videoOpen.style.visibility='hidden';
   videoLink.pause();
   body.style.overflow='visible';
   body.style.paddingRight='0';
   videoLife.style.transform='translate(0px,-100%)';
   }
})
document.addEventListener('keydown',(e)=>{
   if(e.which===27){
      videoOpen.style.opacity='0';
      videoOpen.style.visibility='hidden';
      videoLink.pause();
      body.style.overflow='visible';
      body.style.paddingRight='0';
      videoLife.style.transform='translate(0px,-100%)';
   }
})
document.addEventListener('keydown',(e)=>{
   if(e.which===32){
      if (videoLink.paused) {  
         videoLink.play();
     } else {
      videoLink.pause();
     }
   }
})
document.addEventListener('keydown',(e)=>{
   if(e.which===70){
      video.requestFullscreen();    
    }
})
//video

 if (window.matchMedia("(max-width: 950px)").matches) {
   let burger = document.getElementById('burger');
   let article = document.querySelector('.wraper');
   let burgerMenu = document.querySelector('.menu__container');
   let burgerContainer = document.querySelector('.menu__burger');
   let heightBurger=Number(burgerMenu.offsetHeight) + 80 + 'px';
   let i=0;
   let openBurger=document.querySelector('#open__burger');
   let closeBurger=document.querySelector('#close__burger');
   let ber=Number(burgerMenu.offsetHeight) +'px';
   let header = document.querySelector('header');
    burger.addEventListener('click',function reset(){
       if(i%2==0){
       burgerContainer.style.opacity='1';
       burgerMenu.style.transform=`translate(0,-${ber}`;
       article.style.marginTop=heightBurger;
       openBurger.style.display='none';
       closeBurger.style.display='block';
       }
       else{
         burgerContainer.style.opacity='0';
         burgerMenu.style.transform='translate(0,-200%)';
         article.style.marginTop='0';
         openBurger.style.display='block';
         closeBurger.style.display='none';
       }
       i++;
    })
 }
 //burger
 let  slidesArea = document.querySelector('.slider__track'),
    dots = document.querySelectorAll('.dot__caroosel');
    let dotsArea = document.querySelector('.dot__container');
let scrollFunc = (n) => {
  let slidesWidth = document.querySelector('.slider__item').offsetWidth;
  slidesArea.style.transform = `translate(-${n*slidesWidth + 'px'},0)`;
  for (let dot of dots) {
    dot.classList.remove('active');
  }
  dots[n].classList.add('active');
}
let dotScrollFunc = (n) => {
  scrollFunc(n);
}
dotsArea.addEventListener('click', (e) => {
  for (let i = 0; i < dots.length; i++) {
    if (e.target.classList.contains('dot__caroosel') && e.target == dots[i]) {
      dotScrollFunc(i);
    }
  }
});
if (window.matchMedia("(max-width: 694px)").matches) {
let k=1;
let d=0;
   setInterval(()=>{
   if(k==1){
      if(d%2==0){
         scrollFunc(k);
         k++;
      }
      else{
         scrollFunc(k--);
      }
         d++;
      }
   else if( k==2){
         scrollFunc(k);
         k--;
   }
   else {
      scrollFunc(k++);
   }
   }, 3000);
}
//slider1
let  slidesArea1 = document.querySelector('.start__track'),
    dots1 = document.querySelectorAll('.track__caroosel');
    leftIndent = 0;
    let left = document.querySelector('#left');
    let right = document.querySelector('#right');
    let dotsArea1 = document.querySelector('.track__container');
let scrollFunc1 = (n) => {
  let slidesWidth1 = document.querySelector('.start__item').offsetWidth;
  slidesArea1.style.transform = `translate(-${n*slidesWidth1 + 'px'},0)`;
  leftIndent = -n*slidesWidth1;
  for (let dot of dots1) {
    dot.classList.remove('active');
  }
  dots1[n].classList.add('active');
}
let dotScrollFunc1 = (n) => {
  scrollFunc1(n);
}
dotsArea1.addEventListener('click', (e) => {
  for (let i = 0; i < dots1.length; i++) {
    if (e.target.classList.contains('track__caroosel') && e.target == dots1[i]) {
      dotScrollFunc1(i);
    }
  }
});
left.addEventListener('click',() => {
   let slidesWidth2 = document.querySelector('.start__item').offsetWidth;
   if(leftIndent!=0 && leftIndent==-slidesWidth2 || leftIndent==-2*slidesWidth2){
      slidesArea1.style.transform = `translate(${slidesWidth2+leftIndent + 'px'},0)`;
      let xer=-(slidesWidth2+leftIndent)/slidesWidth2;
      scrollFunc1(xer);
   }
})
right.addEventListener('click',() => {
   let slidesWidth2 = document.querySelector('.start__item').offsetWidth;
   if(leftIndent!=-2*slidesWidth2 && leftIndent==0 || leftIndent==-slidesWidth2){
      slidesArea1.style.transform = `translate(${-slidesWidth2+leftIndent + 'px'},0)`;
      let xer=(slidesWidth2-leftIndent)/slidesWidth2;
      scrollFunc1(xer);
   }
})
if (window.matchMedia("(max-width: 988px)").matches) {
   let k=1;
   let d=0;
      setInterval(()=>{
      if(k==1){
         if(d%2==0){
            scrollFunc1(k);
            k++;
         }
         else{
            scrollFunc1(k--);
         }
            d++;
         }
      else if( k==2){
            scrollFunc1(k);
            k--;
      }
      else {
         scrollFunc1(k++);
      }
      }, 3000);
   }//slider2
   for(let i=0;i<3;i++){
   let illustrations=document.querySelectorAll('.illustrations')[i];
   let search=document.querySelectorAll('.search')[i];
   illustrations.addEventListener('mouseenter',()=>{
      search.style.opacity='1'
   })
   search.addEventListener('mouseenter',()=>{
      search.style.opacity='1'
   })
   illustrations.addEventListener('mouseleave',()=>{
      search.style.opacity='0'
   })
   search.addEventListener('mouseleave',()=>{
      search.style.opacity='0'
   })
}//click
let testConf=document.querySelector('.test__caroosel');
let  slidesArea2 = document.querySelector('.test__track'),
    dots2 = document.querySelectorAll('.item__dot-test');
    let dotsArea2 = document.querySelector('.test__dot');
    let item = document.querySelectorAll('.test__item');
let scrollFunc2 = (n) => {
  let slidesWidth = document.querySelector('.test__item').offsetWidth;
  slidesArea2.style.transform = `translate(-${n*(slidesWidth+64) + 'px'},0)`;
  if(n!=8){
  for (let go of item) {
   go.classList.remove('active');
 }
 item[n+1].classList.add('active');
}
else{
   item[n].classList.remove('active');
}
  for (let dot of dots2) {
    dot.classList.remove('active');
  }
  dots2[n].classList.add('active');
}
let dotScrollFunc2 = (n) => {
  scrollFunc2(n);
}
dotsArea2.addEventListener('click', (e) => {
  for (let i = 0; i < dots2.length; i++) {
    if (e.target.classList.contains('item__dot-test') && e.target == dots2[i]) {
      dotScrollFunc2(i);
    }
  }
});//slider3

handleTouchStart =function(e) {                                         
   xDown = e.touches[0].clientX;                                      
   yDown = e.touches[0].clientY;                                      
};
 let callres = 0;                                              
handleTouchMove = function(e) {
   if ( ! xDown || ! yDown ) {
       return;
   }

   var xUp = e.touches[0].clientX;                                    
   var yUp = e.touches[0].clientY;

   var xDiff = xDown - xUp;
   var yDiff = yDown - yUp;

   if(Math.abs( xDiff )+Math.abs( yDiff )>10)
     if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {
       if ( xDiff > 0 && callres<8) {
         callres++;
         scrollFunc2(callres);
       }
      if(xDiff < 0 && callres>=1){
         callres--;
        scrollFunc2(callres);  
        }             
     } 
   xDown = null;
   yDown = null;
};

var xDown = null;                                                        
var yDown = null;

testConf.addEventListener('touchstart', handleTouchStart, false);        
testConf.addEventListener('touchmove', handleTouchMove, false);
//slider 3 for mobile

let owlCarooselOpen = document.querySelectorAll('.owl__go');
let owlCarooselClose;
let owlButton = document.querySelectorAll('#owl__left');
let owlText = document.querySelectorAll('#span');
let owlFix = document.querySelectorAll('.owl__tab');
for(let i=0;i<5;i++){
let owlLeft = document.querySelectorAll('.owl__perhaps')[i];
owlLeft.addEventListener('click',()=>{
   owlCarooselOpens(i);
})
}
function owlCarooselOpens(n){
    if(owlCarooselOpen[n].style.visibility=='visible'){
      for(let owl of owlButton){
          if(owl.style.transform=='rotate(-90deg)'){
            owlButton[n].style.transform='rotate(90deg)';
            owlButton[n].style.color='#8E96B7';
            owlButton[n].style.fontSize='24px';
            owlText[n].style.fontWeight='500';
            }
         }
             owlText[n].style.color='#8E96B7';
             owlCarooselOpen[n].style.maxHeight='0px';
             owlCarooselOpen[n].style.visibility='hidden';
             owlCarooselOpen[n].style.opacity='0';
             owlCarooselOpen[n].style.paddingBottom='0px';
             owlFix[n].style.borderBottom='solid 2px rgba(142,150,183,0.2)';
   }
          else{
            owlButton[n].style.fontSize='26px';
             owlButton[n].style.color='#495274';
             owlText[n].style.color='#495274';
             owlText[n].style.fontWeight='700';
             owlFix[n].style.borderBottom='0';
             owlButton[n].style.transform='rotate(-90deg)';
             owlCarooselOpen[n].style.maxHeight='100px';
             owlCarooselOpen[n].style.visibility='visible';
             owlCarooselOpen[n].style.opacity='1';
             owlCarooselOpen[n].style.paddingBottom='50px';
              }
}
//accordion
rew = document.querySelector('#email');
window.addEventListener('DOMContentLoaded',()=>{
   document.querySelector('#send').addEventListener('click',(e)=>{
      e.preventDefault();
      let form = document.forms["test"];
      let fd = new FormData(form);
      let send = {};
      for (let [key, prop] of fd) {
            send[key] = prop;
      }
      send = JSON.stringify(send);
      req(send);
      rew.value=''; 
   })
});
function req(send){
   const request = new XMLHttpRequest();
   request.open("POST","http://localhost:3000/people");
   request.setRequestHeader("Content-type", "application/json;charset=utf-8"); 
   request.send(send);
   request.addEventListener("load",function(){
   request.onreadystatechange=function(){
      if(request.status>=400){
         console.error("что-то пошло не так");
      }
      else{
         let data = JSON.parse(request.response);
         console.log(data);
      }
   }
   })
}//post AJAX with xmlHttpRequist
// post AJAX with fetch
// const arr=[1,2,3,4,5]
// Array.prototype.together=function(n){
//    return this.map((i)=>{
//       return i*n;
//    })
// }
// console.log(arr.together(2))
// const ter={
//    name:'anton',
//    age:24
// };
// cofe=rewever.fer.bind(ter)
// cofe()
// const tag=arr.filter(item=>item>2)
// console.log(tag)
// const people=[ 
//    {name:'marina',age:22,budget:3500},
//    {name:'anton',age:24,budget:2700},
//    {name:'vlad',age:22,budget:1700},
// ];
// let goPeople=people.find((item)=>{
//    if(item.budget>3000){
//       return item
//    }
// })
// console.log(goPeople);
// let pidor='пидор';
// let piz='ахуенный';
// function returnString(s,pidor,piz){
//    console.log(s[0]);
// }
// returnString`Антон ${pidor}, а Влад ${piz}`
// soc:for(let i=0;i<8;i++){
//    for(let j=0;j<8;j++){
//    console.log(j)
//    if(i=2){
//       break soc;
//    }
//    } 
// }
// resolve=21;
// switch(resolve){
//    case 1:{
//       console.log('fer')
//       break
//    }
//    case 21:{
//       console.log('ftr')
//       break
//    }
//     default:{
//       console.log('fer')
//       break
//    }
// }
// const people=Object.create({},{
//    birthday:{
//       value:2003,
//       writable:true,
//       configurable:true,
//       enumerable:true
//    },
//    age:{
//       get(){
//          return new Date().getFullYear()-this.birthday;
//       },
//       set(value){
//          console.log('Value',value);
//       }
//    }
// });
// const p=new Promise((resolve,reject)=>{
//    setTimeout(()=>{
//       const ter={
//             name:'anton',
//             age:24
//          };
//          resolve(ter);
//    },2000)
// })
// p.then(data=>{
//    return new Promise((resolve,reject)=>{
//       setTimeout(()=>{
//             data.modificied=true;
//             console.log(data)
//             resolve(data)
//       },2000)
//    })})
// .then(dataSr=>{
//    dataSr.ty=true;
//    console.log(dataSr)})
//    .catch((err)=>{
//       console.error('Error',err)
//    })
//    .finally(()=>
//    console.log('Perfect')
//    )
// class Animal{
//    static type ='Animal';
//    constructor(options){
//       this.name=options.name
//       this.age=options.age
//       this.hasTail=options.hasTail
//    };
//    voice(){
//       console.log('Im a Animal');
//    }
// }
// const animal=new Animal({
//    name:'Dog',
//    age:'5',
//    hasTail:true
// })
// console.log(animal)
// class Dog extends Animal{
//   static type='Dog'
//   constructor(options){
//      super(options)
//      this.color=options.color
//   }
// }
// const dog=new Dog({
//    name:'Dog',
//    age:'5',
//    hasTail:true,
//    color:'white'
// })
// const people = new Object.create({

// },{
//    age:{
//       value:21,
//       enumerable:true,
//       writable:true,
//       configurable:true
//    }
// })
// let a={
//    color:'blue',
//    age:32
// }
// let b8=Object.create(a,{
//    'gh':{
//       value:true
//    }
// })
// console.log(b8)
// let arr=[1,2,3,4,5]
// Array.prototype.sex=function(n){
//   return this.map(item=>item*n)
// }
// console.log(arr.sex(2))
// function Set1(n){ 
//    return function Set2(v){
//       console.log(n*v)
//    }
// }
// set=Set1(2);
// set(1)
// console.log(set)
class Animal{
   constructor(name,age){
      this.name=name;
      this.age=age;
   }
   getTail(){
      console.log('yes'); 
   } 
}
class Dog extends Animal{
   constructor(name,age){
      super(name,age);
      super.getTail();
   }
}
let p=new Dog('haskee',56)
p.getTail()
console.log(p)
