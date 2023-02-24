import React,{useRef} from "react";
import User from "./User";
function App1() {
    let inputRef=useRef(null);
    function updateInput(){
        inputRef.current.value="1000"
    }
    return (
        <div className="App">
            <h1>ForwardRef in react</h1>
            <User ref={inputRef}/>
            <button onClick={updateInput}>Update InputBox </button>
        </div>
    );
}
export default App1;