function updateTime() {
    const now = new Date();
    const utcTime = now.toUTCString();
    document.getElementById("currentTimeUTC").innerText = `Current UTC Time: ${utcTime}`;
}

// Update time on page load
updateTime();