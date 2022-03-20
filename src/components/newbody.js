import React from "react";
import Fac from "./faculty";
import Men from "./mentor";
import Led from "./lead";


export default function B(){
    return(
        <div className="newbody">
            <div>

                <div>
                    <h1 className="newbody-header">Year 2021-22</h1>
                </div>

                <div className="newbody-members">
                    <Fac />
                    <Men />
                    <Led />

                </div>



            </div>


        </div>
    )
}