import React,{useRef} from "react";
function Ref2() {
    let inputRef=useRef(null);
    function controlInput()
    {
        inputRef.current.focus()
    }
    return (
        <div className="Ref2">
            <h2>
                useRef in React
                <input type="text" ref = {inputRef} />
                <button onClick={controlInput}>Handle Input</button>
            </h2>
        </div>
    )
}
export default Ref2;