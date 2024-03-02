# Palindrome Checker

This is a simple JavaScript program to check if a given text is a palindrome or not.

## How to Use

1. Open the `index.html` file in a web browser.
2. Enter the text you want to check into the input field.
3. Click the "Check" button.
4. The result will be displayed below the input field indicating whether the entered text is a palindrome or not.

## Code Explanation

- `textInput`: Represents the input field where the user enters the text to be checked.
- `checkBtn`: Represents the button that triggers the palindrome checking process.
- `resultDiv`: Represents the HTML element where the result will be displayed.
- `addEventListener`: Attaches a click event listener to the "Check" button. When clicked, it triggers the function to check if the entered text is a palindrome.
- `isTextPalindrome`: This function checks if a given text is a palindrome or not. It removes non-alphanumeric characters from the text, reverses it, and compares it with the original text to determine if it's a palindrome.
- `cleanText`: Removes non-alphanumeric characters from the input text using a regular expression.
- `reversedText`: Reverses the cleaned text.
- Returns `true` if the cleaned text is equal to its reverse, indicating that it's a palindrome, otherwise returns `false`.

## Notes

- Ensure the `index.html` file and the JavaScript code are properly linked and accessible to run the program.

