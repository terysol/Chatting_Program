import React from "react";
import {Component} from "react";

function Food(props){           // {fav} -> props.fav 똑같음

    return <h1> I like {props.fav} </h1>
}

function App() {
  return (
      <div>
        <h1>Hello</h1>
        <Food fav="kimchi"/>
        <Food fav="ramen"/>
        <Food fav="마라탕"/>
          
      </div>
  );
}

// state, setState() 메서드를 통해서 state 값 변경
class App1 extends Component{
    state={
        count:0,
        isLoading:true,
        movies:[]
    };
    add =()=>{
        this.setState(cur=>({count:cur.count+1}))
    }
    minus=()=>{
        this.setState(cur=>({count:cur.count+1}));
    }

    componentDidMount() {
        setTimeout(()=>{
            this.setState({isLoading:false});
        },6000)
    }

    render() {
        return(
            <div>
                {/*<h1>The number is : {this.state.count}</h1>
                <button onClick={this.add}>ADD</button>
                <button onClick={this.minus}>MINUS</button>*/}

                {this.state.isLoading ? "Loading..":"We are ready"}
            </div>
        )
    }
}

export default App;

// render를 하면 호출되는 Life cycle -> componentDidMount
// state를 선언하는건 필수가 아니다