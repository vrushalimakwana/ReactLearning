import React from "react";
class Unmount extends React.Component {
    render() {
        return (
            <div className="Unmount">
                <h1>Component Will Unmount</h1>
                <button>Toggle Child Component</button>
            </div>
        )
    }
}
export default Unmount;