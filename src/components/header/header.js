import React from "react"
import styles from './header.module.css'
import Nav from '../navbar//navbar'


const Header = () => (
  <header>
    <div className = {styles.Navbar}>
        
        <Nav/>
    </div>
  </header>
)


export default Header
