import React,{useState} from "react";

function Login() {
    const [user,setUser]=useState("");
    const [password,setPassword]=useState("");
    const [userErr,setUserErr]=useState(false);
    const [passErr,setPassErr]=useState(false);
   function loginHandle(e)
   {
       if(user.length<3 || password.length<3)
       {
           alert("Type correct value")
       }
       else
       {
           alert("All Good")
       }

        e.preventDefault()
   }
  function userHandler(e){
       let item=e.target.value;
       if(item.length<3)
       {
           setUserErr(true)
       }
       else
       {
           setUserErr(false)
       }
       setUser(item)

    }
    function passwordHandler(e){
        let item=e.target.value;
        if(item.length<3)
        {
            setPassErr(true)
        }
        else
        {
            setPassErr(false)
        }
        setPassword(item)

    }

    return(
        <div>
            <center>
            <h1>Login</h1>
                <form onSubmit={loginHandle}>
                    <input type="text" placeholder="Enter User Id" onChange={userHandler} />{userErr?<span>User Not Valid</span>:""}
                    <br /> <br />
                    <input type="text" placeholder="Enter Password" onChange={passwordHandler}/>{passErr?<span>Password Not Valid</span>:""}
                    <br /> <br />
                    <button type="submit">Login</button>
                </form>
            </center>
        </div>
    );
}

export default Login;