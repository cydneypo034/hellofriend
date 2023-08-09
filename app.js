// list of songs
const songs = [
    {
        "name": "Merry-go-round Of Life - Howl's Moving Castle",
        "url": "audio-files/opening- merry-go-round of life.mp3"
    },
    {
        "name": "In The Rain - Howl's Moving Castle",
        "url": "audio-files/in the rain.mp3"
    },
    {
        "name": "Eto (Land Of The Impure) - Princess Mononoke",
        "url": "audio-files/05 Eto (Land Of The Impure).mp3"
    },
    {
        "name": "Ponyo's Lullaby - Ponyo",
        "url": "audio-files/18 - Ponyo's Lullaby.mp3"
    },
    {
        "name": "A Town with an Ocean View - Kiki's Delivery Service",
        "url": "audio-files/03 a town with an ocean view (kiki's delivery service).mp3"
    },
    {
        "name": "Totoro - My Neighbor Totoro",
        "url": "audio-files/10 - totoro.mp3"
    },
    {
        "name": "Tsukamori No Taiju - My Neighbor Totoro",
        "url": "audio-files/11 - tsukamori no taiju.mp3"
    },
    {
        "name": "A Shooting Star - The Wind Rises",
        "url": "audio-files/02 A Shooting Star.mp3"
    },
    {
        "name": "5AM / Sunny Weather - Animal Crossing New Horizons",
        "url": "audio-files/1-05 500 a.m. (~Sunny Weather~).mp3"
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

