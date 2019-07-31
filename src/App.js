import React from 'react';
import './App.css';
import Movie from './Movie';


const movies = [
  {
    title: "Matrix",
    poster: "https://t1.daumcdn.net/movie/e49c2e4eb419a9813228b5ab6bc5b039362236ea"
  },
  {
    title: "Full Metal Jacket",
    poster: "https://img1.daumcdn.net/thumb/R338x491/?fname=http://t1.daumcdn.net/cfile/205CF91249EC79F00F"
  },
  {
    title: "Oldboy",
    poster: "http://movie.phinf.naver.net/20111222_177/1324537084439rmrVk_JPEG/movie_image.jpg"
  },
  {
    title: "Star Wars",
    poster: "https://vignette.wikia.nocookie.net/starwars/images/f/fd/Star_Wars_Episode_VII_The_Force_Awakens.jpg/revision/latest?cb=20160229135720&path-prefix=ko"
  },
]

function App() {
  return (
    <div className="App">
      {movies.map((movie, index) => {
        return <Movie title={movie.title} poster={movie.poster} key={index}/>
      })}
    </div>
  );
}

export default App;
