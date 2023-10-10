import moviesNames from "movies-names";

let moviesRandomNameGenerator = moviesNames.random(10);
let moviesRandomNames = [];

moviesRandomNameGenerator.map((data) => {
  moviesRandomNames.push(data.title);
});

// console.log(moviesRandomNames);

export async function getMoviesDataFromApi() {
  let moviesDetails = [];

  for (const movieName of moviesRandomNames) {
    try {
      const response = await fetch(
        `https://search.imdbot.workers.dev/?q=${movieName}`
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      //   console.log(data);
      moviesDetails.push(data.description[0]);
    } catch (error) {
      console.log(error);
    }
  }
  return moviesDetails;
}
