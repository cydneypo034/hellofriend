// list of songs
const songs = [
    {
        "name": "oka no machi",
        "url": "audio-files/01 - oka no machi.mp3"
    },
    {
        "name": "the girl who fell from the sky",
        "url": "audio-files/01 - the girl who fell from the sky.mp3"
    },
    {
        "name": "A Journey (A Dream of Flight)",
        "url": "audio-files/01 A Journey (A Dream of Flight).mp3"
    },
    {
        "name": "Le Temps Des Cerises",
        "url": "audio-files/01 Le Temps Des Cerises.mp3"
    },
    {
        "name": "Drama Genki Ni Naresou",
        "url": "audio-files/02 Drama Genki Ni Naresou.mp3"
    },
    {
        "name": "a town with an ocean view (kiki's delivery service)",
        "url": "audio-files/03 a town with an ocean view (kiki's delivery service).mp3"
    },
    {
        "name": "sky stroll",
        "url": "audio-files/03 sky stroll.mp3"
    },
    {
        "name": "Sora Iro No Tane",
        "url": "audio-files/04 Sora Iro No Tane.mp3"
    },
    {
        "name": "Eto (Land Of The Impure)",
        "url": "audio-files/05 Eto (Land Of The Impure).mp3"
    },
    {
        "name": "Ponyo and Sosuke",
        "url": "audio-files/06 - Ponyo and Sosuke.mp3"
    },
    {
        "name": "Totoro",
        "url": "audio-files/10 - totoro.mp3"
    },
    {
        "name": "ano hi no kawa (spirited away)",
        "url": "audio-files/10 ano hi no kawa (spirited away).mp3"
    }
]

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

