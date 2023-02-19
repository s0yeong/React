import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import DetailofMovie from "../components/DetailofMovie";

function Detail() {
  const [loading, setLoading] = useState(true);
  const [details, setDetails] = useState([]);

  const { id } = useParams();

  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();

    setDetails(json.data.movie);
    setLoading(false);
  };
  useEffect(() => {
    getMovie();
  }, []);

  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <DetailofMovie
            key={details.id}
            coverImg={details.large_cover_image}
            title={details.title}
            titleLong={details.title_long}
            ln={details.language}
            genres={details.genres}
            rating={details.rating}
            runtime={details.runtime}
            year={details.year}
            desc={details.description_full}
          />
        </div>
      )}
    </div>
  );
}

export default Detail;
