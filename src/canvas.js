const canvas = document.getElementById('viewport');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

metapodImage = new Image();
shinyMetapodImage = new Image();
metapodImage.src = 'images/metapod.png';
shinyMetapodImage.src = 'images/shiny_metapod.png';

let fixedPosition = canvas.width / 8 - 50
let metapodP1 = canvas.width / (8 / 1) - 54;
let metapodP2 = canvas.width / (8 / 3) - 54;
let metapodP3 = canvas.width / (8 / 5) - 54;
let metapodP4 = canvas.width / (8 / 7) - 54;
let dx = 4;
let metapodShadowX = 50;
let metapodShadowY = 15;

metapodImage.addEventListener("load", () => {
  ctx.drawImage(metapodImage, metapodP1, 500, 100, 100);
  ctx.drawImage(shinyMetapodImage, metapodP2, 500, 100, 100);
  ctx.drawImage(metapodImage, metapodP3, 500, 100, 100);
  ctx.drawImage(shinyMetapodImage, metapodP4, 500, 100, 100);
})

function drawMetapods() {
  drawMetapodShadow(metapodP1);
  ctx.drawImage(metapodImage, metapodP1, 500, 100, 100);
  
  drawMetapodShadow(metapodP2);
  ctx.drawImage(shinyMetapodImage, metapodP2, 500, 100, 100);
  
  drawMetapodShadow(metapodP3);
  ctx.drawImage(metapodImage, metapodP3, 500, 100, 100);
  
  drawMetapodShadow(metapodP4);
  ctx.drawImage(shinyMetapodImage, metapodP4, 500, 100, 100);
}

function drawMetapodShadow(metapodPos) {
  ctx.beginPath();
  ctx.ellipse(metapodPos + 44, 600, metapodShadowX, metapodShadowY, 0, Math.PI * 2, false);
  ctx.fillStyle = "rgba(41, 41, 41, 0.8)";
  ctx.fill();
}

function moveMetapods() {
  metapodP1 += dx;
  metapodP2 += dx;
  metapodP3 += dx;
  metapodP4 += dx;
  drawMetapods();
  if (metapodP1 > fixedPosition || metapodP1 < fixedPosition) {
    dx = -dx;
  }
}


function animate() {
  ctx.clearRect(0, 0, innerWidth, innerHeight);
  window.setTimeout(() => requestAnimationFrame(animate), 300);
  moveMetapods();
}

animate();