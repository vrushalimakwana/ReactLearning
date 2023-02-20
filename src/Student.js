import React from "react";
class Student extends React.Component {
    componentWillUnmount() {
       console.log("componentWillUnmounted Called")
    }


    render() {
        return (
            <div className="Unmount">
                <h1>Student component</h1>
                {/*<button>Toggle Child Component</button>*/}
            </div>
        )
    }
}
export default Student;