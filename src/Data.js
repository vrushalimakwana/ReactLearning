import React from "react";
import User1 from "./User1";
function Data() {
function parentAlert(data)
{
    alert(data)
}
    return (
        <div className="Data">
            <h1>Lifting State Up</h1>
            <User1 alert={parentAlert}/>
        </div>
    );
}

export default Data;