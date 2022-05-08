import React, { Component } from 'react'
import Footer from './Footer'
 import Home from './Home'
import NavBar from './NavBar'
import './style.css'

 class Main extends Component {
  render() {
    return (
   <>
   <NavBar/>
            <Home />
            <Footer />
   </>
    )
  }
}

export default Main


