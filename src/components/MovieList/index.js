import { Component } from "react";

import Header from "../Header";

import MoviePageItem from "../MoviePageItem";

import "./index.css";

const moviesListDetails = [
  {
    Title: "The Avengers",
    Director: "Joss Whedon",
    Released: "04 May 2012",
    imdbID: "tt0848228",
    Ratings: "8.0/10",
    Actors: "Robert Downey Jr., Chris Evans, Scarlett Johansson",
    Plot:
      "Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Endgame",
    Director: "Joss Whedon",
    Released: "06 June 2014",
    imdbID: "tt4154796",
    Ratings: "6.0/10",
    Actors: "Robert Downey Jr., Chris Evans, Scarlett Johansson",
    Plot:
      "Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Infinity War",
    Released: "12 Aug 2015",
    Director: "Joss Whedon",
    imdbID: "tt4154756",
    Ratings: "7.0/10",
    Actors: "Robert Downey Jr., Chris Evans, Scarlett Johansson",
    Plot:
      "Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Age of Ultron",
    Released: "17 Feb 2018",
    Director: "Joss Whedon",
    imdbID: "tt2395427",
    Ratings: "8.0/10",
    Actors: "Robert Downey Jr., Chris Evans, Scarlett Johansson",
    Plot:
      "Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg",
  },
  {
    Title: "The Avengers",
    Released: "04 May 2012",
    Director: "Joss Whedon",
    imdbID: "tt0118661",
    Ratings: "9.0/10",
    Actors: "Robert Downey Jr., Chris Evans, Scarlett Johansson",
    Plot:
      "Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BYWE1NTdjOWQtYTQ2Ny00Nzc5LWExYzMtNmRlOThmOTE2N2I4XkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_SX300.jpg",
  },
  {
    Title: "The Avengers: Earth's Mightiest Heroes",
    Released: "09 Sep 2020",
    Director: "Joss Whedon",
    imdbID: "tt1626038",
    Ratings: "8.0/10",
    Actors: "Robert Downey Jr., Chris Evans, Scarlett Johansson",
    Plot:
      "Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BYzA4ZjVhYzctZmI0NC00ZmIxLWFmYTgtOGIxMDYxODhmMGQ2XkEyXkFqcGdeQXVyNjExODE1MDc@._V1_SX300.jpg",
  },
  {
    Title: "Ultimate Avengers: The Movie",
    Released: "20 Dec 2020",
    Director: "Joss Whedon",
    imdbID: "tt0491703",
    Ratings: "8.0/10",
    Actors: "Robert Downey Jr., Chris Evans, Scarlett Johansson",
    Plot:
      "Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTYyMjk0NTMwMl5BMl5BanBnXkFtZTgwNzY0NjAwNzE@._V1_SX300.jpg",
  },
  {
    Title: "Ultimate Avengers II",
    Released: "04 May 2012",
    Director: "Joss Whedon",
    imdbID: "tt0803093",
    Ratings: "9.0/10",
    Actors: "Robert Downey Jr., Chris Evans, Scarlett Johansson",
    Plot:
      "Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BZjI3MTI5ZTYtZmNmNy00OGZmLTlhNWMtNjZiYmYzNDhlOGRkL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "The Avengers",
    Released: "07 May 2012",
    Director: "Joss Whedon",
    imdbID: "tt0054518",
    Ratings: "10.0/10",
    Actors: "Robert Downey Jr., Chris Evans, Scarlett Johansson",
    Plot:
      "Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BZWQwZTdjMDUtNTY1YS00MDI0LWFkNjYtZDA4MDdmZjdlMDRlXkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_SX300.jpg",
  },
  {
    Title: "Avengers Assemble",
    Released: "09 Sep 2020",
    Director: "Joss Whedon",
    imdbID: "tt2455546",
    Ratings: "8.0/10",
    Actors: "Robert Downey Jr., Chris Evans, Scarlett Johansson",
    Plot:
      "Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTY0NTUyMDQwOV5BMl5BanBnXkFtZTgwNjAwMTA0MDE@._V1_SX300.jpg",
  },
];

class MovieList extends Component {
  state = {
    moviesData: moviesListDetails,
  };

  deleteMovie = (imdbID) => {
    const { moviesData } = this.state;
    const filteredMoviesData = moviesData.filter(
      (each) => each.imdbID !== imdbID
    );
    this.setState({
      moviesData: filteredMoviesData,
    });
  };

  onAddMovie = () => {};

  render() {
    const { moviesData } = this.state;
    return (
      <div className="movie-page-container">
        <Header />
        <div className="movie-list-container">
          <div className="input-container">
            <input
              type="search"
              placeholder="Search Movies"
              className="search-input"
            />
            <button
              type="button"
              className="add-button"
              onClick={this.onAddMovie}
            >
              Add Movie
            </button>

            <h1 className="sort-heading">Sort by</h1>
            <select className="select-item">
              <option value="Title">Title</option>
              <option value="Released">Released</option>
            </select>
          </div>
          <ul className="list-container">
            {moviesData.map((eachItem) => (
              <MoviePageItem
                movieDetails={eachItem}
                deleteMovie={this.deleteMovie}
                key={eachItem.imdbID}
              />
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default MovieList;
