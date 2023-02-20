// import Members from "./Members";
import React from "react";
import User from "./User";
class App2 extends React.Component{
    constructor()
    {
        super();

        this.state={
            name:"Vrushali"
        }
        // console.log("constructor")
    }
    componentDidMount() {
        console.log("componentDidMount")
    }

    render()
    {
        console.log("render")
        //this.setState({name:"Makwana"})
        return (
            <div className="App2">
                <h1>Component Did Amount {this.state.name}</h1>
                <button onClick={()=>this.setState({name:"Makwana"})}>Update Name</button>
            </div>
        )
    }
}
export default App2;