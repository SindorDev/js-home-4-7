const $videoPlayer = document.querySelector("#video-player");
const $prev = document.querySelector("#prev");
const $play = document.querySelector("#play");
const $next = document.querySelector("#next");
const $shuffle = document.querySelector("#shuffle");
const $list = document.querySelector(".list");
const $playBtn = document.querySelector("#play-btn");
const $pauseBtn = document.querySelector("#pause-btn");
const $title = document.querySelector("#title");
let $videos = [
     {
          src: "./video/video1.mp4",
          title: "Motivation",
     },
     {
          src: "./video/video2.mp4",
          title: "Learning CSS",
     },
     {
          src: "./video/video3.mp4",
          title: "Learning CSS 2"
     },
     {
          src: "./video/video4.mp4",
          title: "Learning CSS 3"
     }
]
let currentIndex = 0
let autoPlaying = false

function currentVideo() {
$videoPlayer.src = $videos[currentIndex].src;
$title.innerText = $videos[currentIndex].title;
}

currentVideo()

const playVideo = () => {
     autoPlaying = !autoPlaying
    if(autoPlaying) {
     $videoPlayer.play()
     $playBtn.style.display = "none"
     $pauseBtn.style.display = "block"
}
     else {
     $videoPlayer.pause()
     $playBtn.style.display = "block"
     $pauseBtn.style.display = "none"
     }
} 
const nextVideo = () => {
     if(currentIndex + 1 < $videos.length) {
          currentIndex++
     }
     else {
          currentIndex = 0
     }
     currentVideo()
     autoPlaying = false
     playVideo()
}


const prevVideo = () => {
     if(currentIndex > 0) {
          currentIndex--
     }
     else {
          currentIndex = $videos.length - 1
     }
     currentVideo()
     autoPlaying = false
     playVideo()
}
const shuffleVideo = () => {
     let random = Math.floor(Math.random()* $videos.length)
     currentIndex = random
     currentVideo()
     autoPlaying = false
     playVideo()
}  
$videos.forEach((item) => {
     $list.innerHTML += `
     <span>${item.title}</span>
     <br>
     `
})
$playBtn.addEventListener("click", playVideo)
$pauseBtn.addEventListener("click", playVideo)
$next.addEventListener("click", nextVideo)
$prev.addEventListener("click", prevVideo)
$shuffle.addEventListener("click", shuffleVideo)