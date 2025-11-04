import { displayResult as display } from "./ui.js";
import { IOElements } from "./ui.js";
import { searchSwapiForPeople } from "./data.js";

display("Search, and ye shall find! And here is where you will find it.");

const {inputField, searchButton} = IOElements

searchButton.addEventListener("click", () => {
  console.log(inputField.value)
    const results = searchSwapiForPeople(inputField.value);
    display(results);
});