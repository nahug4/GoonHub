// button to caleb page
document.addEventListener("DOMContentLoaded", function () {
  const calebButton = document.getElementById("caleb");

  calebButton.addEventListener("click", function () {
    window.location.href = "caleb.html";
  });
  
//button to kye page
  document.addEventListener("DOMContentLoaded", function () {
  const kyeButton = document.getElementById("kye");

  kyeButton.addEventListener("click", function () {
    window.location.href = "kye.html";
  });

    
}); // sigma
function openFullscreen(imgElement) {
  if (imgElement.requestFullscreen) {
    imgElement.requestFullscreen();
  } else if (imgElement.mozRequestFullScreen) {
    imgElement.mozRequestFullScreen();
  } else if (imgElement.webkitRequestFullscreen) {
    imgElement.webkitRequestFullscreen();
  } else if (imgElement.msRequestFullscreen) {
    imgElement.msRequestFullscreen();
  }
}
