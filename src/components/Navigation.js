import React from "react";
import { Link } from "react-router-dom";

function Navigation(){
    return   <div className="nav">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
    </div>
}

// Link는 라우터 안에서만 작동한다.

export default Navigation;