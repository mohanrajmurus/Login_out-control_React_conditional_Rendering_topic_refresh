import React from "react";

const Logoutbutton = (props) =>{
    return(
        <div>
            <button onClick={props.onClick}>Logout</button>
        </div>
    )
}

export default Logoutbutton;