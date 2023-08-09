// --------------- Variables ----------------- //

// ------------------ MUSIC PLAYER //
// Select all the CSS elements in the HTML page
// and assign them to a variable
let now_playing = document.querySelector(".now-playing");
let song_name = document.querySelector(".title");
let pause_PlayBtn = document.querySelector(".pause-n-play");
let next_btn = document.querySelector(".next");
let prev_btn = document.querySelector(".previous");

let seek_slider = document.querySelector(".seek_slider");
let volume_slider = document.querySelector(".volume_slider");
let curr_time = document.querySelector(".current-time");
let total_duration = document.querySelector(".total-duration");

// Specify globally used values
let song_index = 0;
let isPlaying = false;
let updateTimer;

// Create the audio element for the player
let curr_song = document.createElement('audio');

// Define the list of tracks that have to be played
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

//load song into music player
function loadSong() {

    //clears out previous time
    clearInterval();
    resetValues();

    //load new song - get the current time and create path load new song
    curr_time.src = songs[song_index].path;
    curr_time.load();

    //update song details by updating the html's title id with 
    //the name in the js object and
    song_name.textContent = songs[song_index].name
    now_playing.textContent = "playing" + [song_index + 1] + "of" + songs.length;

}

//clears song out of player
function resetValues() {
    curr_time.textContent = "00 : 00";
    total_duration.textContent = "00 : 00";
    seek_slider.value = 0;
}


// ------------------ DARK AND LIGHT MODE//
function darkMode() {
    let element = document.documentElement;
    let content = document.getElementById("DarkModetext");
    element.className = "dark-mode";
    content.innerText = "dark mode is on";
}
function lightMode() {
    let element = document.documentElement;
    let content = document.getElementById("DarkModetext");
    element.className = "light-mode";
    content.innerText = "dark mode is off";
}

// ------------------ CLOCK CREATION //
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

