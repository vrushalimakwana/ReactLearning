import React,{createRef} from "react";
class Ref extends React.Component {
    constructor()
    {
        super();
        this.inputRef=createRef();
    }
    componentDidMount()
    {
        // console.log(this.inputRef.current.value="1000")
    }
    getVal()
    {
        console.log(this.inputRef.current.value)
        this.inputRef.current.style.color="red"
        this.inputRef.current.style.backgroundColor="black"
    }

    render() {
        return (
            <div className="Ref">
                <h1>Ref in React</h1>
                <input type="text" ref={this.inputRef}/>
                <button onClick={()=>this.getVal()}>Check Ref</button>
            </div>
        );
    }
}
export default Ref;