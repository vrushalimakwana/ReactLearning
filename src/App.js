// import Members from "./Members";
import React from "react";
import User from "./User";

function App() {
    const [name,setName]=React.useState("Vrushali")

    return (
        <div className="App">
            <h1>Render Methods in React</h1>
            <User />
            {/*<button onClick={()=>setName("Makwana")}> Update Name</button>*/}
        </div>
    )
}
export default App;