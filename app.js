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
        "url": "audio-files/01 -opening- merry-go-round of life.mp3"
    },
    {
        "name": "In The Rain - Howl's Moving Castle",
        "url": "audio-files/12 in the rain.mp3"
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
function loadSong(song_index) {

    //clears out previous time
    clearInterval(updateTimer);
    resetValues();

    //load new song - get the current time and create path load new song
    curr_song.src = songs[song_index].url;
    curr_song.load();

    //update song details by updating the html's title id with 
    //the name in the js object and creating the now playing feature
    song_name.textContent = songs[song_index].name;
    now_playing.textContent = "playing " + [song_index + 1] + " of " + songs.length;

    // set interval of 1000 milliseconds to update slider
    updateTimer = setInterval(seekUpdate, 1000)

    //move to the next song after current song is finished
    curr_song.addEventListener( "ended", nextSong);
}

//clears song out of player
function resetValues() {
    curr_time.textContent = "00 : 00";
    total_duration.textContent = "00 : 00";
    seek_slider.value = 0;
}

//switch between play and pause
function playSong() {
    if(!isPlaying) {
        curr_song.play();
        console.log("I play: " + songs[song_index].name)
    } else {
        curr_song.pause();
        console.log("I pause: " + songs[song_index].name)
    }
}

curr_song.onplay = function() {
    isPlaying = true;
    pause_PlayBtn.innerHTML = "<div class='pause-n-play'> <i class='fa-solid fa-pause' onclick='playSong()'></i></div>"
  };
curr_song.onpause = function() {
    isPlaying = false;
    pause_PlayBtn.innerHTML = "<div class='pause-n-play'> <i class='fa-solid fa-play' onclick='playSong()'></i></div>"
  };

// play next song
function nextSong() {

    //go back to first track if the current one is the last in the list
    if(song_index < songs.length - 1) {
        song_index += 1;
    } else {
        song_index = 0
    }

    //load and play the new track
    loadSong(song_index);
    playSong();
}

//play previous song
function previousSong() {

    //go back to first track if the current one is the first in the list
    if(song_index > 0) {
        song_index -= 1
    } else {
        song_index = songs.length - 1
    }

    //load and play the new track
    loadSong(song_index);
    playSong();
}

//updating the seek slider
function seekUpdate() {
    let seekPosition = 0;

    //check if current track duration is a legible number
    if(!isNaN(curr_song.duration)){
        seekPosition = curr_song.currentTime * (100 / curr_song.duration);
        seek_slider.value = seekPosition;

        //Calculate the time left and the total duration
        let currentMinutes = Math.floor(curr_song.currentTime / 60);
        let currentSeconds = Math.floor(curr_song.currentTime - currentMinutes * 60);
        let durationMinutes = Math.floor(curr_song.duration / 60);
        let durationSeconds = Math.floor(curr_song.duration - durationMinutes * 60);

        // Add a zero to the single digit time values
        if (currentSeconds < 10) { currentSeconds = "0" + currentSeconds; }
        if (durationSeconds < 10) { durationSeconds = "0" + durationSeconds; }
        if (currentMinutes < 10) { currentMinutes = "0" + currentMinutes; }
        if (durationMinutes < 10) { durationMinutes = "0" + durationMinutes; }

        // Display the updated duration
        curr_time.textContent = currentMinutes + ":" + currentSeconds;
        total_duration.textContent = durationMinutes + ":" + durationSeconds;
    }
}

function seekTo() {
    // Calculate the seek position by the
    // percentage of the seek slider
    // and get the relative duration to the track
    seekto = curr_song.duration * (seek_slider.value / 100);
   
    // Set the current track position to the calculated seek position
    curr_song.currentTime = seekto;
  }
   
  function setVolume() {
    // Set the volume according to the
    // percentage of the volume slider set
    curr_song.volume = volume_slider.value / 100;
  }

loadSong(song_index);

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