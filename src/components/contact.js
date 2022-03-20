import React from "react";

export default function Contactus(){
    return (
        <div className="contact-bg">
            {/* <form>
                <h1>Contact Us..</h1>
                <table>
                    <tr>
                        <td><label>Name</label></td>
                        <td><input type="text" id="name" /></td>
                    </tr>
                    <tr>
                        <td><label>E-Mail</label></td>
                        <td><input type="text" id="email" /></td>
                    </tr>
                    <tr>
                        <td><label>Message</label></td>
                        <td><textarea type="text" id="message"/></td>
                    </tr>
                </table>
                <br></br><br></br> */}
                {/* <button type="submit" className="contact-button">Send</button> */}
                {/* </form> */}
                <h1 className="contact-heading">Get in touch with us..</h1>
                <button onClick={() => window.location = 'mailto:techclub@iiitkottayam.ac.in'} className="contact-button">Contact Us..</button>
                {/* <a href="mailto:someone@yoursite.com">Email Us</a> */}
                
                
            

        </div>
    )
}