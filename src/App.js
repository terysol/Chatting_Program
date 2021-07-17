import React from "react";
import {Component} from "react";
import axios from "axios";
import Movie from "./movie"

// function Food(props){           // {fav} -> props.fav 똑같음
//
//     return <h1> I like {props.fav} </h1>
// }
//
// function App() {
//   return (
//       <div>
//         <h1>Hello</h1>
//         <Food fav="kimchi"/>
//         <Food fav="ramen"/>
//         <Food fav="마라탕"/>
//
//       </div>
//   );
// }

// state, setState() 메서드를 통해서 state 값 변경
class App extends Component{
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

            <div>
                {this.state.isLoading ? "Loading..":movies.map(movie =>{
                    return <Movie
                                key={movie.id}
                                id={movie.id}
                                  year={movie.year}
                                  title = {movie.title}
                                summary={movie.summary}
                                poster={movie.medium_cover_image}
                    />
                })}
            </div>
        )
    }
}

export default App;

// render를 하면 호출되는 Life cycle -> componentDidMount
// state를 선언하는건 필수가 아니다

// axios
// YTS api