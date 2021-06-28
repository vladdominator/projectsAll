const PIANO = document.querySelector(".piano")
let pianoKeys = document.querySelectorAll(".piano-key")
const btnLetters = document.querySelector('.btn-letters')
const btnNotes = document.querySelector('.btn-notes')
const addFulscreen = document.querySelector('.fullscreen')
let keyPressed
   addFulscreen.addEventListener("click", () => {
      if (document.fullscreenElement === null){
         document.documentElement.requestFullscreen()
      } 
      else {
         document.exitFullscreen()
      }
})
function playAudio(src) {
   const audio = new Audio()
   audio.src = src
   audio.currentTime = 0
   audio.play()
 }
 window.addEventListener('mouseup', e => {
   if (!(e.target.classList.contains('piano'))) {
      window.removeEventListener('mouseover', addEvent)
   }
})
function pause(el){
   el.classList.remove('piano-key-active', "piano-key-active-pseudo")
}
let vlad
let vlad1
function addEvent(event){
   vlad = event.target
   if(vlad === vlad1){
      pianoKeys.forEach((el) => {
         if(el.classList.contains('piano-key-active', "piano-key-active-pseudo")){
            el.classList.remove('piano-key-active', "piano-key-active-pseudo")
         }
      })
   }
    window.addEventListener('mouseover', addEvent)
    eventButton(event)
}
pianoKeys.forEach((el) => {
   el.addEventListener('mousedown', addEvent)
   el.addEventListener('mouseup', () => {
      pause(el)
      pianoKeys.forEach(item => item.removeEventListener('mouseover', addEvent))
   })
   el.addEventListener('mouseout', () => pause(el))
})

function eventButton(event){
   event.target.classList.add('piano-key-active', "piano-key-active-pseudo")
   const note = event.target.dataset.note
   const src = `assets/audio/${note}.mp3`
   playAudio(src)
}
function addLetters(l1,l2){
   l1.classList.add('btn-active')
   l2.classList.remove('btn-active')
   const type = `piano-key-${l1.textContent.toLowerCase()}`.split('').slice(0, this.length - 1).join('')
   const subType = `piano-key-${l2.textContent.toLowerCase()}`.split('').slice(0, this.length - 1).join('')
   pianoKeys.forEach((item) => {
      item.classList.add(type)
      item.classList.remove(subType)
  })
}
function keyUp(e){
   let target
    if (e == undefined) {
      return
    }
    if (e.code) {
        pianoKeys.forEach(item => {
            if (item.dataset.letter === e.code.replace("Key", "")) {
               target = item
            }
        })
    } else if (e) {
       target = e.target
    } else {
       target = arguments[0].target
    }
    if (target && target.classList.contains("piano-key")) {
       if(vlad != target){
         target.classList.remove("piano-key-active", "piano-key-active-pseudo")
         target = null
       }
       else{
         target.classList.remove("piano-key-active")
       }
    }
}

btnLetters.addEventListener('click', () => addLetters(btnLetters, btnNotes))
btnNotes.addEventListener('click', () => addLetters(btnNotes, btnLetters))

window.addEventListener('keydown', (event) => {
   if (keyPressed === event.code) return
   vlad1 = event.target
   if (event.code) {
       pianoKeys.forEach(item => {
            if(item.dataset.letter === event.code.replace("Key", "")) {
               item.classList.add('piano-key-active', "piano-key-active-pseudo")
               const note = item.dataset.note
               const src = `assets/audio/${note}.mp3`
               playAudio(src)
            }
       })
   }
   keyPressed = event.code
})
window.addEventListener('keyup', (event) => vladFunc(event))
   function vladFunc(event){
      if (event.code) {
         keyUp(event)
         keyPressed = null
     }
}
