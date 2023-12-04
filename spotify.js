console.log('hi');
//initialize variables
let songIndex=0;
let audioElement=new Audio('1.mp3');
let masterPlay=document.getElementById('masterPlay');
let myProgressBar=document.getElementById('myProgressBar');
let gif=document.getElementById('gif');
let songs=[
    {
        songName:'bekayali',filePath:"C:\Users\wwwdh\OneDrive\Desktop\html files\springboard\spotify\x01.mp3",coverPath:'covers/1.jpg'
    },
    {
        songName:'bekayali',filePath:"2.mp3",coverPath:'covers/1.jpg'
    },
    {
        songName:'bekayali',filePath:"3.mp3",coverPath:'covers/1.jpg'
    },

]
//handle play/pause click
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove("fa-sharp fa-regular fa-circle-play fa-shake-play");
        masterPlay.classList.add('fa-sharp fa-regular fa-circle-play fa-shake-pause');
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-sharp fa-regular fa-circle-play fa-shake-play');
        masterPlay.classList.add('fa-sharp fa-regular fa-circle-play fa-shake-pause');
        gif.style.opacity=0;
    }

    }
});
//lizen to events
audioElement.addEventListener('timeupdate',()=>{
    console.log('timeupdate');
    //update seekbar

    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
   // console.log(progress);
    myProgressBar.value=progress;

})
myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime=myProgressBar.value*audioElement.duration;
})