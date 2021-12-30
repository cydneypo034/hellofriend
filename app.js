
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

// Prototype function to wrap native DOM play function
//Wrapping the native DOM audio element play function and handle any autoplay errors
Audio.prototype.play = (function(play) {
    return function () {
      var audio = this,
          args = arguments,
          promise = play.apply(audio, args);
      if (promise !== undefined) {
        promise.catch(_ => {
          // Autoplay was prevented. This is optional, but add a button to start playing.
          var el = document.createElement("button");
          el.innerHTML = "Play Medley";
          el.addEventListener("click", function(){play.apply(audio, args);});
          this.parentNode.insertBefore(el, this.nextSibling)
        });
      }
    };
    })(Audio.prototype.play);

// Try automatically playing our audio via script. This would normally trigger and error.
const audioElement = document.getElementById('myAudio');
audioElement.play();