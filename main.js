window.addEventListener("load", function (e) {
    let video = document.getElementById("hajiVideo");
    let isPlaying = false;
    video.addEventListener("click", function (e) {
        console.log(video)
        if (!isPlaying) {
            video.play();
            isPlaying = true;
        } else {

            video.pause();
            isPlaying = false;
        }
    }, false);
})