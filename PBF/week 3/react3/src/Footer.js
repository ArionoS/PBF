import React from "react";

const Footer = (props) => {
    return (
        <div>
           <h3>Page Footer</h3>
             <h3>This component was created using FUnction instead of Class</h3>
             <p>This value is returned from props: {props.title}</p>
             <p>My Name: {props.name}</p>
        </div>
    )
}

export default Footer;