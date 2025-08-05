const video = document.getElementById('bgVideo');
let playingForward = true;
let rafId = null;

video.addEventListener('ended', () => {
  playingForward = false;
  playReverse();
});

video.addEventListener('play', () => {
  if (!playingForward) playReverse();
});

function playReverse() {
  cancelAnimationFrame(rafId);
  function step() {
    if (video.currentTime <= 0) {
      playingForward = true;
      video.play();
      return;
    }
    video.currentTime -= 1 / 60; // ~60fps
    rafId = requestAnimationFrame(step);
  }
  step();
}

// Start playing forward on load
video.addEventListener('loadedmetadata', () => {
  playingForward = true;
  video.play();
}); 