import React, { useEffect, useState } from "react";
import MovieDetail from "../components/MovieDetail";
import tmdb from "../apis/tmdb";
import { useParams } from "react-router-dom";

export const DetailMovie = () => {
  let params = useParams();

  const [movie, setMovie] = useState([]);

  const idMovie = params?.id;
  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const fetchedMovie = await tmdb.get(`movie/${idMovie}`);
        setMovie(fetchedMovie.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchMovie();
  }, [idMovie]);


  return (
    <>
      <MovieDetail data={movie} />
    </>
  );
};

export default DetailMovie;
