import React, { Component } from 'react'
import './Contact.css'

export class Contact extends Component {
    render() {
        return (
            <div>
                
                <section className="contact-info-container">
            <h2 id="contact">Contact info</h2>
            <ul className="contact">
                <li className="email">
                    <a href="mailto:mal3905@gmail.com" target="_blank" className="fas fa-envelope-square"></a>
                </li>
                <li className="fab fa-linkedin"
                    onclick="window.open(' https://www.linkedin.com/in/mariadanielson/', '_blank')" ></li>
                <li className="fab fa-github-square"
                    onclick="window.open(' https://github.com/mal3905', '_blank')"></li>
            </ul>
            
        <div className='dc-based'>
                <h4 className="location">Based in the DC-metro area</h4>   
         </div>
        </section>
            </div>
        )
    }
}

export default Contact
