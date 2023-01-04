import React from 'react'
import { Link } from 'react-router-dom'
import "./sectionlink.scss"
function SectionLink() {
  return (
    <section className='sectionlink'>
        <div className='sectionlink_width'>
            <div className='link_form'>
                <Link to={"/linkone"}>
                    <h2>Magna nostrud incididunt cupidatat cillum incididunt et nisi in ut minim reprehenderit.</h2>
                    <p>Labore irure irure laborum quis tempor aliqua. Dude</p>
                </Link>
                <p>February 19, 2020</p>
            </div>
            <div className='link_form'>
                <Link to={"/linktwo"}>
                    <h2>Dolore pariatur amet ullamco aliquip mollit aliqua qui.</h2>
                    <p>Eiusmod ipsum do dolore fugiat consequat quis non qui velit consectetur velit.</p>
                </Link>
                <p className='link-p'>February 17, 2020</p>
            </div>
            <div className='link_form'>
                <Link to={"/linkthree"}>
                    <h2>Velit esse dolor dolor qui cillum velit in quis exercitation occaecat.</h2>
                    <p>Adipisicing sit minim occaecat nulla proident exercitation do laboris.</p>
                </Link>
                <p>February 15, 2020</p>
            </div>
        </div>
    </section>
  )
}

export default SectionLink