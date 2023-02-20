// import Members from "./Members";
import React from "react";
//import User from "./User";
class Update extends React.Component {
    constructor() {
        super();
        console.log("constructor")
        this.state={
            count:0
        }
    }
    componentDidUpdate(preProps,preState,snapshot)
    {
        console.log("componentDidUpdate",snapshot)
        if (this.state.count<10){
            this.setState({count:this.state.count+1})
        }
    }

    render() {
        // console.log("render")

        return (
            <div className="Update">
                <center>
                <h1>Component Did Update</h1>
                <button onClick={() =>{this.setState({count:1})}}> Update Name</button>
                </center>
            </div>
        )
    }
}
export default Update;