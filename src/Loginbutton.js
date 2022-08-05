import React from "react";

const Loginbutton = (props) =>{
    return(
        <div>
            <button onClick={props.onClick}>Login</button>
        </div>
    )
}

export default Loginbutton;