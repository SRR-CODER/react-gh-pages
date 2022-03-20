import Men from "./mentor";
import Led from "./lead";
import Led20 from "./lead20";
import Led19 from "./lead19";
import Accordion from 'react-bootstrap/Accordion';

export default function Try(){
    return(
        <>
            <div >
                <Accordion defaultActiveKey="0" flush>
                <Accordion.Item eventKey="0">
                    <Accordion.Header className="year">2021-2022</Accordion.Header>
                    <Accordion.Body>
                        <Men />
                        <Led />
                    </Accordion.Body>
                </Accordion.Item>
                <br></br>
                <Accordion.Item eventKey="1">
                    <Accordion.Header className="year">2020-2021</Accordion.Header>
                    <Accordion.Body>
                        <Men />
                        <Led20 />
                    </Accordion.Body>
                </Accordion.Item>
                <br></br>
                <Accordion.Item eventKey="2">
                    <Accordion.Header className="year">2019-2020</Accordion.Header>
                    <Accordion.Body>
                        <Men />
                        <Led19 />
                    </Accordion.Body>
                </Accordion.Item>
                <br></br>
                <Accordion.Item eventKey="3">
                    <Accordion.Header className="year">2018-2019</Accordion.Header>
                    <Accordion.Body>
                        <Men />
                        {/* <Led /> */}
                    </Accordion.Body>
                </Accordion.Item>
                <br></br>
                <Accordion.Item eventKey="4">
                    <Accordion.Header className="year">2017-2018</Accordion.Header>
                    <Accordion.Body>
                        <Men />
                        {/* <Led /> */}
                    </Accordion.Body>
                </Accordion.Item>
                </Accordion>

            </div>
        </>
    )
}