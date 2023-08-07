// list of songs
const songs = [
    {
        "title": "oka no machi",
        "song": "audio-files/01 - oka no machi.mp3"
    },
    {
        "title": "the girl who fell from the sky",
        "song": "audio-files/01 - the girl who fell from the sky.mp3"
    },
    {
        "title": "A Journey (A Dream of Flight)",
        "song": "audio-files/01 A Journey (A Dream of Flight).mp3"
    },
    {
        "title": "Le Temps Des Cerises",
        "song": "audio-files/01 Le Temps Des Cerises.mp3"
    },
    {
        "title": "Drama Genki Ni Naresou",
        "song": "audio-files/02 Drama Genki Ni Naresou.mp3"
    },
    {
        "title": "a town with an ocean view (kiki's delivery service)",
        "song": "audio-files/03 a town with an ocean view (kiki's delivery service).mp3"
    },
    {
        "title": "sky stroll",
        "song": "audio-files/03 sky stroll.mp3"
    },
    {
        "title": "Sora Iro No Tane",
        "song": "audio-files/04 Sora Iro No Tane.mp3"
    },
    {
        "title": "Eto (Land Of The Impure)",
        "song": "audio-files/05 Eto (Land Of The Impure).mp3"
    },
    {
        "title": "Ponyo and Sosuke",
        "song": "audio-files/06 - Ponyo and Sosuke.mp3"
    },
    {
        "title": "Totoro",
        "song": "audio-files/10 - totoro.mp3"
    },
    {
        "title": "ano hi no kawa (spirited away)",
        "song": "audio-files/10 ano hi no kawa (spirited away).mp3"
    }
]
const audio = document.getElementById('audio');
const title = document.getElementById('title');
const songsPlayed = [];
let songIndex = 2;

//function to play song in order of array
function musicPlayer() {
    const musicContainer = document.getElementById('music-container');
    for(let i = 0; i < songs.length; i++){
       const songholder = document.createElement("span");
       songholder.setAttribute("data-id", i);
       musicContainer.appendChild(songholder);
    }
}

musicPlayer();

loadSong(songs[songIndex]);
function loadSong(song) {
    title.innerText = song;
    audio.src = `music/${song}.mp3`;
  }

// function playFunctionality() {
//     const audioId = this.getAttribute('data-id');
//     console.log("Song Playing: " + songs[audioId].title)
//     title.innerHTML = "Song Playing: " + songs[audioId].title
//     //songsPlayed.push(songs[songId].title)
//     this.setAttribute("audio", songs[audioId].song);
//     if(songsPlayed.length == 1){
//         audio.play();
//         songsPlayed = [];
//     }
// }

//setSong.innerHTML = "Song Playing: " + song[songId].title
//if song[songId].song == true { playSound() }

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

