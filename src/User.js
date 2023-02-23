function User(props)
{
    return(
        <center>
           <div>
               <span>{props.data.name}</span>
               <span>{props.data.email}</span>
               <span>{props.data.address}</span>
           </div>
        </center>
    )
}
export default User;