import PropTypes from "prop-types";

function DetailofMovie({
  coverImg,
  title,
  titleLong,
  ln,
  genres,
  rating,
  runtime,
  year,
  desc,
}) {
  return (
    <div>
      <img src={coverImg} alt={title} />
      <h3>
        <i>{titleLong}</i>
      </h3>
      <p>{year}</p>
      <p>{`language: ${ln}`}</p>
      {genres !== null ? (
        <ul>
          {genres.map((g) => {
            <li key={g}>{g}</li>;
          })}
        </ul>
      ) : null}
      <p>{`rating: ${rating} runtime: ${runtime}`}</p>
      <br />
      <p>{desc}</p>
    </div>
  );
}

DetailofMovie.propTypes = {
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  titleLong: PropTypes.string.isRequired,
  ln: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  rating: PropTypes.number.isRequired,
  runtime: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  desc: PropTypes.string.isRequired,
};

export default DetailofMovie;
