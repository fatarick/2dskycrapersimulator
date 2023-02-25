const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

// Set the canvas dimensions
canvas.width = window.innerWidth;
canvas.height = window.innerHeight - 50;

// Store the mouse position
let mouse = {
  x: 0,
  y: 0,
};

// Store the blocks
let blocks = [];

// Listen for mouse events
canvas.addEventListener("mousedown", (event) => {
  // Create a new block at the mouse position
  const block = {
    x: mouse.x,
    y: mouse.y,
    width: 100,
    height: 100,
  };
  blocks.push(block);
});

canvas.addEventListener("mousemove", (event) => {
  // Update the mouse position
  mouse.x = event.clientX - canvas.offsetLeft;
  mouse.y = event.clientY - canvas.offsetTop;
});

// Draw the sky
context.fillStyle = "#87ceeb";
context.fillRect(0, 0, canvas.width, canvas.height);

// Draw the ground
context.fillStyle = "#8b4513";
context.fillRect(0, canvas.height - 50, canvas.width, 50);

// Draw the blocks
function drawBlocks() {
  for (let i = 0; i < blocks.length; i++) {
    const block = blocks[i];
    context.fillStyle = "#fff";
    context.fillRect(block.x, block.y, block.width, block.height);
  }
}

// Update the canvas
function update() {
  // Clear the canvas
  context.clearRect(0, 0, canvas.width, canvas.height);

  // Draw the sky
  context.fillStyle = "#87ceeb";
  context.fillRect(0, 0, canvas.width, canvas.height);

  // Draw the ground
  context.fillStyle = "#8b4513";
  context.fillRect(0, canvas.height - 50, canvas.width, 50);

  // Draw the blocks
  drawBlocks();

  // Request the next frame
  window.requestAnimationFrame(update);
}

// Start the update loop
update();
