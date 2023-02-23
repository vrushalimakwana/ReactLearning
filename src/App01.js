import React from "react";
import User from "./User";
function App01() {
    const users = [
        {
            name: 'Peter', email: 'peter@test.com', contact:"111"
        },
        {
            name: 'John', email: 'john@test.com', contact: "222"
        },
        {
            name: 'Sam', email: 'sam@test.com', contact:"333"
        },
        {
            name: 'Jerry', email: 'jerry@test.com', contact:"444"
        },

    ]
    return (
        <div className="App01">
            <center>
            <h1>Reuse Component </h1>
            {
                users.map((item,i)=>
                <User data={item}/>
                )
            }

            </center>
        </div>
    )
}

export default App01;