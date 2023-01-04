import React from 'react'
import Footer from '../Footer/Footer'
import Navbar from '../NAVBAR/Navbar'
import "./about.scss"
function About() {
  return (
    <>  
     <Navbar/>
     <header className="header_home aaa">
      <div className='header_color'>
        <div className='header_text'>
          <h1>About Me</h1>
          <p>This is what I do</p>
        </div>
      </div>
    </header>
    <Footer/>
    </>   
  )
}

export default About