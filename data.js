export async function searchSwapiForPeople(query) {
  console.log("Function param: ", query);
  const url = `https://swapi.dev/api/people/?search=${query}`;
  
  const swapiResults = await fetch(url)
    .then(response => response.json())
    .then(data => data.results)
    .catch(console.error)
  
    console.log("swapiResults (data.js):", swapiResults)
  return swapiResults
}
  
//   try {
//     const response = await fetch(url)
//     if(!response.ok) { 
//       throw new Error(response.status)
//     }
    
//     const result = await response.json()
//     console.log(result.results)
//     return result.results
  
//   } 
//   catch {
//     console.error(error.message)
//   }