// Create overlay div
const overlay = document.createElement('div');
overlay.className = 'overlay';
overlay.style.position = 'absolute';
overlay.style.top = 0;
overlay.style.left = 0;
overlay.style.right = 0;
overlay.style.bottom = 0;
overlay.style.width = '100%';
overlay.style.height = '100%';
overlay.style.pointerEvents = 'none';
overlay.style.background = 'rgba(0, 0, 0, 0.5)';
overlay.style.mixBlendMode = 'normal';
overlay.style.zIndex = 2;
overlay.style.backdropFilter = 'blur(8px)';

document.querySelector('.video-background').appendChild(overlay); 