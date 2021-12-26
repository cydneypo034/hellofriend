//gif id
let gifSlides = document.getElementById("slidedeck");
//gif array
let gifArray = ["gif-files/totoro-forestgif.gif", "gif-files/ponyo-seagif.gif", "gif-files/howlsmovingcastle-floatinggif.gif",
"gif-files/spiritedaway-traingif.gif", "gif-files/princessmono-warriorgif.gif", "gif-files/kikis-delivery-service.gif", "gif-files/castle-in-the-sky.gif",
"gif-files/grave-of-the-fireflies-grave.gif", "gif-files/only-yesterdaygif.gif", "gif-files/whisperoftheheart-gif.gif",
"gif-files/the-wind-rises-studio-ghibli.gif", "gif-files/the-cat-returns.gif"];
//gif index to set for array
let gifIndex = 0;


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

    if(hour <= 1) {
        gifSlides.setAttribute("src", gifArray[0])
    }
    else if(hour <= 2) {
        gifSlides.setAttribute("src", gifArray[1]);
    }
    else if(hour <= 3) {
        gifSlides.setAttribute("src", gifArray[2])
    }
    else if(hour <= 4) {
        gifSlides.setAttribute("src", gifArray[3])
    }
    else if(hour <= 5) {
        gifSlides.setAttribute("src", gifArray[4])
    }
    else if(hour <= 6) {
        gifSlides.setAttribute("src", gifArray[5])
    }
    else if(hour <= 7) {
        gifSlides.setAttribute("src", gifArray[6])
    }
    else if(hour <= 8) {
        gifSlides.setAttribute("src", gifArray[7])
    }
    else if(hour <= 9) {
        gifSlides.setAttribute("src", gifArray[8])
    }
    else if(hour <= 10) {
        gifSlides.setAttribute("src", gifArray[9])
    }
    else if(hour <= 11) {
        gifSlides.setAttribute("src", gifArray[10])
    }
    else if(hour <= 12) {
        gifSlides.setAttribute("src", gifArray[11])
    }
    else {
        let intervalHandle = setInterval(changeGif, 3000)
    }
    gifSlides.onclick = function() {
        clearInterval(intervalHandle);
    }
}

gifsAndTime();