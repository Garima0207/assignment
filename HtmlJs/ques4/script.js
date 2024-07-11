function convertToLocalTime() {
    let now = new Date();
    let localTimeString = `Local Time: ${now.toLocaleString()}`;
    document.getElementById('localTime').innerText = localTimeString;
    let utcTimeString = `UTC Time: ${now.toISOString()}`;
    document.getElementById('utcTime').innerText = utcTimeString;
}

function startTimer() {
    updateTime();
    setInterval(updateTime, 1000);
}
function updateTime() {
    let now = new Date();
    document.getElementById('currentTime').innerText = `Current Time: ${now.toLocaleString()}`;
}