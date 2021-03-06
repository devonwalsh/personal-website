let i = 0;
const txt = "Hi, I'm Devon Walsh.";
const speed = 100;

function typeWriter() {
    if (i < txt.length) {
      document.getElementById("landing").innerHTML += txt.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
  }

window.onload = function() {
    typeWriter();
  };