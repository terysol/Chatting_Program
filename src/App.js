import React from "react";
import {HashRouter, Route} from "react-router-dom";
import "./App.css"
import About from "./routes/about"
import Home from "./routes/home"
import Navigation from "./components/Navigation";

// exact={true} -> /일때만 렌더링 해준다.
function App(){
    return <HashRouter>
        <Navigation/>
        <Route path ="/" exact={true} componenet={Home}/>
        <Route path="/about" component = {About}/>
    </HashRouter>
}

export default App;

// render를 하면 호출되는 Life cycle -> componentDidMount
// state를 선언하는건 필수가 아니다

// axios
// YTS api