const Card = (props) => {
  const handleClickAddToFavorites = () => {};

  return (
    <>
      <div className="card d-flex col-lg-3 m-3">
        <img
          className="img-fluid align-self-center pt-2"
          src={`https://image.tmdb.org/t/p/w300/${props.movie.backdrop_path}`}
          alt={`background ${props.movie.title}`}
        />
        <div className="card-body">
          <h2 className="card-title text-capitalize">{props.movie.title}</h2>
          <p className="card-text font-weight-bold">
            {props.movie.release_date}
          </p>
          <p className="card-text">{props.movie.overview}</p>
          <button
            className="btn btn-primary"
            onClick={() => handleClickAddToFavorites}
          >
            Add to favorites
          </button>
        </div>
      </div>
    </>
  );
};

export default Card;
