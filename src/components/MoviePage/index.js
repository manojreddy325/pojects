import { Component } from "react";

import Header from "../Header";

import "./index.css";

class MoviePage extends Component {
  state = {
    moviesData: [],
    searchInput: "",
  };

  componentDidMount() {
    this.getMoviesData();
  }

  getMoviesData = async () => {
    const response = await fetch(
      `http://www.omdbapi.com/?t=star+wars&apikey=c2b8eea5`
    );
    const data = await response.json();
    console.log(data.Search);
    const updatedData = {
      poster: data.Poster,
      plot: data.Plot,
      actors: data.Actors,
      director: data.Director,
      title: data.Title,
      released: data.Released,
      rated: data.Rated,
    };
    this.setState({ moviesData: updatedData });
    console.log(updatedData);
  };

  renderMoviePageItem = () => {
    const { moviesData } = this.state;
    const {
      poster,
      actors,
      director,
      title,
      plot,
      released,
      rated,
    } = moviesData;
    return (
      <div className="items-con">
        <li className="item-container">
          <img src={poster} alt="movie" className="item-image" />
          <div className="item-info">
            <p className="item-title">
              <span className="span-name">{`Title : `}</span>
              {title}
            </p>
            <p className="item-title">
              <span className="span-name">{`Released : `}</span>
              {released}
            </p>
            <p className="item-title">
              <span className="span-name">{`Actors : `}</span>
              {actors}
            </p>
            <p className="item-title">
              <span className="span-name">{`Director : `}</span>
              {director}
            </p>
            <p className="item-title">
              <span className="span-name">{`Rated : `}</span>
              {rated}
            </p>
            <p className="item-title">
              <span className="span-name">{`Plot : `}</span>
              {plot}
            </p>
          </div>
        </li>
        <button type="button" className="delete-button">
          {" "}
          Delete
        </button>
      </div>
    );
  };

  onChangeSearchInput = (event) => {
    const { searchInput } = this.state;
    this.setState({ searchInput: event.target.value });
    console.log(searchInput);
  };

  onAddMovie = () => {};

  render() {
    const { searchInput } = this.state;
    return (
      <div>
        <Header />
        <div className="movie-list-container">
          <div className="input-container">
            <input
              type="search"
              placeholder="Search Movies"
              className="search-input"
              value={searchInput}
              onChange={this.onChangeSearchInput}
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
          <ul>{this.renderMoviePageItem()}</ul>
        </div>
      </div>
    );
  }
}

export default MoviePage;
