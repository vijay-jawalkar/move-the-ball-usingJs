var ball = document.getElementById("ball");
document.addEventListener("keydown", moveBall);
var l = 0,
  t = 0;

function moveBall(e) {
  var elementW = ball.offsetWidth;
  var browserW = document.documentElement.clientWidth;
  var browserH = document.documentElement.clientHeight;

  var key = e.keyCode;

  // move towards right D
  if (key === 68 || key === 39) {
    if (l + elementW + 10 <= browserW) {
      ball.style.left = l + 10 + "px";
      l += 10;
    } else {
      ball.style.left = browserW - elementW + "px";
    }

    // move towards down S
  } else if (key === 83 || key === 40) {
    if (t + elementW + 10 <= browserH) {
      ball.style.top = t + 10 + "px";
      t += 10;
    } else {
      ball.style.top = browserH - elementW + "px";
    }

    // move towards left A
  } else if (key === 65 || key === 37) {
    if (l - 10 >= 10) {
      ball.style.left = l - 10 + "px";
      l -= 10;
    }

    // move towards up W
  } else if (key === 87 || key === 38) {
    if (t - 10 >= 0) {
      ball.style.top = t - 10 + "px";
      t -= 10;
    }
  }
}
