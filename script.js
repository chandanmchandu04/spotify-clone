let songIndex = 0;
let audioElement = new Audio('/songs/Srivalli.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('MyProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));
let isShuffleMode = false;
const shuffleButton = document.getElementById('shuffle');


let songs = [
    {songName: "srivalli - pushpa", filePath: "/songs/Srivalli.mp3", coverPath: "covers/1.jpg"},
    {songName: "Chaleya - Jawan", filePath: "/songs/chaleya.mp3", coverPath: "covers/2.jpg"},
    {songName: "Bande Bathale - Pogaru", filePath: "/songs/bandebathale.mp3", coverPath: "covers/3.jpg"},
    {songName: "Sidila Bharava - KGF", filePath: "/songs/sidilabharava.mp3", coverPath: "covers/4.jpg"},
    {songName: "Sultan - KGF", filePath: "/songs/sulthana.mp3", coverPath: "covers/5.jpg"},
    {songName: "Arabic Kuthu - Beast", filePath: "/songs/arabickuthu.mp3", coverPath: "covers/6.jpg"},
    {songName: "Dostha Kano - Rpbert", filePath: "/songs/Dostakano.mp3", coverPath: "covers/7.jpg"},
    {songName: "Ugramm Veeram - Ugramm", filePath: "/songs/ugrammveeram.mp3", coverPath: "covers/8.jpg"},
    {songName: "Belageddu - Kirik Party", filePath: "/songs/belageddu.mp3", coverPath: "covers/9.jpeg"},
    {songName: "Karabuu - Pogaru", filePath: "/songs/karabu.mp3", coverPath: "covers/10.jpg"},
];

songItems.forEach((element, i)=>{ 
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName; 
})
 

masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else {
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
});

 audioElement.addEventListener('timeupdate', ()=>{ 
     progress = parseInt((audioElement.currentTime/audioElement.duration)* 100); 
     myProgressBar.value = progress;
 })

 myProgressBar.addEventListener('change', ()=>{
     audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
 })

 const makeAllPlays = ()=>{
     Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
         element.classList.remove('fa-pause-circle');
         element.classList.add('fa-play-circle');
     })
 }

 Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
     element.addEventListener('click', (e)=>{ 
         makeAllPlays();
         songIndex = parseInt(e.target.id);
         e.target.classList.remove('fa-play-circle');
         e.target.classList.add('fa-pause-circle');
         audioElement.src = songs[songIndex].filePath;
         masterSongName.innerText = songs[songIndex].songName;
         audioElement.currentTime = 0;
         audioElement.play();
         gif.style.opacity = 1;
           masterPlay.classList.remove('fa-play-circle');
           masterPlay.classList.add('fa-pause-circle');
     })
 })

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=9){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
     audioElement.src =songs[songIndex].filePath;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})



document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = songs[songIndex].filePath;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})