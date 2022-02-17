import "./index.css";

const MoviePageItem = (props) => {
  const { movieDetails, deleteMovie } = props;
  const {
    Poster,
    Plot,
    Actors,
    Director,
    Title,
    Released,
    Ratings,
    imdbID,
  } = movieDetails;

  const onDelete = () => {
    deleteMovie(imdbID);
  };

  return (
    <li className="main-container">
      <div className="item-container">
        <div className="align-centering">
          <img src={Poster} alt="movie" className="item-image" />
        </div>
        <div className="item-info">
          <p className="item-title">
            <span className="span-name">{`Title : `}</span>
            {Title}
          </p>
          <p className="item-title">
            <span className="span-name">{`Released : `}</span>
            {Released}
          </p>
          <p className="item-title">
            <span className="span-name">{`Actors : `}</span>
            {Actors}
          </p>
          <p className="item-title">
            <span className="span-name">{`Director : `}</span>
            {Director}
          </p>
          <p className="item-title">
            <span className="span-name">{`Rated : `}</span>
            {Ratings}
          </p>
          <p className="item-title">
            <span className="span-name">{`Plot : `}</span>
            {Plot}
          </p>
        </div>
        <div className="align-centering">
          <button type="button" className="delete-button" onClick={onDelete}>
            {" "}
            Delete
          </button>
        </div>
      </div>
    </li>
  );
};

export default MoviePageItem;
