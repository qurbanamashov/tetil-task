import React from 'react'
import Footer from '../../../../Footer/Footer'
import Navbar from '../../../../NAVBAR/Navbar'
import "../Linkone/linkone.scss"
function Linktwo() {
  return (
    <>
    <Navbar />
    <header className="header_link">
      <div className='header_color'>
        <div className='header_text'>
          <h1>Dolore pariatur amet ullamco aliquip mollit aliqua qui.</h1>
          <p>Eiusmod ipsum do dolore fugiat consequat quis non qui velit consectetur velit.</p>
        </div>
      </div>
    </header>
    <section className='sectinon_link_one'>
        <div className='link_form'>
          <h2>Dolore pariatur amet ullamco aliquip mollit aliqua qui.</h2>
          <p>Eiusmod ipsum do dolore fugiat consequat quis non qui velit consectetur velit.</p>
        </div>
        <div className='link_form'>
          <h2>Incididunt cillum do dolor occaecat.</h2>
          <p>Tempor sint cupidatat cillum do ut. Ipsum exercitation est ex id. Sunt ut labore ad nulla.</p>
        </div>
      </section>
      <Footer/>
    </>
  )
}

export default Linktwo