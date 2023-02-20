// import Members from "./Members";
//import React from "react";
//import User from "./User";
class Update01 extends React.Component {
    constructor() {
        super();
        this.state={
            count:0
        }
    }
    shouldComponentUpdate() {
        console.log("shouldComponentUpdate",this.state.count);
        if(this.state.count>5 && this.state.count<10)
        {
            return true;
        }

    }

    render() {
        return (
            <div className="Update01">
                <h1> Should Component Update {this.state.count}</h1>
                <button onClick={()=>{this.setState({count:this.state.count+1})}}>Update counter</button>
            </div>
        )
    }
}
export default Update01;