const correctCode = "mySecret123"; // Replace this with your actual code

document.getElementById("submitBtn").addEventListener("click", function () {
  const userInput = document.getElementById("codeInput").value;
  const errorMsg = document.getElementById("error");

  if (userInput === correctCode) {
    // Redirect to your real homepage
    window.location.href = "home.html";
  } else {
    errorMsg.textContent = "Incorrect code. Try again.";
  }
});
