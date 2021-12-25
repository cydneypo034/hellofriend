//clock creation

function startTime() {
    const todayDate = new Date();
    const hour = todayDate.getHours();
    const minute = todayDate.getMinutes();
    const second = todayDate.getSeconds();

    document.getElementById('clock').innerHTML = hour + ':' + minute + ':' + second;
    setTimeout(startTime, 1000)

}

startTime();