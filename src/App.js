import React from 'react';
import './App.css';
import Nav from './Nav/Nav'
import About from './About/About'
import Contact from './Contact/Contact'
import Projects from './Projects/Projects'



function App() {
  return (
    <div className="App">
      <main>
        <Nav/>
        <About/>
        <Projects/>  
        <Contact/>
        
      </main>
      <footer>&copy;Maria 2019. All rights reserved.</footer>
    </div>
  );
}

export default App;
