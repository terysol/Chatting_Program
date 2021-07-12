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
        count:0
    };
    add =()=>{
        this.setState(cur=>({count:cur.count+1}))
    }
    minus=()=>{
        this.setState(cur=>({count:cur.count+1}));
    }

    render() {
        return(
            <div>
                <h1>The number is : {this.state.count}</h1>
                <button onClick={this.add}>ADD</button>
                <button onClick={this.minus}>MINUS</button>
            </div>
        )
    }
}

export default App;
