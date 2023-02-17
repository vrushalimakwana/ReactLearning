import User from "./User";
import Members from "./Members";
function App() {
    function getData()
    {
        alert("hello from app")
    }
  return(
      <div className="App">
        <center>
            {/*<h1>Pass Function as props</h1>*/}
            <User data={getData} />
            <div>
                <Members data={getData}/>
            </div>
        </center>
      </div>
  );
}

export default App;