var movieList = [
  { title: "Star Wars: Return of the Jedi", year: "1977", length: 125, rating: "8.4", genre: "sci-fi" },
  { title: "The Matrix Revolutions", year: "2003", length: 129, rating: "6.7", genre: "sci-fi" },
  { title: "Omen : The Final Conflict", year: "1981", length: 108, rating: "6.7", genre: "horror" },
  { title: "Gladiator", year: "2000", length: 155, rating: "8.5", genre: "historical" },
  { title: "The Patriot", year: "2000", length: 165, rating: "7.1", genre: "historical" },
  { title: "The Matrix Reloaded”, year: “2003", length: 138, rating: "7.2", genre: "sci-fi" }
];

function getMovieTitle( index ){
  //add code

    return(movieList[index].title);

}

console.log(getMovieTitle(3));

function addMovie( movie ){
  //add code
  movieList.push(movie);
  return movieList;
}

var newMovie ={title: "kajer bedi Rohima”, year: “1990", length: 200, rating: "10", genre: "sci-fi-comedy-sadness"};
console.log(addMovie(newMovie));


function movieByRating(){

  movieList.sort(function (a, b) {
    return a.rating - b.rating;
  });

console.log(movieList);
}

console.log(movieByRating());

function findByTitle( title ){
  //add code

  var s=title;

  return movieList.search(s);
}

console.log(findByTitle("matrix"));
