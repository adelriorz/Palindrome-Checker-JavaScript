const textInput = document.getElementById("text-input");
const checkBtn = document.getElementById("check-btn");
const resultDiv = document.getElementById("result");

checkBtn.addEventListener("click", function() {
  const text = textInput.value.trim().toLowerCase();

  if (text === "") {
    alert("Please input a value");
    return;
  }

  const isPalindrome = isTextPalindrome(text);

  resultDiv.textContent = `${text} is ${isPalindrome ? "" : "not"} a palindrome`;
});

function isTextPalindrome(text) {
  const cleanText = text.replace(/[^a-z0-9]/gi, ""); // Remove non-alphanumeric characters
  const reversedText = cleanText.split("").reverse().join("");
  return cleanText === reversedText;
}
