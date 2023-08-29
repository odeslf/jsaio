const ball = document.getElementById("ball");
document.addEventListener("keydown", handleKeyPress);
let position = 0;

function handleKeyPress(e) {
  if (e.code === "KeyA") {
    position = position - 30;
  }
  if (e.code === "KeyD") {
    position = position + 30;
  }
  if (e.code === "KeyS") {
    position = position + 30;
  }
  if (e.code === "KeyW") {
    position = position - 30;
  }
  if (position < 0) {
    position = 0;
  }
  refresh(); //update the ball's position
}

function refresh() {
  ball.style.left = position + "px";
}
