import React, { Component } from 'react'
import './About.css'

export class About extends Component {
    render() {
        return (
       
        <section className="about">
            <div className='intro'>
                <h1 className="text">
                    “ Hi there, I’m Maria a web developer who has a passion for artful creations
                     with a purpose to make everything efficient, user friendly, and bug free! ”
                </h1>   
                <p className="pic-me"><img src="../images/me.jpg" alt="screen shot of author"/></p>
            </div>


            <p id="about"> 
                <h2 className="name-header">About me</h2>
            </p>

            <div className="about-me-text">
            <p>Hi there! I am a full stack developer based in the DC metro area. My previous experience was 
                    in the biomedical research field, until I decided to take my chances to make it as a developer.</p>

                <p>Five months later and hundreds of hours of coding at a software engineering intensive, I can 
                    call myself a developer. My creativity and curiosity have carried me to where I am, and I intend
                    to use them as my tools to keep building and developing awesome applications and websites! 
                    Coding is just part of who I am, but there are many other pieces that make me whole. I am a 
                    dog mom, an avid cook and a novice in photography.  I aim high but dissect those big goals
                    into smaller pieces, so I don’t miss anything. I have a sweet tooth and eat ice cream even 
                    if its below freezing outside. 
                
                <p>If you have any projects or ideas, I would love to hear about them and potentially become a collaborator.</p>
                </p>
            </div>
        </section>
        )
    }
}

export default About
