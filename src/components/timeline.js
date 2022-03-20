import React, { useState } from "react";
import Men from "./mentor";
import Collapsible from 'react-collapsible';
import Led20 from "./lead20";
import Led19 from "./lead19";

export default function Time(){

    const [timeHover, setTimeHover] = useState(2);

    return(
        <div className="container">
            <div className="timeline">
                <ul>
                    <li>
                        <Collapsible 
                            trigger="2020-21" 
                            className="timeline-content" 
                            onMouseOver = {() => setTimeHover(1)} 
                            onMouseOut = {() => setTimeHover(0)} 
                            open = {timeHover === 1 ? true : false}
                        >
                            <Men />
                            <Led20 />
                        </Collapsible>
                    </li>
                    <li>
                        <Collapsible 
                            trigger="2019-20"
                            className="timeline-content"
                            onMouseOver = {() => setTimeHover(2)} 
                            onMouseOut = {() => setTimeHover(0)} 
                            open = {timeHover === 2 ? true : false}
                        >
                            <Men />
                            <Led19 />
                        </Collapsible>
                    </li>
                    <li>
                        <Collapsible 
                            trigger="2018-19" 
                            className="timeline-content"
                            onMouseOver = {() => setTimeHover(3)} 
                            onMouseOut = {() => setTimeHover(0)} 
                            open = {timeHover === 3 ? true : false}
                        >
                            <Men />
                        </Collapsible>
                    </li>
                    <li>
                        <Collapsible 
                            trigger="2017-18"
                            className="timeline-content"
                            onMouseOver = {() => setTimeHover(4)} 
                            onMouseOut = {() => setTimeHover(0)} 
                            open = {timeHover === 4 ? true : false}
                        >
                            <Men />
                        </Collapsible>
                    </li>

                </ul>

            </div>

        </div>
    )
}