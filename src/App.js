import React from "react";

function Food({fav}){           // {fav} -> props.fav 똑같음

    return <h1> I like {fav} </h1>
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

export default App;
