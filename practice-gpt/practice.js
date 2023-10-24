document.addEventListener("DOMContentLoaded", function() {
  const canvas = document.getElementById("myCanvas");
  const context = canvas.getContext("2d");
  const canvasContainer = document.getElementById("canvasContainer");
  const moveLeftButton = document.getElementById("moveLeftButton");
  const moveRightButton = document.getElementById("moveRightButton");
  const moveUpButton = document.getElementById("moveUpButton");
  const moveDownButton = document.getElementById("moveDownButton");

  let circleX = canvas.width / 2;
  let circleY = canvas.height / 2;
  const circleRadius = 50;

  function drawCircle() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.beginPath();
    context.fillStyle = "blue";
    context.fillRect(circleX, circleY, 50, 50);
    context.closePath();
  }

  drawCircle();

  moveLeftButton.addEventListener("click", function() {
      circleX -= 50;
      drawCircle();
  });

  moveRightButton.addEventListener("click", function() {
      circleX += 50;
      drawCircle();
  });

  moveUpButton.addEventListener("click", function() {
      circleY -= 50;
      drawCircle();
  });

  moveDownButton.addEventListener("click", function() {
      circleY += 50;
      drawCircle();
  });
});
