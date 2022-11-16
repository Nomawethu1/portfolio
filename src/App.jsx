import React from 'react'
import Header from './components/header/header'
import Nav  from './components/navbar/nav'
import About from './components/About/about'
import Experiance from './components/experiance/experiance'
import Contacts from './components/contacts/contact'
import Footer from './components/footer/footer'
import Portfolio from './components/portfolio/portfolio'
import Services from './components/services/services'

const App = () => {
  return (
    <>
    <Header/>
    <Nav/>
    <About/>
    <Experiance/>
    <Services/>
    <Portfolio/>
    <Contacts/>
    <Footer/>
    </>
  )
}

export default App