async function checkCode(attempt){
let result = await fetch('https://goonhub-passcode.vercel.app/' + attempt);
let text = await result.text();
if (text == "Access Granted"){
//redirect to the home page
}

}

const correctCode = "calebhasagyatt"; 

document.getElementById("submitBtn").addEventListener("click", function () {
  const userInput = document.getElementById("codeInput").value;
  const errorMsg = document.getElementById("error");

  if (userInput === correctCode) {

    window.location.href = "niglet.html";
  } else {
    errorMsg.textContent = "Incorrect code. Try again.";
  }
});
