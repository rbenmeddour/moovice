import Card from "../components/Card";
// import NavBar from "../components/NavBar"
import { useEffect, useState } from "react";
// import LoadingAnimation from "../components/LoadingAnimation"

const Popular = () => {
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const request = await fetch(
      "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=23a55470b50e5df0ce7c6ff0cb1c5cd5"
    );
    const response = await request.json();
    setMovies(response);
  };

  if (!movies) {
    return <p></p>;
  }

  return (
    <>
      <h1>Popular</h1>

      <section className="d-flex flex-row flex-wrap justify-content-center">
        {movies.results.map((movie) => {
          return <Card movie={movie} />;
        })}
      </section>
    </>
  );
};

export default Popular;
