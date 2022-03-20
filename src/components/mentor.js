import React from "react"
import pic from "../images/newlead.png";
import pic1 from "../images/email.png";
import pic2 from "../images/linkedin.png";

export default function Mentor(){
    return(
        <div className="mentor">
            <div>
                <img src={pic} className="mentor-img"/>
                <h1>Saket</h1>
                <h4>Mentor</h4>
                {/* <div className="connections">
                    <button onClick={() => window.location = 'mailto:techclub@iiitkottayam.ac.in'} className="email-icon"><img src={pic1} /></button>
                    <button className="linkedin-icon"><a href="www.google.com"><img src={pic2} /></a></button>
                </div> */}
            </div>
            <div>
                <img src={pic} className="mentor-img"/>
                <h1>Saket</h1>
                <h4>Mentor</h4>
                {/* <div className="connections">
                    <button onClick={() => window.location = 'mailto:techclub@iiitkottayam.ac.in'} className="email-icon"><img src={pic1} /></button>
                    <button className="linkedin-icon"><a href="www.google.com"><img src={pic2} /></a></button>
                </div> */}
            </div>
        </div>
    )
}