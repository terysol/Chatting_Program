// movies를 render하는 곳
import React from "react";
import PropTypes from "prop-types"
import "./Movie.css"

function Movie({year,title,summary,poster, genres}){
    return <div className="movie">
        <img src={poster} alt={title} title={title}/>
        <div className="movie__date">
            <h3 className="movie__title">{title}</h3>
            <h5 className="movie__year">{year}</h5>
            <ul className="movie__genres">
                {genres.map((genre,idx) =>(
                    <li key={idx} className="genres__genre">{genre}</li>
                ))}
            </ul>
            <p className="movie__summary">{summary.slice(0,180)}...</p>
        </div>
    </div>
}


Movie.propTypes={
    id:PropTypes.number.isRequired,
    year:PropTypes.number.isRequired,
    title:PropTypes.string.isRequired,
    summary:PropTypes.string.isRequired,
    poster : PropTypes.string.isRequired,
    genres:PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Movie;

// gh-pages -> github의 사이트 이름