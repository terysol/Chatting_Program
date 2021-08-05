import React from "react";
import {Component} from "react";
import axios from "axios";
import Movie from "../components/movie"
import "./Home.css"

// state, setState() 메서드를 통해서 state 값 변경
class Home extends Component{
    state={
        isLoading:true,
        movies:[]
    };
    getMovies = async ()=>{  // 함수가 비동기 , axios가 끝날 때까지 기다림
        const {
            data:{
                data:{movies}
            }
        }= await axios.get("https://yts.mx/api/v2/list_movies.json?sort_by=rating")
        this.setState({movies,isLoading : false})
    }
    componentDidMount() {
        this.getMovies()
    }

    render() {
        const{isLoading,movies} = this.state;
        return(

            <section className="container">
                {isLoading ? (
                    <div className="loader">
                        <span className="loader__text">Loading</span>
                    </div>
                ) : (
                    <div className="movies">
                        {movies.map(movie =>{
                            return <Movie
                                key={movie.id}
                                id={movie.id}
                                year={movie.year}
                                title = {movie.title}
                                summary={movie.summary}
                                poster={movie.medium_cover_image}
                                genres={movie.genres}
                            />
                        })}
                    </div>
                )}
            </section>
        )
    }
}

export default Home;
