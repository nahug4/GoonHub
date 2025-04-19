document.addEventListener("DOMContentLoaded", function () {
  const calebButton = document.getElementById("caleb");
  if (calebButton) {
    calebButton.addEventListener("click", function () {
      window.location.href = "caleb.html";
    });
  }

  // Initialize click count display on page load
  let count = parseInt(localStorage.getItem("clickCount")) || 0;
  const totalDisplay = document.getElementById("total");
  if (totalDisplay) {
    totalDisplay.textContent = "Total Clicks: " + count;
  }
}); // sigma

// Fullscreen function for images
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

// Button click counter
function submitClick() {
  let count = parseInt(localStorage.getItem("clickCount")) || 0;
  count += 1;
  localStorage.setItem("clickCount", count);

  const totalDisplay = document.getElementById("total");
  if (totalDisplay) {
    totalDisplay.textContent = "Total Clicks: " + count;
  }
}
