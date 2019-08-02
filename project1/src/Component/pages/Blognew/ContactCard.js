import React, {Component} from "react";
import "./stylesnew.css";
import Toolbar1 from './Toolbar1';
// import button from 'react-bootstrap';
function ContactCard(props) 
{
        return (
        <div>
            <div className="contact-card">
                <img src={props.contact.imgUrl}
                    width="40"
                    height="40"
                    alt="React Bootstrap logo"/>
                <h3>{props.contact.name}</h3>
                <p>Phone: {props.contact.phone}</p>
                <p>Email: {props.contact.email}</p>
            </div>
        <Toolbar1/>
        </div>
    
    );
    
}
export default ContactCard;