import { displayResult as display } from "./ui.js";
import { IOElements } from "./ui.js";
import { searchSwapiForPeople } from "./data.js";

display("Search, and find ye shall! And find it here you will, yes. Mhm.");

const {inputField, searchButton} = IOElements


searchButton.addEventListener("click", async () => {
  const results = await searchSwapiForPeople(inputField.value) 
   console.log("Results from main.js: ", results[0])
   display(results[0].name);
});