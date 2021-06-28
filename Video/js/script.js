'use scrict'
const video = document.querySelector("#video");
const rangeTime = document.querySelector(".rangeTime");
rangeTime.max = video.duration;
rangeTime.min = 0;
rangeTime.oninput = function(){
   video.currentTime = rangeTime.value;
}

  const playbackRate = document.querySelector("#playbackRate");
playbackRate.innerText = video.playbackRate;

  document.querySelector("#volume_stop").onclick = function (){
     if (video.muted) {  
        video.muted = false;
        this.src = "./sourse/audio.png";
    } else {
        video.muted = true;
        this.src = "./sourse/no-audio.png";
    }
  }

  document.querySelector("#play").onclick = function (){
     if (video.paused) {  // если видео остановлено, запускаем
        video.play();
        this.src = "./sourse/stop.png";
    } else {
        video.pause();
        this.src = "./sourse/turn.png";
    }
  }

  document.getElementById("slower").onclick = function (){
     if (video.playbackRate <= 0) {  // если видео остановлено, запускаем
        video.playbackRate = 1;
    } else {
        video.playbackRate -= 1;
    }
    playbackRate.innerText = video.playbackRate;
  }

  document.getElementById("faster").onclick = function (){
     if (video.playbackRate >= 10) {  // если видео остановлено, запускаем
        video.playbackRate = 1;
    } else {
        video.playbackRate += 1;
    }
    playbackRate.innerText = video.playbackRate;
  }

  document.getElementById("back").onclick = function (){        		
     video.currentTime -=10;            		
     if(video.currentTime<0)video.currentTime =0;        		   		
  }
  document.getElementById("next").onclick = function (){        		
     video.currentTime +=10;       
     if(video.currentTime>video.duration)video.currentTime =video.duration;   		
  }
  document.getElementById("full").onclick = function (){        		
     video.requestFullscreen();        		
  }





// получаем все элементы
var videoEl = document.getElementsByTagName('video')[0],         
   volumeControl = document.getElementById('volume'),
   range = document.getElementById('range'),
   timePicker = document.getElementById('timer');

   volumeControl.value = 1;

        
range.setAttribute("min", 0);
range.setAttribute("max", 440.877279);
console.log(range.getAttribute("min"));
console.log(range.getAttribute("max"));
range.addEventListener('input', function () {         
   videoEl.currentTime = range.value;
}, false);
        
volumeControl.addEventListener('input', function () {         
   videoEl.volume = volumeControl.value;
   if(videoEl.volume==0) document.getElementById("volume_stop").src = "./sourse/no-audio.png";
   else document.getElementById("volume_stop").src = "./sourse/audio.png";
}, false);

videoEl.addEventListener('ended', function () {
   videoEl.currentTime = 0;
}, false);

videoEl.addEventListener('timeupdate', function () {
   timePicker.innerHTML = secondsToTime(videoEl.currentTime);
}, false);

// рассчет отображаемого времени
function secondsToTime(time){    
  if(video.duration==video.currentTime) document.getElementById("play").src = "./sourse/reboot.png";
   range.value = video.currentTime;


   var h = Math.floor(time / (60 * 60)),
       dm = time % (60 * 60),
       m = Math.floor(dm / 60),
       ds = dm % 60,
       s = Math.ceil(ds);
   if (s === 60) {
       s = 0;
       m = m + 1;
   }
   if (s < 10) {
       s = '0' + s;
   }
   if (m === 60) {
       m = 0;
       h = h + 1;
   }
   if (m < 10) {
       m = '0' + m;
   }
   if (h === 0) {
       fulltime = m + ':' + s;
   } else {
       fulltime = h + ':' + m + ':' + s;
   }
   return fulltime;
}
