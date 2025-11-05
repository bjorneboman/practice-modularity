import { displayResult as display } from "./ui.js";
import { IOElements } from "./ui.js";
import { searchSwapiForPeople } from "./data.js";

display("Search, and find ye shall! And find it here you will, yes. Mhm.");

const {inputField, searchButton} = IOElements

searchButton.addEventListener("click", () => {
    // const results = searchSwapiForPeople(inputField.value);
    console.log("Results from function: ", searchSwapiForPeople(inputField.value))
    // display(results);
});