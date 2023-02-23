import React from "react";
import Cols from "./Cols";
import {Col} from "react-bootstrap";
function Fragment () {
    return (
        <div>
            <center>
                <h1>React Fragment</h1>
                <table>
                    <tbody>
                    <tr>
                        <Cols />
                    </tr>
                    </tbody>
                </table>
                </center>
        </div>
    );
}

export default Fragment;