import React from "react";
import User from "./User";
class App extends React.Component{
    constructor()
    {
        super();
        this.state={
            name:"Vrushali"
        }
    }
    componentDidMount()
    {
        console.log("componentDidMount")
    }

    render()
    {
        console.log("render")
        return (
            <div className="App">
                <h1>Component DId Mount {this.state.name}</h1>
                <button onClick={()=>{this.setState({name:"Makwana"})}}>Update Name</button>
            </div>
        )
    }
}
export default App;