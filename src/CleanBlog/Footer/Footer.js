import React from 'react'
import { AiFillTwitterCircle } from 'react-icons/ai'
import { BsFacebook, BsGithub } from 'react-icons/bs'
import "./footer.scss"
function Footer() {
  return (
    <footer>
        <div className='footer_width'>
            <div className='footer_icon-box'>
                <p><AiFillTwitterCircle/></p>
            </div>
            <div className='footer_icon-box'>
                <p><BsFacebook/></p>
            </div>
            <div className='footer_icon-box'>
                <p><BsGithub/></p>
            </div>
        </div>
    </footer>
  )
}

export default Footer