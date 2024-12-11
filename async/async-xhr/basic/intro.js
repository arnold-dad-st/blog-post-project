const movies = [
  {
    id: 1,
    name: "Inception",
  },
  {
    id: 2,
    name: "The Matrix",
  },
  {
    id: 3,
    name: "Interstellar",
  },
  {
    id: 4,
    name: "The Dark Knight",
  },
];

const getMovieById = (movieId) => {
  const movie = movies.find((movie) => movie.id === movieId);

  if (!movie) {
    return null;
  }
  
  return movie
};


const inception = getMovieById(1);

console.log(inception.name);
console.log('The End of the program'); 