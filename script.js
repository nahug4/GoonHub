document.addEventListener("DOMContentLoaded", function () {
  const calebButton = document.getElementById("caleb");

  calebButton.addEventListener("click", function () {
    window.location.href = "caleb.html";
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
