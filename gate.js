const correctCode = "calebhasagyatt"; 

document.getElementById("submitBtn").addEventListener("click", function () {
  const userInput = document.getElementById("codeInput").value;
  const errorMsg = document.getElementById("error");

  if (userInput === correctCode) {

    window.location.href = "home.html";
  } else {
    errorMsg.textContent = "Incorrect code. Try again.";
  }
});
