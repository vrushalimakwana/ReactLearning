function User1(props)
{
    const data="Vrushali Makwana"
    return(
        <div>
            <h1>User Name </h1>
            <button onClick={()=>props.alert(data)}>Click Me</button>
        </div>
    )
}

export default User1;