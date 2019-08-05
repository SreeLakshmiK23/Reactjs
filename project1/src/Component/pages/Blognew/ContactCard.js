import React, {Component} from "react";
import "./stylesnew.css";
import Toolbarone from './Toolbar1';
// import button from 'react-bootstrap';
function ContactCard(props) 
{
        return (
        <div>
             {/* <div className="contact-card">
                <img src={props.contact.url}
                    width="40"
                    height="40"
                    alt="React Bootstrap logo"/>
                {/* <h3>{props.contact.name}</h3> */}
                {/* <p>Title: {props.contact.title}</p>
                <p>Subject: {props.contact.subject}</p>
                <p>Content: {props.contact.content}</p>
            </div>   */}
        <Toolbarone/>
        </div>
    
    );
    
}
export default ContactCard;