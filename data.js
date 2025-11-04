export function searchSwapiForPeople(query) {
  console.log(query)
    const url = `https://swapi.dev/api/people/?search=${query}`;
    fetch(url)
        .then(response => response.json())
        .then(data => {
          console.log(data)
            return data;
        });
}