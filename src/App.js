import React from "react";
import {Table} from "react-bootstrap";
function App() {
    const users = [
        { name: 'Pina', email: 'pina@test.com', address: [
                {Hn:"101",city:'Surat',Country:'India'},
                {Hn:"304",city:'Vadodara',Country:'India'},
                {Hn:"602",city:'Rajkot',Country:'India'},
                {Hn:"102",city:'Vapi',Country:'India'},
            ]},
        {
            name: 'John', email: 'john@test.com', address: [
                {Hn:"101",city:'Surat',Country:'India'},
                {Hn:"304",city:'Vadodara',Country:'India'},
                {Hn:"602",city:'Rajkot',Country:'India'},
                {Hn:"102",city:'Vapi',Country:'India'},
            ]},
        { name: 'Jenny', email: 'jenny@test.com', address: [
                {Hn:"101",city:'Surat',Country:'India'},
                {Hn:"304",city:'Vadodara',Country:'India'},
                {Hn:"602",city:'Rajkot',Country:'India'},
                {Hn:"102",city:'Vapi',Country:'India'},
            ]},
        { name: 'Siri', email: 'siri@test.com', address: [
                {Hn:"101",city:'Surat',Country:'India'},
                {Hn:"304",city:'Vadodara',Country:'India'},
                {Hn:"602",city:'Rajkot',Country:'India'},
                {Hn:"102",city:'Vapi',Country:'India'},
            ]},
    ]
    return (
        <div className="App">
            <center>
                <h1>List With Bootstrap Table</h1>
                <Table variant="dark" striped>
                    <tbody>
                    <tr>
                        <td>S.N</td>
                        <td>Name</td>
                        <td>Email</td>
                        <td>Address</td>
                    </tr>

                    {
                        users.map((item,i)=>
                            <tr key={i}>
                                <td>{i+1}</td>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                                <td>
                                    <Table variant="dark">
                                        <tbody>
                                        {
                                            item.address.map((data)=>
                                                <tr>
                                                    <td>{data.Hn}</td>
                                                    <td>{data.city}</td>
                                                    <td>{data.country}</td>
                                                </tr>
                                            )
                                        }
                                        </tbody>
                                    </Table>
                                </td>
                            </tr>
                        )
                    }
                    </tbody>
                </Table>

            </center>
        </div>
    );
}

export default App;