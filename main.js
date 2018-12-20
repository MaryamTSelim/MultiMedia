window.addEventListener("load", function (e) {
    let video = document.getElementById("hajiVideo");
    let isPlaying = false;
    let isfullScreen = false;
    video.addEventListener("click", function (e) {
        if (!isPlaying) {
            video.play();
            isPlaying = true;
        } else {
            video.pause();
            isPlaying = false;
        }
    }, false);
    video.addEventListener("dblclick", function (e) {
        if (!isfullScreen) {
            video.requestFullscreen();
            isfullScreen = true;
        } else {
            document.exitFullscreen()
            isfullScreen = false;
        }
    }, false);
})