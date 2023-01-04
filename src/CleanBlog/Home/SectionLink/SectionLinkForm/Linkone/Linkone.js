import React from 'react'
import Footer from '../../../../Footer/Footer'
import Navbar from '../../../../NAVBAR/Navbar'
import "./linkone.scss"
function Linkone() {
  return (
    <>
      <Navbar />
      <header className="header_link">
        <div className='header_color'>
          <div className='header_text'>
            <h1>Velit esse dolor dolor qui cillum velit in quis exercitation occaecat.</h1>
            <p>Adipisicing sit minim occaecat nulla proident exercitation do laboris.</p>
          </div>
        </div>
      </header>
      <section className='sectinon_link_one'>
        <div className='link_form'>
          <h2>Velit esse dolor dolor qui cillum velit in quis exercitation occaecat.</h2>
          <p>Adipisicing sit minim occaecat nulla proident exercitation do laboris.</p>
        </div>
        <div className='link_form'>
          <h2>Mollit magna sunt ipsum eiusmod magna non officia officia id nostrud cillum.</h2>
          <p>Laboris culpa ea est et aliqua amet ullamco Lorem non enim laborum incididunt ex Lorem. 
            Minim sint cupidatat magna esse labore id. Do qui incididunt consectetur nulla aliquip consequat 
            nostrud incididunt occaecat ad. Excepteur nulla adipisicing enim ea occaecat fugiat dolore sunt est et. 
            Eu veniam nostrud sit aute consectetur dolore ipsum fugiat anim duis.</p>
        </div>
      </section>
      <Footer/>
    </>
  )
}

export default Linkone