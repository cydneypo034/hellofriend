//gif id
let gifSlides = document.getElementById("slidedeck");
//gif array
let gifArray = ["gif-files/totoro-forestgif.gif", "gif-files/ponyo-seagif.gif", "gif-files/howlsmovingcastle-floatinggif.gif",
"gif-files/spiritedaway-traingif.gif", "gif-files/princessmono-warriorgif.gif", "gif-files/kikis-delivery-service.gif", "gif-files/castle-in-the-sky.gif",
"gif-files/grave-of-the-fireflies-grave.gif", "gif-files/only-yesterdaygif.gif", "gif-files/whisperoftheheart-gif.gif",
"gif-files/the-wind-rises-studio-ghibli.gif", "gif-files/the-cat-returns.gif"];
//gif index to set for array
let gifIndex = 0;

//audio id
let audioPicks = document.getElementById("audioclip");
//audio files from https://downloads.khinsider.com/game-soundtracks/album/studio-ghibli-soundtrack-collection-bonus-disc
let audioArray = ["audio-files/10 - totoro.mp3", "audio-files/06 - Ponyo and Sosuke.mp3", "audio-files/03 sky stroll.mp3", 
"audio-files/10 ano hi no kawa (spirited away).mp3", "audio-files/05 Eto (Land Of The Impure).mp3", "audio-files/03 a town with an ocean view (kiki's delivery service).mp3",
"audio-files/01 - the girl who fell from the sky.mp3", "audio-files/02 Drama Genki Ni Naresou.mp3", "audio-files/01 Le Temps Des Cerises.mp3",
"audio-files/01 - oka no machi.mp3", "audio-files/01 A Journey (A Dream of Flight).mp3", "audio-files/04 Sora Iro No Tane.mp3" ]
//audio index to set for array
let audioIndex = 0;


//clock creation
function startTime() {    
    setTimeout(startTime, 1000)

    let todayDate = new Date();
    let hour = todayDate.getHours();
    let minute = todayDate.getMinutes();
    let second = todayDate.getSeconds();
    am_pm = "AM";

    if(hour > 12){
        hour -= 12;
        am_pm = "PM";
    }
    if(hour == 0) {
        hour = 12;
        am_pm = "AM";
    }

    hour = hour < 10 ? "0" + hour : hour;
    minute = minute < 10 ? "0" + minute : minute;
    second = second < 10 ? "0" + second : second;

    document.getElementById('clock').innerHTML = 
    hour + ':' + minute + ':' + second;

    
}
startTime();


function changeGif() {
    gifSlides.setAttribute("src", gifArray[gifIndex]);
    gifIndex++;
    if(gifIndex >= gifArray.length) {
        gifIndex = 0;
    }
}


function gifsAndTime() {
    let todayDate = new Date();
    let hour = todayDate.getHours();

    if(hour == 0) {
        let gifIndex = null;
        console.log("no gif", gifIndex)
    }
    else if(hour >= 1) {
        gifSlides.setAttribute("src", gifArray[0]);
    }
    else if(hour >= 2) {
        gifSlides.setAttribute("src", gifArray[1]);
    }
    else if(hour >= 3) {
        gifSlides.setAttribute("src", gifArray[2]);
    }
    else if(hour >= 4) {
        gifSlides.setAttribute("src", gifArray[3]);
    }
    else if(hour >= 5) {
        gifSlides.setAttribute("src", gifArray[4]);
    }
    else if(hour >= 6) {
        gifSlides.setAttribute("src", gifArray[5]);
    }
    else if(hour >= 7) {
        gifSlides.setAttribute("src", gifArray[6]);
    }
    else if(hour >= 8) {
        gifSlides.setAttribute("src", gifArray[7]);
    }
    else if(hour >= 9) {
        gifSlides.setAttribute("src", gifArray[8]);
    }
    else if(hour >= 10) {
        gifSlides.setAttribute("src", gifArray[9]);
    }
    else if(hour >= 11) {
        gifSlides.setAttribute("src", gifArray[10]);
    }
    else if(hour >= 12) {
        gifSlides.setAttribute("src", gifArray[11]);
    }
    else {
        let intervalHandle = setInterval(changeGif, 3000)
    }
    gifSlides.onclick = function() {
        clearInterval(intervalHandle);
    }
}

function changeAudio() {
    audioPicks.setAttribute("src", audioArray[audioIndex]);
    audioIndex++;
    if(audioIndex >= audioArray.length) {
        arrayIndex = 0;
    }
}

function audioAndTime() {
    let todayDate = new Date();
    let hour = todayDate.getHours();

    if(hour == 0) {
        let audioIndex = null;
        console.log("no audio", audioIndex)
    }
    else if(hour >= 1) {
        audioPicks.setAttribute("src", audioArray[0]);
    }
    else if(hour >= 2) {
        audioPicks.setAttribute("src", audioArray[1]);
    }
    else if(hour >= 3) {
        audioPicks.setAttribute("src", audioArray[2]);
    }
    else if(hour >= 4) {
        audioPicks.setAttribute("src", audioArray[3]);
    }
    else if(hour >= 5) {
        audioPicks.setAttribute("src", audioArray[4]);
    }
    else if(hour >= 6) {
        audioPicks.setAttribute("src", audioArray[5]);
    }
    else if(hour >= 7) {
        audioPicks.setAttribute("src", audioArray[6]);
    }
    else if(hour >= 8) {
        audioPicks.setAttribute("src", audioArray[7]);
    }
    else if(hour >= 9) {
        audioPicks.setAttribute("src", audioArray[8]);
    }
    else if(hour >= 10) {
        audioPicks.setAttribute("src", audioArray[9]);
    }
    else if(hour >= 11) {
        audioPicks.setAttribute("src", audioArray[10]);
    }
    else if(hour >= 12) {
        audioPicks.setAttribute("src", audioArray[11]);
    }
    else {
        let intervalHandle2 = setInterval(changeAudio, 3000)
    }
    audioPicks.onclick = function() {
        clearInterval(intervalHandle2);
    }
}
gifsAndTime();
audioAndTime();