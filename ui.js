export const IOElements = {
  resultDisplay: document.querySelector("#result-display"),
  inputField: document.querySelector("#search-field"),
  searchButton: document.querySelector("#search-button"),
  randomButton: document.querySelector("#random-button"),
};

export function displayResult(content) {
  const display = document.querySelector("#result-display");
  display.textContent = content
}

