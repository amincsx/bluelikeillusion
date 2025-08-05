const canvas = document.getElementById('bgCanvas');
const ctx = canvas.getContext('2d');

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
window.addEventListener('resize', resizeCanvas);
resizeCanvas();

// Abstract moving circles
const colors = [
  'rgba(0,183,255,0.5)', // light blue
  'rgba(255,0,54,0.4)',  // red
  'rgba(0,183,255,0.3)',
  'rgba(255,0,54,0.2)'
];

const circles = Array.from({ length: 18 }, () => ({
  x: Math.random() * canvas.width,
  y: Math.random() * canvas.height,
  r: 60 + Math.random() * 80,
  dx: (Math.random() - 0.5) * 1.2,
  dy: (Math.random() - 0.5) * 1.2,
  color: colors[Math.floor(Math.random() * colors.length)]
}));

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (const c of circles) {
    ctx.beginPath();
    ctx.arc(c.x, c.y, c.r, 0, 2 * Math.PI);
    ctx.fillStyle = c.color;
    ctx.filter = 'blur(8px)';
    ctx.fill();
    ctx.filter = 'none';
    // Move
    c.x += c.dx;
    c.y += c.dy;
    // Bounce off edges
    if (c.x - c.r < 0 || c.x + c.r > canvas.width) c.dx *= -1;
    if (c.y - c.r < 0 || c.y + c.r > canvas.height) c.dy *= -1;
  }
  requestAnimationFrame(animate);
}

animate(); 