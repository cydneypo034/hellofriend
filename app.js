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
let audioPicks = document.getElementById("audio")
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

function changeAudio() {
    audioPicks.setAttribute("src", audioArray[audioIndex]);
    audioIndex++;
    if(audioIndex >= audioArray.length) {
        arrayIndex = 0;
    }
}


function gifsAndTime() {
    let todayDate = new Date();
    let hour = todayDate.getHours();

    if(hour <= 1) {
        gifSlides.setAttribute("src", gifArray[0]);    
        totoroAudio.play();
    }
    else if(hour <= 2) {
        gifSlides.setAttribute("src", gifArray[1]);    
        let ponyoAudio = document.getElementById("ponyo-audio");
        ponyoAudio.play();
    }
    else if(hour <= 3) {
        gifSlides.setAttribute("src", gifArray[2]);    
        let howlsAudio = document.getElementById("howlsmovingcastle-audio");
        howlsAudio.play();
    }
    else if(hour <= 4) {
        gifSlides.setAttribute("src", gifArray[3]);
        let spiritedAwayAudio = document.getElementById("spiritedaway-audio");
        spiritedAwayAudio.play();
    }
    else if(hour <= 5) {
        gifSlides.setAttribute("src", gifArray[4]);
        let princessMonoAudio = document.getElementById("princessmono-audio");
        princessMonoAudio.play();
    }
    else if(hour <= 6) {
        gifSlides.setAttribute("src", gifArray[5]);
        let kikiDeliveryAudio = document.getElementById("kikisdelivery-audio");
        kikiDeliveryAudio.play();
    }
    else if(hour <= 7) {
        gifSlides.setAttribute("src", gifArray[6]);
        let castleInTheSkyAudio = document.getElementById("castleinthesky-audio");
        castleInTheSkyAudio.play();
    }
    else if(hour <= 8) {
        gifSlides.setAttribute("src", gifArray[7]);
        let graveOfFirefliesAudio = document.getElementById("graveoffireflies-audio");
        graveOfFirefliesAudio.play();
    }
    else if(hour <= 9) {
        gifSlides.setAttribute("src", gifArray[8]);
        let onlyYesterdayAudio = document.getElementById("onlyyesterday-audio");
        onlyYesterdayAudio.play();
    }
    else if(hour <= 10) {
        gifSlides.setAttribute("src", gifArray[9]);
        let whisperOfTheHeart = document.getElementById("whisperoftheheart-audio");
        whisperOfTheHeart.play();
    }
    else if(hour <= 11) {
        gifSlides.setAttribute("src", gifArray[10]);
        let windRisesAudio = document.getElementById("thewindrises-audio");
        windRisesAudio.play();
    }
    else if(hour <= 12) {
        gifSlides.setAttribute("src", gifArray[11]);
        let catReturnsAudio = document.getElementById("thecatreturns-audio");
        catReturnsAudio.play();
    }
    else {
        let intervalHandle = setInterval(changeGif, 3000)
    }
    gifSlides.onclick = function() {
        clearInterval(intervalHandle);
    }
}

gifsAndTime();