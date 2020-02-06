import React, { Component } from 'react'

export class Projects extends Component {
    render() {
        return (
            <div>
                 <h2 id="projects">Projects</h2>
      
            <div className= 'quiz-app-container'>
                <h3 className='travel-quiz-title'>Travel Quiz</h3>
                <div className="quiz-pic"><img src="./images/quizapp.compressed.png" alt="picture of main page from quiz app"/></div>
                <p className='travel-quiz-info'>
                    Quiz App is an interactive application that allows a user to be prompted through a 
                    series of 5 multiple choice questions regarding their knowledge of world landmarks and important
                    world events. Feedback is generated after every answer is submitted. If the wrong answer is 
                    submitted, user receives feedback with correct answer choice. This app keeps track of the user 
                    score as they move on to the next question and the total score is generated at the end. 
                </p>
                <button onclick="window.open('https://thinkful-ei-heron.github.io/Maria_Zayar_QuizzApp/ ','_blank')"> Visit page</button>
                <button onclick="window.open('https://github.com/thinkful-ei-heron/Maria_Zayar_QuizzApp.git','_blank')">View code</button>
                <div>
                    <ul className="quiz-logos">
                        <li className="fab fa-js-square"></li>
                        <li className="fab fa-html5"></li>
                        <li className="fab fa-css3-alt"></li>
                    </ul>
                    
                </div>
            </div>

                
                <div className= 'bookmark-container'>
                        <div className="bk-pic"><img src="./images/Bk-app-cp.png" alt="bookmark app picture of main page"/></div>
                        <p className='bk-info'>
                            This app lets users store and rate their custom web bookmarks. User can add bookmarks with title, url link, description,
                            and a rating based on a 5-point system. All saved bookmarks appear in a condensed default state showing only title
                            and rating. Other details can be viewed when user clicks inside bookmark container. Bookmarks can also be deleted from the list.


                        </p>
                        <button onclick="window.open(' https://thinkful-ei-heron.github.io/maria-bookmark-app/', '_blank')" >Visit page</button>
                        <button onclick="window.open('https://github.com/thinkful-ei-heron/maria-bookmark-app.git', '_blank') ">View code</button>
                            <ul className="bk-logos">
                                <li className="fab fa-js-square"></li>
                                <li className="fab fa-react"></li>
                                <li className="fab fa-css3-alt"></li>
                            </ul>
                      
                </div>
            </div>
        )
    }
}

export default Projects
