import React from "react";
import pic from "../images/faculty.png";

export default function Fac(){
    return(
        <div className="faculty">
            <img src={pic} className="faculty-img"/>
            <h1>Panchami</h1>
            <h4>Faculty In-Charge</h4>
        </div>
    )
}