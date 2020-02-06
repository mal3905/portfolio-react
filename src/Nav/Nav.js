
import React, { Component } from 'react'
import './Nav.css'

export class Nav extends Component {
    render() {
        return (
            
                <header>
                   <nav class="navigation">
                            <ul class="menu">
                                <li class='about-me'><a href="#about">About me</a></li>
                                <li class="projects"><a href="#projects">Projects</a></li>
                                <li class='contact info'><a href="#contact">Contact info</a></li>
                            </ul>
                    </nav>
   
        </header>


        )
    }
}

export default Nav
