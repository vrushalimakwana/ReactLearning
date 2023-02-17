import {useState} from "react";

function Form() {
    const [name,setName]=useState("");
    const [tnc,setTnc]=useState(false);
    const [interest,setInterest]=useState("");
    function getFormData(e)
    {
        console.log(name,tnc,interest);
        e.preventDefault()
    }
    return (
        <div className="Form">
            <center>
            <h1>Handle Form in React</h1>
            <form onSubmit={getFormData}>
                <input type="text" placeholder="enter name" onChange={(e)=>setName(e.target.value)}/><br /><br />
            <select onChange={(e)=>setInterest(e.target.value)}>
                <option>Select Options</option>
                <option>Marvel</option>
                <option>DC</option>
            </select><br /><br />
                <input type="checkbox" onChange={(e)=>setTnc(e.target.checked)} /><span>Accept Terms and conditions</span>
                <br /> <br />
                <button type="Submit">Submit</button>
            </form>
            </center>
        </div>
    );
}
export default Form;