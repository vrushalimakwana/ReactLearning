import React from "react";

function Members(props) {
    return(
        <div>
            <h1>User Component</h1>
            <button onClick={props.data}>Call data FUnction</button>
        </div>
    )
}

export default Members;