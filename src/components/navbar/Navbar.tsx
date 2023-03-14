import React from 'react'
import Button from '../button/Button'
import './navbar.css'
type Props = {}

const Navbar = (props: Props) => {
  return (
    <nav className="cod__navbar">
        <div className="cod__navbar-logo">
            <img src="" alt="" />
        </div>
        <ul className="cod__navbar-links">
            <li className=""><a href="#home">HOME</a></li>
            <li className=""><a href="#story">STORY</a></li>
            <li className=""><a href="#rules">RULES</a></li>
        </ul>
        <div className="cod__navbar-play">
            <Button/>
        </div>
    </nav>
  )
}

export default Navbar