
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

let slideIndex = 0;
showSlideDeck();

function showSlideDeck(n) {
    let i;
    let slides = document.getElementsByClassName("slidedeck");
   
    for(i = 0; i < slides.length; i++){
        slides[i].style.display = "none"
    }
    slideIndex++;
    if(slideIndex > slides.length) {
        slideIndex = 1
    }

    slides[slideIndex-1].style.display = "block";

    setTimeout(showSlideDeck, 3000)
}

var oka = new Audio("audio-files/01 - oka no machi.mp3");
var girlsky = new Audio("audio-files/01 - the girl who fell from the sky.mp3")
var aJourney = new Audio ("audio-files/01 A Journey (A Dream of Flight).mp3")
var leTemps = new Audio("audio-files/01 Le Temps Des Cerises.mp3")
var genki = new Audio("audio-files/02 Drama Genki Ni Naresou.mp3")
var kiki = new Audio("audio-files/03 a town with an ocean view (kiki's delivery service).mp3")
var howls = new Audio("audio-files/03 sky stroll.mp3")
var sora = new Audio("audio-files/04 Sora Iro No Tane.mp3")
var eto = new Audio("audio-files/05 Eto (Land Of The Impure).mp3") 
var ponyo = new Audio("audio-files/06 - Ponyo and Sosuke.mp3")
var totoro = new Audio("audio-files/10 - totoro.mp3")
var spirited = new Audio("audio-files/10 ano hi no kawa (spirited away).mp3") 

var playlist = [oka, girlsky, aJourney, leTemps, genki, kiki, howls, sora, eto, ponyo, totoro, spirited]
var current = null;
var index = 0;

function playSound() {
    if(current === null || current.ended) {
        //go to next
        current = playlist[index++];
        //check if last of playlist and return to first
        if (index >= playlist.length)
            index = 0;
        //return to begin
        current.currentTime=0;
        //play
        current.play();
    }
};

setInterval(playSound, 1000)