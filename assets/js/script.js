if ("Notification" in window) {
    if (Notification.permission === "granted") {
        notify();
    } else {
        Notification.requestPermission().then(res => {
            if (res === "granted") {
                notify();
            } else {
                console.error("Did not receive permission for notifications");
            }
        })
    }
} else {
    console.error("Browser does not support notifications");
}

function notify() {

    const notification = new Notification('Breaking:',{
        body: `Celebrity Caught in Fresh Scandal`,
        icon: 'https://unsplash.it/400/400',
        vibration: [300,200,300],
    });

    notification.addEventListener('click', function() {
        window.open('https://www.openjavascript.info');
    });

    setTimeout(() => notification.close(), 5*1000);

}

console.log("RUNS");