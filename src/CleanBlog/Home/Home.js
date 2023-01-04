import React from 'react'
import Footer from '../Footer/Footer'
import Navbar from '../NAVBAR/Navbar'
import HeaderHome from './HeaderHome/HeaderHome'
import LinkFixed from './LinkFixed/LinkFixed'
import SectionLink from './SectionLink/SectionLink'

function Home() {
  return (
    <>
    <Navbar/>
    <HeaderHome/>
    <LinkFixed/>
    <SectionLink/>
    <Footer/>
    </>
  )
}

export default Home