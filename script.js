var audio = document.getElementById("main_music");
var audioControl = document.getElementById("audio-control");
var audioPlaying = false;

function openModal(element) {
    var modal = document.getElementById("myModal");
    var modalImg = document.getElementById("img01");
    var captionText = document.getElementById("caption");
    modal.style.display = "block";
    modalImg.src = element.src;
    captionText.innerHTML = "Фотография";
}

function closeModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
}

function toggleAudio() {
    audioPlaying = !audioPlaying;
    if (audioPlaying) {
        audio.play();
        audioControl.innerHTML = '<img src="src/music_on.png" alt="Music Control">';
        audioControl.style.backgroundColor = "red";
    } else {
        audio.pause();
        audioControl.innerHTML = '<img src="src/music_off.png" alt="Music Control">';
        audioControl.style.backgroundColor = "gray";
    }
}