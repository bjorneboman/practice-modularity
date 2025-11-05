export async function searchSwapiForPeople(query) {
  console.log("Function param: ", query);
  const url = `https://swapi.dev/api/people/?search=${query}`;
  await fetch(url)
    .then((response) => { 
      const res = response.json()
      console.log("res: ", res)
      return res 
    })
    .then((data) => {
      console.log("data:", data.results);
      return data.results;
    });
  
}
