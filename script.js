const video = document.getElementById('wildlifeVideo');
const videoContainer = document.getElementById('videoContainer');
const toggleButton = document.getElementById('toggleButton');

toggleButton.addEventListener('click', function () {
    if (videoContainer.classList.contains('hidden')) {
        videoContainer.classList.remove('hidden');
        toggleButton.textContent = 'Hide Video';
        if (video.paused) {
            video.play();
        }
    } else {
        videoContainer.classList.add('hidden');
        toggleButton.textContent = 'Show Video';
        video.pause();
    }
});
