import React from "react";
class User extends React.Component{
    constructor() {
        super();
        this.state={
            email:"vrushali@test.com"
        }
        //enter props in constructor
        console.log(this.props)
    }
    render() {
        console.log("Render Method",this.state.email)
        return(
            <div>
                <h1>User Components</h1>
                <button onClick={()=>this.setState({email: "makwana@test.com"})}>Update Email</button>
            </div>
        );
    }
}
export default User;