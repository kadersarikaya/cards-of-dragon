import React,{useState} from 'react'
import Button from '../button/Button'
import './navbar.css'
import {IoIosMenu} from 'react-icons/io'
import logo from '../../assets/logo/logo.svg'
type Props = {}

const Navbar = (props: Props) => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <nav>
      <div className="cod__navbar">
        <div className="cod__navbar-top">
          <div className="cod__navbar-logo">
              <img width={240} height={210} src={logo} alt="" />
          </div>
          <ul className="cod__navbar-links">
              <li className=""><a href="#home">HOME</a></li>
              <li className=""><a href="#story">STORY</a></li>
              <li className=""><a href="#rules">RULES</a></li>
          </ul>
          <div className="cod__navbar-play">
              <Button buttonName={'PLAY'} />
          </div>
          <div className="cod__navbar-menu">
          <IoIosMenu  onClick={() => setToggleMenu(!toggleMenu)} />
          </div>
        </div>
      </div>
      <div className="cod__navbar-menu-open">
          {toggleMenu && 
            <div className="cod__navbar-menu__left">
              <button className='cod__navbar-menu__close'>X</button>
              <ul className="cod__navbar-menu-links">
                <li className=""><a href="#home">HOME</a></li>
                <li className=""><a href="#story">STORY</a></li>
                <li className=""><a href="#rules">RULES</a></li>
              </ul>
            </div>
          }
      </div>
    </nav>
  )
}

export default Navbar